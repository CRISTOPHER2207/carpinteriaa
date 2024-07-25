import React from "react"
import "./Hero.css"
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">

                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-title"/>
                        <h1>
                        CARPINTERIA    <br />
                        DE EXCELENCIA <br />  PARA TU HOGAR
                        </h1>
                    </div>

                    <div className="lexColStart hero-des">
                        <span></span>
                        
                        <span></span>
                    </div>
                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero