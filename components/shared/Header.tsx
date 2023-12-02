import React from 'react';
import logo from '@/public/img/lws-logo.svg'
import Image from 'next/image';

const Header = () => {
    return (
        <header id="header" className='bg-black py-4 bg-opacity-50'>
            <div className="container flex justify-between">
                <Image src={logo} alt='logo' />
                <div className="flex items-center text-white">
                    <a className="min-w-[50px] font-medium" href="#">Home</a>
                    <button className="log-btn btn bg-green-300 px-3 py-1 font-bold text-black rounded-md">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;