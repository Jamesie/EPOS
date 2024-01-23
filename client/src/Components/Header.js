import '../css/header.css'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';



function Header() {

    const navigate = useNavigate();
    const [isMenuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
        setMenuActive(!isMenuActive);
    };

    return(
        <nav className="nav-container">
            <div className={`menu-button ${isMenuActive ? 'is-active' : ''}`} onClick={handleMenuClick}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <div className={`menu ${isMenuActive ? 'menu-active' : ''}`}>
                <ul className='nav-link-container'>
                    <li className='nav-links' onClick={() => navigate('/')}>
                        <p>First Link</p>
                    </li>
                    <li className='nav-links' onClick={() => navigate('/')}>
                        <p>Second Link</p>
                    </li>
                    <li className='nav-links' onClick={() => navigate('/')}>
                        <p>Third Link</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header