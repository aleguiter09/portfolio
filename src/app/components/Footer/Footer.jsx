import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Alejandro Guiter
    </footer>
  );
}
