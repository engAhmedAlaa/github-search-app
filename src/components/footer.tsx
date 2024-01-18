export function Footer() {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <footer className="rounded-xl border p-6 text-center shadow-main shadow-sm transition-colors">
      <p>
        &copy; {years} Designed and Coded by{" "}
        <a
          href="https://github.com/engAhmedAlaa"
          target="_blank"
          className="font-medium text-primary"
        >
          Ahmed Alaa
        </a>
        .
      </p>
    </footer>
  );
}
