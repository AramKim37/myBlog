import "./post.css";
import TwoJack from "../images/5.JPG";

export default function Post() {
  return (
    <div className="post">
      <img className="post-img" src={TwoJack} alt=""></img>
      <div className="post-info">
        <div className="post-cats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>

      <p className="post-desc">
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
        djhfasjkhfkdjahfkjasdhfiuoewhfoewiuhfwieoufdkjfeopijfepoiwfjewop
        hfiuweohfoiewuhfweiouhfewiouhfewoiufhweoiuffdsjfsdajfpoidjsafpoidjsafpoidjs
      </p>
    </div>
  );
}
