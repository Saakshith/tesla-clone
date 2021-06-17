import React from 'react'
import './Safety__Rating.css'

const Safety__Rating = ({safetyRatingHeading, rating1Heading, rating2Heading, rating3Heading, rating4Heading, rating5Heading, rating1SubHeading, rating2SubHeading, rating3SubHeading, rating4SubHeading, rating1Rating, rating2Rating, rating3Rating, rating4Rating, rating5Rating}) => {
    return (
        <div className="safety__rating">
            <h2 className="safety__rating-heading">{safetyRatingHeading}</h2>
            <div className="safety__rating-rating">
                <div className="safety__rating-ratingLeft">
                    <h4>{rating1Heading}</h4>
                    <p>{rating1SubHeading}</p>
                </div>
                <div className="safety__rating-ratingRight">
                    <h4>{rating1Rating}</h4>
                </div>
            </div>
            <div className="safety__rating-rating">
                <div className="safety__rating-ratingLeft">
                    <h4>{rating2Heading}</h4>
                    <p>{rating2SubHeading}</p>
                </div>
                <div className="safety__rating-ratingRight">
                    <h4>{rating2Rating}</h4>
                </div>
            </div>
            <div className="safety__rating-rating">
                <div className="safety__rating-ratingLeft">
                    <h4>{rating3Heading}</h4>
                    <p>{rating3SubHeading}</p>
                </div>
                <div className="safety__rating-ratingRight">
                    <h4>{rating3Rating}</h4>
                </div>
            </div>
            <div className="safety__rating-rating">
                <div className="safety__rating-ratingLeft">
                    <h4>{rating4Heading}</h4>
                    <p>{rating4SubHeading}</p>
                </div>
                <div className="safety__rating-ratingRight">
                    <h4>{rating4Rating}</h4>
                </div>
            </div>
            <div className="safety__rating-rating">
                <div className="safety__rating-ratingLeft">
                    <h4>{rating5Heading}</h4>
                    <p></p>
                </div>
                <div className="safety__rating-ratingRight">
                    <h4>{rating5Rating}</h4>
                </div>
            </div>
        </div>
    )
}

export default Safety__Rating
