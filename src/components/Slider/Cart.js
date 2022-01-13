import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./slider.css";

import LeftArrow from "./assets/left-arrow.svg"
import RightArrow from "./assets/right-arrow.svg"
 




const Card = ({ title, data }) => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} className="arrowIcon" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} className="arrowIcon" alt="nextArrow" {...props} />
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <Container className="card__container mx-auto">
            <h1 className="mt-5">{title}</h1>
            <Slider {...settings} className="card__container--inner">
                {data.map((item, index) => {
                    return (
                        <div
                            className="card__container--inner--card mt-3"
                            key={index}>
                

                            <img className="Card_img rounded shadow" src={item.url} alt="hero_img" />
              
                            <div className="card__container--inner--card--date_time">
                                <img className="icon" src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                                <p>4D-5D</p>

                                <img className="icon" src="https://www.wanderon.in/svg/map-pin.svg" alt="location" style={{ marginLeft: 10 }} />
                                <p>Delhi</p>
                            </div>


                            <h2 className="card_h2">Meghalaya Backpacking</h2>
                            <p className="card_para">starts at <span>₹15,999/-</span></p>
                        </div>
                    );
                })}
            </Slider>
        </Container>
       
    );
};


export default Card;