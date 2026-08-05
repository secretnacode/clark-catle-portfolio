export default function Footer() {
  return (
    <footer className="py-12 border-b-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-foreground font-semibold">
              Clark David M. Catle
            </p>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer | Backend-Focused Software Engineer
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
