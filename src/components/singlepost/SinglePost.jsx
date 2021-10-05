import "./singlePost.css";
import TwoJack from "../../images/5.JPG";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="single-post-wrapper">
        <img className="singlePostImg" src={TwoJack} alt=""></img>
      </div>
      <h1 className="single-post-title">
        ewhfqproihgroiuhgriophgqpoirhgpq
        <div className="singlePost-edit">
          <i className="singlePost-icon far fa-edit"></i>
          <i className="singlePost-icon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePost-info">
        <span>
          Author: <b>Safak </b>
        </span>
        <span className="singlePost-date">1 hour ago</span>
      </div>
      <p className="singlePost-desc">
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
        adlkfjopiewhfopihfoewpifjweoijflsdkjfoaisjfoiewjfweilojfoiwejhfoiewhfowie
      </p>
    </div>
  );
}
