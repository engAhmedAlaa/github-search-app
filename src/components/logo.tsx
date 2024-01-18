import { GitHubIcon } from "@/components/icons";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 no-underline" translate="no">
      <GitHubIcon className="h-10 w-10 flex-shrink-0" />
      <h1 className="text-lg font-bold">Devfinder</h1>
    </a>
  );
}
