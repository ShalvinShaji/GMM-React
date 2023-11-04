import React from "react";
import Sectionhead from "./Sectionhead";
import "../css/Homerecentnews.css";

export default function Homerecentnews({ recentNews }) {
  return (
    <section id="recent-posts" className="recent-posts">
      <Sectionhead
        sectionname="Recent news"
        sectiondescription="Our Latest"
        sectiondescriptionbold="News"
      />
      <div className="container">
        <div className="row g-3">
          {recentNews.map((news) => (
            <div key={news.id} className="col-xl-4 col-md-6">
              <div className="post-box">
                <div className="post-img">
                  <img src={news.imageSrc} className="img-fluid" alt="" />
                </div>
                <div className="meta">
                  <span className="post-date">{news.date}</span>
                </div>
                <h4 className="post-title">{news.title}</h4>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
