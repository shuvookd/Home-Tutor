import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright @ {year} </small></p>
            <p><small>Shuvo Kumar Das </small></p>
        </footer>
    );
};

export default Footer;