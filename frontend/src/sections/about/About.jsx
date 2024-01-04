import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';
import client, { urlFor } from '../../client';


const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            console.log(data);
            setAbouts(data);
        });
    }, []);

    return (
        <div className='app__about'>
            <h2 className='head-text'>I know that <span>Good Apps</span> <br /> means <span>Good Business</span></h2>

            <div className='app__profile'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl?.asset._ref)} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default About