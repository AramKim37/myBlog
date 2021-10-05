import "./sidebar.css";
import Aboutme from "../../images/aboutme.jpg";

export default function sideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img className="about-img" src={Aboutme} alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectu alkjdfoiladjfoia adiojfaodipfjaoip
          dljfal; fjaosidfjadosli;fj aiodjfaopi;jf ao diofjafpoasifjdapoifjo
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Movie</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebar-social">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}
