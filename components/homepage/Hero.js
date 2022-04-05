import React from 'react';
import Image from "next/image"
import classes from "./hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/test.jpg"
                    alt="An image showing Paul"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hello I am Paul</h1>
            <p>I am trying to build a blog project with NextJS</p>
        </section>
    )
}

export default Hero