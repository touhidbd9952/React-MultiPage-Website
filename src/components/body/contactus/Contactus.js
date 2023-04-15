import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Contactus(props) {
    return (
        <div>
            <Header page={props.page}/>

            {/* <!-- contact section start --> */}
            <div class="contact_section layout_padding">
                <div class="container-fluid">
                    <h1 class="contact_taital">Contact Us</h1>
                    <p class="contact_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                    <div class="contact_section_2">
                        <div class="row">
                            <div class="col-md-6 padding_left_0">
                                <div class="map_main">
                                    <div class="map-responsive">
                                        <iframe
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                                            width="600" height="550" frameborder="0" style={{border:0, width: "100%"}} allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mail_section_1">
                                    <input type="text" class="mail_text" placeholder="Name" name="text" />
                                    <input type="text" class="mail_text" placeholder="Email" name="text" />
                                    <input type="text" class="mail_text" placeholder="Phone Number" name="text" />
                                    <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                                    <div class="send_bt"><a href="#">SEND</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- contact section end --> */}

            <Footer/>

        </div >
    )
}

export default Contactus