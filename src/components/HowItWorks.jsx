import React from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
    useGSAP(() => {
        gsap.from("#chip", {
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom"
            },
            opcity: 0,
            scale: 2,
            duration: 2,
            ease: "power2.inOut"
        });

        animateWithGsap(".g_fadeIn", { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" })
    }, []);

    return (
        <section id="hiwitworks" className='common-padding'>
            <div className="screen-max-width">
                <div id='chip' className='flex-center my-20 w-full'>
                    <img src={chipImg} height={180} width={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className="hiw-title">A17 pro chip <br /> A monster win for gaming.
                    </h2>
                    <p className="hiw-subtitle">
                        It`s here. the biggest redesign in the history of Apple GPUs.
                    </p>
                </div>
                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative flex-center h-full">
                        <div className="overflow-hidden">
                            <img src={frameImg} className="relative bg-transparent z-10" />
                        </div>
                        <div id="hiw_video">
                            <video id='frameVideo' className='pointer-events-none' playsInline muted autoPlay preload='none' loop>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <p className='mt-3 font-semibold text-gray text-center'>Honkai: Star Rail</p>

                </div>
                {/*  another section */}

                <div className='hiw-text-container mt-20'>

                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn">
                            A17 pro is an entirely new class of iPhone chip that delivers our {" "}
                            <span className='text-white'>best graphic performance by far</span>

                        </p>

                        <p className="hiw-text g_fadeIn">
                            Mobile{" "}
                            <span className="text-white">game will look immarsive</span>, with incredibly detailed environments and characters.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                        <p className="hiw-text">New</p>
                        <p className="hiw-bigtext">Pro-class GPU</p>
                        <p className="hiw-text">with 6 cores</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HowItWorks
