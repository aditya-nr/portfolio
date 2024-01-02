import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { images } from '../../constants';
import './Navbar.scss'

const items = ["home", "about", "work", "skills", "contact"];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="ADITYA" />
            </div>

            {/* desktop view */}
            <ul className="app__navbar-links">
                {
                    items.map(item => (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))
                }
            </ul>

            {/* mobile view */}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setIsOpen(true)} />

                {/* menu */}
                {isOpen && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeInOut' }}
                    >
                        <HiX onClick={() => setIsOpen(false)} />

                        <ul>
                            {
                                items.map(item => (
                                    <li key={item}>
                                        <a href={`#${item}`}
                                            onClick={() => setIsOpen(false)}
                                        >{item}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar