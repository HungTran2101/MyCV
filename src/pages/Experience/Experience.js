import './Experience.scss'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TimeLine from '../components/TimeLine/TimeLine'
import { experienceData } from '../../utils/UserData'

export default function Experience() {
    return (
        <div id='experience' className='experience section'>
            <div className='container'>
                <div className='experience-inner'>
                    <SectionTitle title='experience' />
                    <TimeLine data={experienceData} />
                </div>
            </div>
        </div>
    )
}