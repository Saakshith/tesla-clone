import React from 'react'
import './Item.css'
import ArrowDown from '../../../assets/arrow_down.svg'

const Item = ({title, description, button1Text, button2Text, button1Link, button2Link, backgroundImg, twoButtons, arrowImg}) => {
    return (
        <div className="item" style={{ backgroundImage: `url(${backgroundImg})`}}>
            <div className="item__top">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="item__bottom">
                <div className="buttons-container">
                    <button href={button1Link}>{button1Text}</button>
                    {twoButtons === "true" && (
                        <button href={button2Link} id="button2" >{button2Text}</button>
                    )}
                </div>
                {arrowImg === "true" && (
                    <img src={ArrowDown} id="arrow-down" />
                )}
            </div>
        </div>
    )
}

export default Item
