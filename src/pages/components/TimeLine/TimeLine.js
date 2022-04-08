import { useEffect, useState } from 'react'
import './TimeLine.scss'


function TimeLine(props) {

    const [showDetail, handleShowDetail] = useState({ mode: false })
    const [contentShow, handleContentShow] = useState(false)

    const handleSeeMoreClick = (data) => {
        if (showDetail.mode){
            handleContentShow(false)
            setTimeout(() => {
                handleShowDetail({ mode: false })
            }, 600)
        }
        else {
            handleContentShow(true)
            handleShowDetail({
                ...data,
                mode: true,
            })
        }
    }

    useEffect(() => {
        window.onclick = (e) => {
            if(e.target.className === 'modal')
                handleSeeMoreClick()
        }
    })

    const CustomDescription = (string) => {
        let _string = string
        _string = _string.substring(0, 150)
        _string = _string.substring(0, _string.lastIndexOf('.') + 1)
        return _string
    }

    const TimelineBubble = (title) => {
        switch (title) {
            case 'Web Development':
                return <i className='fa fa-globe'></i>;
            case 'Software Engineering':
                return <i className='fas fa-graduation-cap'></i>;
            default:
                return <p>{title.charAt(0)}</p>;
        }
    }

    return (
        <div className='timeline animate'>
            {
                props.data.map((data, index) => (
                    <div className={index % 2 === 0 ? 'timeline-inner left' : 'timeline-inner right'} key={index}>
                        <div id='span-circle' className='timeline-bubble animate fadeIn fast'>{TimelineBubble(data.title)}</div>
                        <div className='content animate fadeIn medium'>
                            <div className='title'>{data.title}</div>
                            <div className='info big'>{data.place}</div>
                            <div className='info big'>{data.time}</div>
                            <div className='info'>
                                {data.description.length > 150 || data.img ? (
                                    <>
                                        {CustomDescription(data.description)}
                                        <br />
                                        <i className='fa fa-ellipsis-h dot' onClick={() => handleSeeMoreClick(data)}></i>
                                    </>
                                ) : (
                                    data.description
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }
            {showDetail.mode && (
                <div className='modal'>
                    <div className={contentShow ? 'detail-zone modal-fadeInDown' : 'detail-zone modal-fadeOutUp'}>
                        <span className='close-tab' onClick={handleSeeMoreClick}>&times;</span>
                        <div className='content'>
                            <div className='title'>{showDetail.title}</div>
                            <div className='info big'>{showDetail.place}</div>
                            <div className='info big'>{showDetail.time}</div>
                            {showDetail.img && (
                                <figure className='detail-img'>
                                    <img className='img' alt={showDetail.imgAlt} src={showDetail.img}></img>
                                </figure>
                            )}
                            <div className='info'>{showDetail.description}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimeLine;