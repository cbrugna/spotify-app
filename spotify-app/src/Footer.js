

import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="container footer fixed-bottom">

            <div class="row">

                <div class="col-sm footer__album__cover">
                    <img id="cover" src={require("./images/default-album-cover.png")} alt="default album cover"></img>
                </div>

                <div class="col-sm footer__album">
                    <p>footer__album</p>
                </div>
            
                <div class="col-sm footer__controls">
                    <p>footer__controls</p>
                </div>

                <div class="col-sm footer_volume">
                    <p>footer_volume</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer


//<img src={require("./images/default-album-cover.png")} alt="default album cover"></img>