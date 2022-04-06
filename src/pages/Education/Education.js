import './Education.scss'
import SectionTitle from '../components/SectionTitle/SectionTitle';
import TimeLine from '../components/TimeLine/TimeLine'
import { educationData } from '../../utils/UserData'

function Education() {
    return (
        <div id='education' className='education section'>
            <div className='container'>
                <div className='education-inner'>
                    <SectionTitle title='education' />
                    <TimeLine data={educationData} />
                </div>
            </div>
        </div>
    )
}
export default Education;