import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlight = () => {

    useGSAP(() => {
        gsap.to("#title", {
            y: 0,
            opacity: 1
        });
        gsap.to(".link", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.25
        });

    }, []);

    return (
        <section id='highlite' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className="screen-max-width">
                <div className='w-full mb-12 items-end justify-between md:flex'>
                    <h1 id='title' className='section-heading'>Get the highlights.</h1>
                    <div className='flex flex-wrap items-end gap-5'>
                        <p className="link">watch the flim
                            <img src={watchImg} className='ml-2'/>
                        </p>
                        <p className="link">watch the event
                            <img src={rightImg} className='ml-2'/>
                        </p>
                    </div>
                </div>
                <VideoCarousel/>
            </div>
        </section>
    )
}

export default Highlight
