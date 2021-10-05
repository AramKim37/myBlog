import "./header.css";
import HeaderImg from "../images/header.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-sub">My Story</span>
      </div>
      <img className="header-img" src={HeaderImg} alt=""></img>
    </div>
  );
}
