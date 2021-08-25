import React from 'react';

const Footer = () => {
    return (
        <div className="">
            <footer className="p-6 bg-gray-800 text-white">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Getting started</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <a href="/">Installation </a>
                            <a href="/">Release Notes </a>
                            <a href="/">Upgrade Guide </a>

                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Core Concepts</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <a href="/">Utility-First </a>
                            <a href="/">Responsive Design </a>
                            <a href="/">Hover, Focus, &amp; Other States </a>
                            <a href="/">Dark Mode </a>

                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Customization</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <a href="/">Configuration </a>
                            <a href="/">Theme Configuration </a>
                            <a href="/">Breakpoints </a>

                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <a href="/">GitHub </a>
                            <a href="/">Discord </a>
                            <a href="/">Twitter </a>
                            <a href="/">YouTube </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="dark:text-coolGray-400">© Copyright 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;