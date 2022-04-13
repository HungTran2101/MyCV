import './Home.scss'
import { userInfo } from '../../utils/UserData'

function Home() {
    return (
        <div id='home' className='home section animate fadeUp medium'>
            <div className='container'>
                <div className='home-inner'>
                    <figure className='avatar'>
                        <span className='plus-btn'>
                            <i className='material-icons icon'>add</i>
                        </span>
                        <span className='cross'></span>
                        <img src={userInfo.avatar} alt='my-avatar' className='img avatar-img' />
                    </figure>
                    <div className='info'>
                        <div className='info-header'>
                            <h3 className='name'>{userInfo.name}</h3>
                            <h6 className='job'>{userInfo.job}</h6>
                        </div>
                        <div className='info-body'>
                            <ul className='contact'>
                                <li className='contact-row'>
                                    <i className='material-icons icon'>email</i>
                                    <span className='contact-data'>{userInfo.email}</span>
                                </li>
                                <li className='contact-row'>
                                    <i className='material-icons icon'>language</i>
                                    <span className='contact-data'>{userInfo.website}</span>
                                </li>
                                <li className='contact-row'>
                                    <i className='fa fa-skype icon'></i>
                                    <span className='contact-data'>{userInfo.skype}</span>
                                </li>
                                <li className='contact-row'>
                                    <i className='material-icons icon'>phone</i>
                                    <span className='contact-data'>{userInfo.phone}</span>
                                </li>
                                <li className='contact-row'>
                                    <i className='material-icons icon'>place</i>
                                    <span className='contact-data'>{userInfo.address}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='hyper-link'>
                            <a href='/' className='fa fa-facebook icon'>

                            </a>
                            <a href='/' className='fa fa-twitter icon'>

                            </a>
                            <a href='/' className='fa fa-google icon'>

                            </a>
                            <a href='/' className='fa fa-linkedin icon'>

                            </a>
                            <a href='/' className='fa fa-rss icon'>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;