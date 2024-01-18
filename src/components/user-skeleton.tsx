import { Skeleton } from "@/components/ui/skeleton";

export function UserSkeleton() {
  return (
    <>
      <section className="dark:bg-background-accent flex-1 rounded-xl border p-6 shadow-sm md:flex md:gap-9 md:p-8">
        <Skeleton className="hidden h-32 w-32 rounded-full md:flex" />
        <div className="flex-1 space-y-6">
          <div className="flex flex-col items-center gap-6 xs:flex-row xs:gap-8 md:items-start md:justify-between">
            <Skeleton className="xs:h-30 xs:w-30 h-32 w-32 rounded-full md:hidden" />
            <div className="flex flex-col items-center gap-2 xs:items-start">
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-6 w-32 md:hidden" />
            </div>
            <Skeleton className="hidden h-6 w-32 md:block" />
          </div>
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
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-7 w-16" />
              </li>
            ))}
          </ul>
          <ul className="grid justify-center gap-6 xs:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-4 xs:flex-row"
              >
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-6 w-32" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Skeleton className="h-11 w-full" />
    </>
  );
}
