import './Skills.scss'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Skill from '../components/Skill/Skill'
import { skillsData } from '../../utils/UserData'

export default function Skills(){
    return(
        <div id='skills' className='skills section'>
            <div className='container'>
                <div className='skills-inner'>
                    <SectionTitle title='skills' />
                    <div className='content animate fadeIn medium'>
                        <Skill data={skillsData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}