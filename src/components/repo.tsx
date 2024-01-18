import dayjs from "dayjs";
import { RepoType } from "@/types/repo.type";

type Props = RepoType;

export function Repo({
  name,
  html_url,
  description,
  language,
  created_at,
  forks,
  open_issues,
  watchers,
}: Props) {
  const stats = [
    {
      title: "Forks",
      number: forks,
    },
    {
      title: "Open issues",
      number: open_issues,
    },
    {
      title: "Watchers",
      number: watchers,
    },
  ];

  return (
    <article className="flex flex-col justify-between gap-4 rounded-xl border p-6 text-center shadow-sm transition-colors xs:text-left">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
        <a
          href={html_url}
          target="_blank"
          className="w-full overflow-hidden text-primary xs:w-auto"
          title={name}
        >
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold">
            {name}
          </h3>
        </a>
        <p className="flex-shrink-0 text-muted-foreground">
          Created{" "}
          <time dateTime={created_at}>
            {dayjs(created_at).format("DD MMM YYYY")}
          </time>
        </p>
      </div>
      <p className="text-muted-foreground">
        Main Language:{" "}
        <span className="font-medium text-foreground">
          {language || "Unknown"}
        </span>
      </p>
      <p className="break-words text-muted-foreground">
        {description ? description : "This repo has no description"}
      </p>
      <ul className="flex flex-wrap justify-around gap-4 rounded-lg border px-6 py-4 xs:justify-between">
        {stats.map(({ title, number }) => (
          <li
            key={title}
            className="flex flex-col items-center gap-2 xs:items-start"
          >
            <span className="text-xs">{title}</span>
            <span className="text-xl font-semibold">{number}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
