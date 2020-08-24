import React from "react" ;
import contactPagePicture from "../../../static/assets/images/bio/deeWorld.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return(
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + contactPagePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#f6f6f6"
            }}
            >

            </div>

            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">
                            939-293-2934
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">
                            david_mondragon@gmail.com
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">
                            Riverside, Ca
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
