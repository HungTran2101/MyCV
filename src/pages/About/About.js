import './About.scss'
import { aboutData } from '../../utils/UserData'

function About() {
    return (
        <div id='about' className='about section animate fadeIn'>
            <div className='container'>
                <div className='about-inner'>
                    <div className='about-body'>{aboutData.description}</div>
                    <div className='about-footer'>
                        <button className='about-button'>download cv</button>
                        <button className='about-button'>contact me</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;