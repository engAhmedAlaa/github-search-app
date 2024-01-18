import { Skeleton } from "@/components/ui/skeleton";

export function RepoSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <div className="flex flex-col items-center justify-between gap-4 xs:flex-row">
        <Skeleton className="h-7 w-44" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="mx-auto h-6 w-2/3 xs:mx-0" />
      <div className="flex flex-col items-center gap-2 xs:items-start">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
      <ul className="flex flex-wrap justify-around gap-4 rounded-lg border px-6 py-4 xs:justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-2 xs:items-start"
          >
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-7 w-16" />
          </li>
        ))}
      </ul>
    </div>
  );
}
