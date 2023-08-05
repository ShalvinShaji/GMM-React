import React from 'react'
import Sectionhead from './Sectionhead'
import '../css/Homerecentnews.css'

export default function Homerecentnews() {
  return (
    <section id="recent-posts" className="recent-posts">
        <Sectionhead sectionname="Recent news" />
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="post-box">
                        <div className="post-img"><img src="assets/img/news/news-dialysis.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="meta">
                            <span className="post-date">Tue, December 12</span>
                        </div>
                        <h4 className="post-title">Dialysis unit</h4>
                        <p >Available from monday from staurday</p>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="post-box">
                        <div className="post-img"><img src="assets/img/news/news-home-care.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="meta">
                            <span className="post-date">Fri, September 05</span>
                        </div>
                        <h4 className="post-title">Home care services available</h4>
                        <p >For additional informations and booking <br/> CONTACT US 0469 278
                            2262,
                            8281161330</p>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="post-box">
                        <div className="post-img"><img src="assets/img/news/news-mortuary-service.jpg" className="img-fluid"
                                alt=""/></div>
                        <div className="meta">
                            <span className="post-date">Tue, July 27</span>
                        </div>
                        <h4 className="post-title">MORTUARY SERVICES AVAILABLE 24*7</h4>
                        <p>CONTACT US 0469 2682262, 8281161330</p>
                    </div>
                </div>
            </div>

        </div>

    </section>

   
  )
}
