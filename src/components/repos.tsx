import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getRepos } from "@/lib/api";
import { ErrorComponent } from "@/components/error-component";
import { RepoSkeleton } from "@/components/repo-skeleton";
import { Repo } from "@/components/repo";

type Props = {
  userName: string;
};

export function Repos({ userName }: Props) {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryFn: getRepos,
    queryKey: ["users", userName, "repos"],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length < 4 || !lastPage.length
          ? undefined
          : allPages.length + 1;
      return nextPage;
    },
  });
  const { ref, inView } = useInView();

  const repos = data?.pages.reduce((acc, cur) => [...acc, ...cur], []);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "error" && !repos) {
    return <ErrorComponent error={error} resetErrorBoundary={refetch} />;
  }

  if (status === "pending" || !repos) {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        <RepoSkeleton />
        <RepoSkeleton />
      </section>
    );
  }

  return (
    <>
      {!repos.length ? (
        <section className="flex h-52 items-center justify-center gap-4 rounded-xl border p-6 font-medium shadow-sm">
          No repos found
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {repos.map((props) => (
            <Repo key={props.id} {...props} />
          ))}
          {isFetchingNextPage && (
            <>
              <RepoSkeleton />
              <RepoSkeleton />
            </>
          )}
          {!isFetchingNextPage && hasNextPage && !error && (
            <>
              <div ref={ref}>
                <RepoSkeleton />
              </div>
              <RepoSkeleton />
            </>
          )}
        </section>
      )}
      {error && <ErrorComponent error={error} resetErrorBoundary={refetch} />}
    </>
  );
}
