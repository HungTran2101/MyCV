import './Loading.scss'
import {userInfo} from '../../utils/UserData'

function Loading() {
    return (
        <div className='loading-screen'>
            <div className='loading-wrapper animate__animated animate__bounceInDown'>
                <div className='loading-outer'>
                    <span className='loading-inner'></span>
                </div>
            </div>
            <h3 className='loading-name'>{userInfo.name}</h3>
            <h6 className='loading-job'>{userInfo.job}</h6>
        </div>
    );
}

export default Loading;