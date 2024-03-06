import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Journal App - {currentYear}</p>
    </footer>
  );
}
