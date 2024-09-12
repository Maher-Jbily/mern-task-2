
import "./Featured.css"
export default function Featured() {
  return (
    <div className="feat-container">
        <div className="ma-d-img">
            <img src="./images/featured.jpg" alt="" className="first-hero-img"/>
            <img className="fut-img2" src="./images/featured-icon.png" alt="" />
        </div>
        <div className="ma-d-center">
            <p className="fea-p1">FEATURED</p>
            <h3 className="fea-h3">Best Appartment & Sea View</h3>
            <div className="small-ma-center">
                <p className="s-c-p1">Best useful links ?</p>
                <hr />
                <p className="s-c-p2">Get <b>the best villa</b> website template in HTML CSS and Bootstrap for your business. TemplateMO provides you the <span id="m1">best free css template</span> in the world. Please tell your friends about it.</p>
                <p className="s-c-p3">How does this work?</p>
                <hr />
                <p className="s-c-p4">Why is Villa Agency the best ?</p>
            </div>
        </div>
        <div className="ma-d-right">
            <div className="right-c-d">
                <img src="./images/info-icon-01.png" alt="" />
                <span className="r-s-t">
                    <h3>250 m2</h3>
                    <p>Total Flat Space</p>
                </span>
            </div>
            <div className="right-c-d">
                <img src="./images/info-icon-02.png" alt="" />
                <span className="r-s-t">
                    <h3>Contract</h3>
                    <p>Contract Ready</p>
                </span>
            </div>
            <div className="right-c-d">
                <span>
                <img src="./images/info-icon-03.png" alt="" />
                <p>Process</p>
                </span>
                <span className="r-s-t">
                    <h3>Payment</h3>
                    <p>Payment</p>
                </span>
            </div>
            <div className="right-c-d sssmm">
                <span>
                <img src="./images/info-icon-04.png" alt="" />
                <p>Control</p>
                </span>
                <span className="r-s-t">
                    <h3>Safety</h3>
                    <p>24/7 Under</p>
                </span>
            </div>
        </div>
    </div>
  )
}
// كان افضل لو عملنا بعض الشغلات كمبونانت بس الوقت شوي ضيق