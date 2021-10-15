import "./sidebar.css";
import Aboutme from "../../images/aboutme.jpg";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function SideBar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img className="about-img" src={Aboutme} alt=""></img>
        <p className="mydesc">
          I love taking pictures of the Milky Way and hiking in nature and
          lakes. I enjoy activities like soccer and basketball, I also enjoy
          hanging out with people.
        </p>
      </div>
      {/* <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebar-list-item">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebar-social">
          <a href="https://www.facebook.com/profile.php?id=100003676083185">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/aramkim37/">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/aram-kim/">
            <i className="sidebarIcon fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/AramKim37">
            <i className="sidebarIcon fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
