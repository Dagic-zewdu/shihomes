import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Footer.css';

class Footer extends  Component{
    render(){
        return(

<div className="footer">
    <div className="footer_main">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_logo">
                        <Link to="/">
                        <img src="images/logo_large.png" alt=""/>
                        </Link>
                        </div>
                </div>
                <div className="col-lg-9 d-flex flex-column align-items-start justify-content-end">
                    <div className="footer_title">Latest Properties</div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 footer_col">
                    <div className="footer_about">
                        <div className="footer_about_text">Donec in tempus leo. Aenean ultricies mauris sed quam
                            lacinia lobortis. Cras ut vestibulum enim, in gravida nulla. Curab itur ornare nisl
                            at sagittis cursus.</div>
                    </div>
                </div>
                <div className="col-lg-3 footer_col">
                    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="footer_latest_image"><img src="images/footer_latest_1.jpg" alt=""/></div>
                        </div>
                        <div className="footer_latest_content">
                            <div className="footer_latest_location">Miami</div>
                            <div className="footer_latest_name"><Link to="/">Sea view property</Link></div>
                            <div className="footer_latest_price">$ 1. 234 981</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 footer_col">
                    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="footer_latest_image"><img src="images/footer_latest_2.jpg" alt=""/></div>
                        </div>
                        <div className="footer_latest_content">
                            <div className="footer_latest_location">Miami</div>
                            <div className="footer_latest_name"><Link to="/">Town House</Link></div>
                            <div className="footer_latest_price">$ 1. 234 981</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 footer_col">
                    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="footer_latest_image"><img src="images/footer_latest_3.jpg" alt=""/></div>
                        </div>
                        <div className="footer_latest_content">
                            <div className="footer_latest_location">Miami</div>
                            <div className="footer_latest_name"><Link to="/">Modern House</Link></div>
                            <div className="footer_latest_price">$ 1. 234 981</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 bg-secondary my-5">
                    <div className="card text-center bg-secondary">
                        Quick links
                    </div>
                </div>
            </div>
        </div>
    </div>
          
</div>
        )
    }
}

export default Footer;