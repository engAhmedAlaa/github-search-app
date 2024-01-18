import { ErrorIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

type Props = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function ErrorComponent({ error, resetErrorBoundary }: Props) {
  return (
    <section
      role="alert"
      className="flex flex-1 flex-col items-center justify-center gap-6 rounded-xl border p-6 text-center shadow-sm md:flex md:p-8"
    >
      <ErrorIcon className="h-8 w-8 text-destructive" />
      <p className="text-lg font-medium">Oops! Something went wrong</p>
      <p className="w-full break-words font-mono">{error.message}</p>
      <Button variant="destructive" size="lg" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </section>
  );
}
