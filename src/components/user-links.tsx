import {
  BuildingIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "@/components/icons";

import { cn } from "@/lib/utils";

type Props = {
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
};

export function UserLinks({
  location,
  blog,
  twitter_username,
  company,
}: Props) {
  return (
    <ul className="grid grid-cols-1 justify-center gap-6 xs:grid-cols-2">
      <li
        className={cn(
          "flex flex-col items-center gap-4 xs:flex-row",
          !location && "opacity-25",
        )}
        title={location ?? undefined}
      >
        <LocationIcon className="h-6 w-6 flex-shrink-0" />
        <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
          {location || "Not available"}
        </span>
      </li>
      <li
        className={cn(
          !blog && "flex flex-col items-center gap-4 opacity-25 xs:flex-row",
        )}
      >
        {blog ? (
          <a
            href={blog}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4 xs:flex-row"
            title={blog}
          >
            <LinkIcon className="h-6 w-6 flex-shrink-0" />
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
              {blog}
            </span>
          </a>
        ) : (
          <>
            <LinkIcon className="h-6 w-6 flex-shrink-0" />
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
              Not available
            </span>
          </>
        )}
      </li>
      <li
        className={cn(
          !twitter_username &&
            "flex flex-col items-center gap-4 opacity-25 xs:flex-row",
        )}
      >
        {twitter_username ? (
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            className="flex flex-col items-center gap-4 xs:flex-row"
            title={twitter_username}
          >
            <TwitterIcon className="h-6 w-6 flex-shrink-0" />
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
              {twitter_username}
            </span>
          </a>
        ) : (
          <>
            <TwitterIcon className="h-6 w-6 flex-shrink-0" />
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
              Not available
            </span>
          </>
        )}
      </li>
      <li
        className={cn(
          "flex flex-col items-center gap-4 xs:flex-row",
          !company && "opacity-25",
        )}
        title={company ?? undefined}
      >
        <BuildingIcon className="h-6 w-6 flex-shrink-0" />
        <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center xs:w-auto xs:text-left">
          {company || "Not available"}
        </span>
      </li>
    </ul>
  );
}
