import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import TwoJack from "../../images/5.JPG";

export default function Settings() {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update Your Account</span>
          <span className="setting-delete-title">Delete Your Account</span>
        </div>
        <form className="setting-form">
          <label>Profile picture</label>
          <div className="setting-picture">
            <img src={TwoJack} alt=""></img>
            <label htmlFor="fileInput">
              <i className="setting-pictureIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="text" placeholder="aramkim37@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="setting-btn">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
