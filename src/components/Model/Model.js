import React from 'react'
import './Model.css'
import Safety__Rating from './Safety__Rating/Safety__Rating'

const Model = ({
    homeBackgroundImage, 
    hero__title, 
    hero__description, 
    stat1__title, 
    stat2__title, 
    stat3__title, 
    stat4__title, 
    stat1__details, 
    stat2__details, 
    stat3__details, 
    stat4__details, 
    stat__button_text, 
    safety,
    allNewInterior,
    allNewInteriorImg,
    safetyImg,
    safetyImgImg,
    safetyVideo,
    safetyVideoVideo,
    safety__subheadline,
    safety__headline,
    safety__desc,
    rating,
    twoSafetyButtons,
    safety__buttonRightText,
    safety__buttonLeftText,
    design,
    design__img,
    design__headline,
    design__subheadline,
    design__buttonText,
    design__description
    }) => {
    return (
        <div className="model">
            <div className="home" style={{ backgroundImage: `url(${homeBackgroundImage})`}}>
                <div className="home__hero">
                    <h1 className="hero__title">{hero__title}</h1>
                    <p className="hero__desc">{hero__description}</p>
                </div>
                <div className="home__stats">
                    <div className="stat">
                        <h1>{stat1__title}</h1>
                        <h6>{stat1__details}</h6>
                    </div>
                    <div className="stat">
                        <h1>{stat2__title}</h1>
                        <h6>{stat2__details}</h6>
                    </div>
                    <div className="stat">
                        <h1>{stat3__title}</h1>
                        <h6>{stat3__details}</h6>
                    </div>
                        <div className="stat">
                        <h1>{stat4__title}</h1>
                        <h6>{stat4__details}</h6>
                    </div>
                    <div className="stat stat__button">
                        <button>{stat__button_text}</button>
                    </div>
                </div>
            </div>
            {safety === "true" && (
                <div className="safety">
                        <div className="safety__details">
                                <div className="safety__details-flex">
                                    <div className="safety__details-flex-text">
                                        <h3>{safety__subheadline}</h3>
                                        <h1>{safety__headline}</h1>
                                        <p>{safety__desc}</p>
                                    </div>
                                    {rating === "true" && (
                                        <Safety__Rating 
                                            safetyRatingHeading="5-Star Overall NHTSA Rating"
                                            rating1Heading="Driver"
                                            rating1SubHeading="Frontal"
                                            rating1Rating="★ ★ ★ ★ ★"
                                            rating2Heading="Passenger"
                                            rating2SubHeading="Frontal"
                                            rating2Rating="★ ★ ★ ★ ★"
                                            rating3Heading="Front Seat"
                                            rating3SubHeading="Side"
                                            rating3Rating="★ ★ ★ ★ ★"
                                            rating4Heading="Rear Seat"
                                            rating4SubHeading="Side"
                                            rating4Rating="★ ★ ★ ★ ★"
                                            rating5Heading="Rollover"
                                            rating5Rating="★ ★ ★ ★ ★"
                                        />
                                    )}
                                    <div className="safety__buttons">
                                        {twoSafetyButtons === "true" && (
                                            <button className="safety__button-left">{safety__buttonLeftText}</button>
                                        )}
                                        <button className="safety__button-right">{safety__buttonRightText}</button>
                                    </div>
                                </div>
                        </div>
                        {safetyImgImg === "true" && (
                            <div className="safety__img" style={{ backgroundImage: `url(${safetyImg})`}}>

                            </div>
                        )}
                        {safetyVideoVideo === "true" && (
                            <div className="safety__video">
                                <video src={safetyVideo} autoplay muted loop controls>

                                </video>
                            </div>
                        )}
                </div>
            )}
            {allNewInterior === "true" && (
                <div className="allNewInterior" style={{ backgroundImage: `url(${allNewInteriorImg})` }}>
                    <h1>All-New Interior</h1>
                </div>
            )}
            {design === "true" && (
                <div className="design">
                    <div className="design__img" style={{backgroundImage: `url(${design__img})`}}></div>
                    <div className="design__details">
                        <div className="design__details-left">
                            <h4>{design__subheadline}</h4>
                            <h1>{design__headline}</h1>
                            <button className="safety__button-right">{design__buttonText}</button>
                        </div>
                        <div className="design__details-right">
                            <p>{design__description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Model
