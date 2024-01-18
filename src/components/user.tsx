import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/api";
import { ArrowDown } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserLinks } from "@/components/user-links";
import { UserStats } from "@/components/user-stats";
import { UserDetails } from "@/components/user-details";
import { Repos } from "@/components/repos";
import { Button } from "@/components/ui/button";

type Props = {
  userName: string;
};

export function User({ userName }: Props) {
  const [show, setShow] = useState(false);
  const queryObj = useSuspenseQuery({
    queryKey: ["users", userName],
    queryFn: getUser,
  });
  const {
    avatar_url,
    name,
    html_url,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = queryObj.data;
  const stats = [
    { title: "Repos", number: public_repos },
    { title: "Followers", number: followers },
    { title: "Following", number: following },
  ];

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <section className="bg-background-accent flex-1 rounded-xl border p-6 shadow-sm transition-colors md:flex md:gap-9 md:p-8">
        <Avatar className="hidden h-32 w-32 md:flex">
          <AvatarImage src={avatar_url ?? undefined} alt={name || login} />
          <AvatarFallback className="text-6xl">
            {name?.at(0) || login.at(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-6">
          <UserDetails
            avatar_url={avatar_url}
            login={login}
            name={name}
            html_url={html_url}
            created_at={created_at}
          />
          <p className="text-center text-muted-foreground xs:text-left">
            {bio ?? "This profile has no bio"}
          </p>
          <UserStats stats={stats} />
          <UserLinks
            location={location}
            blog={blog}
            twitter_username={twitter_username}
            company={company}
          />
        </div>
      </section>
      {show ? (
        <Repos userName={userName} />
      ) : (
        <Button
          onClick={handleShow}
          className="h-14 w-full rounded-xl shadow-sm"
          variant="outline"
        >
          Show repos <ArrowDown className="ml-2 h-6 w-6" />
        </Button>
      )}
    </>
  );
}
