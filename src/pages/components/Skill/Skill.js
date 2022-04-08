import './Skill.scss'

export default function Skill(props) {

    // const {title, listSkills} = props.data

    return (
        props.data.map((data, index)=>(
            <div className='skill-container' key={index}>
                <h6 className='title'>{data.title}</h6>
                {
                    data.listSkills.map((data, index) => (
                        <div className='progress-section' key={index}>
                            <div className='name-section'>
                                <div className='name'>{data.name}</div>
                                <div className='progress-number'>{data.progress}</div>
                            </div>
                            <div className='progress-bar'>
                                <div className='progress animate fadeIn slow' style={{maxWidth: data.progress}}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        ))
        
    )
}