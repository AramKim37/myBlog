import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contents">
        <p className="footer-info">
          copyright © {new Date().getFullYear()} - Developed by Aram Kim
        </p>
      </div>
      {/* Made &nbsp; by &nbsp;&nbsp;&nbsp;Aram Kim</p> */}
    </div>
  );
}
