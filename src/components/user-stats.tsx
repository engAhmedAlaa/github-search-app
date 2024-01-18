type Props = {
  stats: {
    title: string;
    number: number;
  }[];
};

export function UserStats({ stats }: Props) {
  return (
    <ul className="flex flex-wrap justify-around gap-4 rounded-lg border px-6 py-4 transition-colors xs:justify-between">
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
  );
}
