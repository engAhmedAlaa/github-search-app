import dayjs from "dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatar_url: string | null;
  login: string;
  name: string | null;
  html_url: string;
  created_at: string;
};

export function UserDetails({
  avatar_url,
  login,
  name,
  html_url,
  created_at,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-6 xs:flex-row xs:gap-8 md:items-start md:justify-between">
      <Avatar className="xs:h-30 xs:w-30 h-32 w-32 md:hidden">
        <AvatarImage src={avatar_url ?? undefined} alt={name || login} />
        <AvatarFallback className="text-6xl">
          {name?.at(0) || login.at(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-2 xs:items-start md:gap-0">
        <h2 className="text-2xl font-semibold">{name || login}</h2>
        <a
          href={html_url}
          className="text-[0.9375rem] font-semibold text-primary"
          target="_blank"
        >
          @{login}
        </a>
        <div className="text-muted-foreground md:hidden">
          Joined{" "}
          <time dateTime={created_at}>
            {dayjs(created_at).format("DD MMM YYYY")}
          </time>
        </div>
      </div>
      <div className="relative top-1 hidden text-muted-foreground md:block">
        Joined{" "}
        <time dateTime={created_at}>
          {dayjs(created_at).format("DD MMM YYYY")}
        </time>
      </div>
    </div>
  );
}
