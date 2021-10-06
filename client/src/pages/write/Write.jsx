import "./write.css";
import TwoJack from "../../images/5.JPG";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={TwoJack} alt="" />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          ></input>
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}
