import React from 'react';

function Footer() {
    return (
        <footer className="flex flex-col gap-12 items-center justify-center pt-40 pb-20 md:py-20">
            <h1 className="text-2xl font-semibold">logo</h1>
            <div className="flex gap-6">
                <a href="https://facebook.com" target="_blank"><img src="/icons/facebook.svg" alt="facebook icon"/></a>
                <a href="https://x.com" target="_blank"><img src="/icons/twitter.svg" alt="twitter icon"/></a>
                <a href="https://linkedin.com" target="_blank"><img src="/icons/linkedin.svg" alt="linkedin icon"/></a>
                <a href="https://youtube.com" target="_blank"><img src="/icons/youtube.svg" alt="youtube icon"/></a>
            </div>
            <p className="text-gray">Copyright ©  Paperless software.</p>
        </footer>
    );
}

export default Footer;