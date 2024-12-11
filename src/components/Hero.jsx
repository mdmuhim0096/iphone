import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState();

    const handelVideoSrcSet = () => {
            setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    useEffect(() => {
        window.onload = () => {
            handelVideoSrcSet();
        }
        window.addEventListener("resize", handelVideoSrcSet)

        return () => {
            window.removeEventListener("resize", handelVideoSrcSet);
        };
    }, []);


    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 1
        });

        gsap.to("#cta", {
            y: 0,
            opacity: 1,
            delay: 1.5,
        })
    }, [])

    return (
        <section className='w-full nav-height bg-black relative '>
            <div className='h-5/6 w-full flex-center flex-col '>
                <p id='hero' className='hero-title'>iPhone 16 Pro max</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} loop > 
                        <source src={videoSrc} type='video/mp4'/>
                    </video>
                </div>

                <div className='flex-col opacity-0 text-center translate-y-20 ' id='cta'>
                <a href="#highlite" className='btn'>Buy</a> 
                <br/><br/> 
                <p className='text-xl font-normal'>From $199/month or $999</p>
            </div>
            </div>
        </section>
    )
}

export default Hero
