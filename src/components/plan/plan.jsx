import './plan.css'
import MusicImage from '/images/icon-music.svg';

export default function Plan(){
    return (
        <div id="plan">
            <div className="plan-child">
                <img src={MusicImage} alt="music" />
                <div className="fonts">
                    <h1 id='plan-header'>Annual Plan</h1>
                    <h1 id='plan-detail'>$59.99/year</h1>
                </div>
            </div>
            <h1 id='change-font'>Change</h1>
        </div>
    )
}