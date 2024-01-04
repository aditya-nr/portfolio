import React from 'react'

import { images } from '../../constants';
import './Header.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

const skill = [images.react, images.git, images.javascript];
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return (
        <div className='app__header app__flex'>
            {/* info */}
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >
                <div className='badge-cmp app__flex'>
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className='p-text'>Hello, I am</p>
                        <h1 className='head-text'>Aditya</h1>
                    </div>
                </div>

                <div className="tag-cmp">
                    <p className='p-text'>devloper</p>
                    <p className='p-text'>coder</p>
                </div>
            </motion.div>

            {/* profile */}
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
                <img src={images.profile} alt="ADITYA" />
            </motion.div>

            {/* proefficent */}
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-circles"
            >
                {
                    skill.map((item, index) => (
                        <div className="circle-cmp app__flex" key={`circle-${index}`}>
                            <img src={item} alt="" />
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home');