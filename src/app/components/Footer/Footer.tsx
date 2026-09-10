export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted">
      &copy; {new Date().getFullYear()} {name}
    </footer>
  );
}
