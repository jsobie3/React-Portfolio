import React from 'react';

function Header () {
    return (
        <div class = " topNav ">
            <ul  className = 'nav'>
                <li className='navLink'> <a href ='#aboutMe'>About Me </a></li>
                <li className='navLink'> <a href ='#portfolio'>Portfolio</a></li>
                <li className='navLink'> <a href ='#contact'>Contact </a></li>
                <li className='navLink'> <a href ='#resume'>Resume </a></li>

            </ul>
        </div>
    )
}

export default Header;