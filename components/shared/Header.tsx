import React from 'react';
import logo from '@/public/img/lws-logo.svg'
import Image from 'next/image';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <Image src={logo} alt='logo' />
                <div className="flex items-center">
                    <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                    <button className="log-btn btn">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;