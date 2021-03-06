import "./singlePost.css";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localgost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdate(false);
    } catch (err) {}
  };

  return (
    //   <div className="singlePost">
    //     <div className="single-post-wrapper">
    //       {post.photo && (
    //         <img src={PF + post.photo} alt="" className="singlePostImg"></img>
    //       )}{
    //         update ? (
    //           <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
    //         ) : ()
    //       }
    //       <h1 className="single-post-title">
    //         {post.title}
    //         {post.username === user?.username && (
    //           <div className="singlePost-edit">
    //             <i
    //               className="singlePost-icon far fa-edit"
    //               onClick={() => setUpdate(true)}
    //             ></i>
    //             <i
    //               className="singlePost-icon far fa-trash-alt"
    //               onClick={handleDelete}
    //             ></i>
    //           </div>
    //         )}
    //       </h1>
    //       <div className="singlePost-info">
    //         <span>
    //           Author:
    //           <Link to={`/?user=${post.username}`} className="link">
    //             <b>{post.username} </b>
    //           </Link>
    //         </span>
    //         <span className="singlePost-date">
    //           {new Date(post.createdAt).toDateString()}
    //         </span>
    //       </div>
    //       <p className="singlePost-desc">{post.desc}</p>
    //     </div>
    //   </div>
    // );

    <div className="singlePost">
      <div className="single-post-wrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {update ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post-title">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePost-icon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
                <i
                  className="singlePost-icon far fa-edit"
                  onClick={() => setUpdate(true)}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePost-info">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePost-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {update && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
