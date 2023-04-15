import React from 'react';
import {Link} from "react-router-dom";
import Banner from '../banner/Banner';

function Header(props) {
    
    return (
        <div>
            {/* <!-- header top section start --> */}
            <div class="header_top_section">
                <div class="container">
                    <div class="header_main">
                        <div class="location_text"><img src="images/map-icon.png" /><span class="padding_left_10"><a
                            href="#">Location</a></span></div>
                        <div class="location_text center"><img src="images/call-icon.png" /><span class="padding_left_10"><a href="#">Call
                            ; 01 1234567890</a></span></div>
                        <div class="location_text right"><img src="images/mail-icon.png" /><span class="padding_left_10"><a
                            href="#">demo@gmail.com</a></span></div>
                    </div>
                </div>
            </div>
            {/* <!-- header top section end --> */}

            {/* <!-- header section start --> */}
            <div class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        
                        <a class="logo" href="index.html"><img src="images/logo.png" /></a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link"   to={"/"}>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link"  to={"/about"}>About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link"  to={"/blog"}>Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link"  to={"/repair"}>Repair</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link"  to={"/contact_us"}>Contact Us</Link>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <div class="search_icon">
                                    <a href="#">
                                    <img src="images/search-icon.png" />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
                 {/* <!-- banner section start --> */}
                {
                   props.page =="home"?<Banner/>:''  
                }
                        
                    
            
                {/* <!-- banner section end --> */}
            {/* <!-- about section start --> */}
            </div>
            {/* <!-- header section end --> */}
        </div>
    )
}

export default Header