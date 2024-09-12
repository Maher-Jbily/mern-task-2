import "./VideoView.css"
export default function VideoView() {
    return (
    <div>
        <div className="View-container">
            <div className="v-d">
            <p className="v-p">Video View</p>
            <h2 className="v-h2">Get Closer View & Diffrent Feeling</h2>
            </div>
            <video className="video" poster="/images/video-frame.jpg">
            </video>
        </div>
        <div className="small-card">
            <div className="s-c-v1">
                <p className="popo">34</p>
                <p className="roro1">Buildings Finshed Now</p>
            </div>
            <div className="s-c-v2">
                <p className="popo">12</p>
                <p className="roro2">Years Epxerience</p>
            </div>
            <div className="s-c-v3">
                <p className="popo">24</p>
                <p className="roro3">Awwards Won 2023</p>
            </div>
        </div>
    </div>
    )
}
