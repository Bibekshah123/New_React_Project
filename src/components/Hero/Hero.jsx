import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
const Hero = () => {
    return (
        <div className="hero">
            <div className='left-h'>
                <Header/>

                <div className='the-best-ad'>
                    <div></div>
                    <span>the best club in the Valley</span>
                </div>

                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div><span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                        In here we will help you to shape and build your Ideal 
                        Body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className='right-h'>right side</div>
        </div>
    )
}

export default Hero
