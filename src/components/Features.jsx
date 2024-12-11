import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from "gsap";
const Features = () => {

    const videoRef = useRef();
    useGSAP(() => {
        gsap.to("#exploreVideo",{
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: "play pause reverse restart",
                start: "10% bottom"
            },
            onComplete: () => {
                videoRef.current.play();
            }
        });
        animateWithGsap("#features_title", { y: 0, opacity: 1 });
        animateWithGsap(".g_grow", { scale: 1, opacity: 1 , ease: "power1"}, {scrub: 5.5});
        animateWithGsap(".g_text", { y: 0, opacity: 1 , ease: "power2.inOut", duration: 1, stagger: 1});
    }, [])
    return (
        <section className='h-full bg-zinc relative overflow-hidden common-padding'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
                </div>
                <div className='flex flex-col items-center justify-center overflow-hidden'>
                    <div className='mt-32 mb-24 pl-18'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone</h2>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in Titanium.</h2>
                    </div>
                    <div className='flex-center flex-col sm:px-10'>
                        <div className='h-[50vh] w-full flex items-center relative'>
                            <video id='exploreVideo' playsInline muted autoPlay preload='none' ref={videoRef}
                                className='w-full h-full object-cover object-center'>
                                <source src={exploreVideo} type='video/mp4' />
                            </video>
                        </div>
                        <div className='flex flex-col ralative w-full'>
                            <div className="feature-video-container">
                                <div className='h-[50vh] flex-1 overflow-hidden'>
                                    <img src={explore1Img} className='feature-video g_grow' />
                                </div>
                                <div className='h-[50vh] flex-1 overflow-hidden'>
                                    <img src={explore2Img} className='feature-video g_grow' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature-text-container'>
                        <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                                iPhone 16 pro is {" "}
                                <span className='text-white'>the first iPhone to feature an aerospace-grad titanium design,</span>
                                using the same alloy that sapcecraft use for missions to Mars.
                            </p>
                        </div>
                        <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                                Titanimu has one of the best sreangth-to-weight ratios of any metal, making these our {" "}
                                <span className="text-white">lightest Pro models ever.</span>you`ll notice the deffrence the momment you pick on up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
