import { Suspense, useState } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/components/error-component";
import { UserSkeleton } from "@/components/user-skeleton";
import { SearchForm } from "@/components/search-form";
import { User } from "@/components/user";

export function MainContent() {
  const [userName, setUserName] = useState("octocat");

  return (
    <main className="flex flex-1 flex-col space-y-6">
      <SearchForm setUserName={setUserName} />
      <QueryErrorResetBoundary key={userName}>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorComponent}>
            <Suspense fallback={<UserSkeleton />}>
              <User userName={userName} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </main>
  );
}
