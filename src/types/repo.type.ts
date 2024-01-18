export type RepoType = {
  id: string;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
  forks: number;
  open_issues: number;
  watchers: number;
};
