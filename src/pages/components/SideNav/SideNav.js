import './SideNav.scss'
import { navLinks } from '../../../utils/UserData'
import { userInfo } from '../../../utils/UserData'
import { useState } from 'react'

function SideNav() {

    const [toggleNav, setToggleNav] = useState(false);
    const handleToggleNav = () => {
        if(toggleNav)
            setToggleNav(false);
        else
            setToggleNav(true);
    }

    return (
        <>
            <div id='sideNav' className='side-nav' style={toggleNav ? {left: '0px'} : {left: '-225px'}}>
                <div className='name-outer'>
                    <div className='name-inner'>{userInfo.name.charAt(0)}</div>
                </div>
                <div className='nav-body'>
                    {
                        navLinks.map((navLink, index) => (
                            <a key={index} href={navLink.href} className='nav-link'>
                                <i className={navLink.classIconFA + ' icon'}></i>
                                {navLink.title}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div id='navButton' className='nav-button' onClick={handleToggleNav} style={toggleNav ? {left: '255px'} : {left: '30px'}}>
                <div className={toggleNav ? 'change line1' : 'line1'}></div>
                <div className={toggleNav ? 'change line2' : 'line2'}></div>
                <div className={toggleNav ? 'change line3' : 'line3'}></div>
            </div>
        </>
    )
}
export default SideNav;