import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Item from './components/Home/Item/Item'
import Model from './components/Model/Model'

import './App.css'

import ModelS from './assets/model_s.png'
import ModelY from './assets/model_y.jpeg'
import Model3 from './assets/model_3.jpeg'
import ModelX from './assets/model_x.jpeg'
import SolarPanels from './assets/solar_panels.jpeg'
import SolarRoof from './assets/solar_roof.jpeg'
import Accessories from './assets/accessories.jpg'
import allNewInteriorImg from './assets/allNewInterior.jpg'
import SafetyImg from './assets/safety_img.png'
import SolarRoofDesign from './assets/solar_roof_design.jpg'
import SolarPanelsVideo from './assets/solar_panels_vid.mp4'

import SolarSun from './assets/solarsun.svg'

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact>
                    <div className="app__items-container">
                        <Item 
                            backgroundImg={ModelS}
                            title="Model S"
                            description="Order Online for Touchless Delivery"
                            twoButtons="true"
                            button1Text="Custom Order"
                            button2Text="Existing Inventory"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= "true"
                        />
                        <Item 
                            backgroundImg={ModelY}
                            title="Model Y"
                            description="Order Online for Touchless Delivery"
                            twoButtons="true"
                            button1Text="Custom Order"
                            button2Text="Existing Inventory"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />
                        <Item 
                            backgroundImg={Model3}
                            title="Model 3"
                            description="Order Online for Touchless Delivery"
                            twoButtons="true"
                            button1Text="Custom Order"
                            button2Text="Existing Inventory"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />

                        <Item 
                            backgroundImg={ModelX}
                            title="Model X"
                            description="Order Online for Touchless Delivery"
                            twoButtons="true"
                            button1Text="Custom Order"
                            button2Text="Existing Inventory"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />
                        <Item 
                            backgroundImg={SolarPanels}
                            title="Lowest Cost Solar Panels in America"
                            description="Money-back guarantee"
                            twoButtons="true"
                            button1Text="Order Now"
                            button2Text="Learn More"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />

                        <Item 
                            backgroundImg={SolarRoof}
                            title="Solar For New Roofs"
                            description="
                            Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                            twoButtons="true"
                            button1Text="Order Now"
                            button2Text="Learn More"
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />

                        <Item 
                            backgroundImg={Accessories}
                            title="Accessories"
                            description=""
                            twoButtons="false"
                            button1Text="Shop Now"
                            button2Text=""
                            button1Link={""}
                            button2Link={""}
                            arrowImg= ""
                        />
                    </div>
                </Route>
                <Route path="/model_s" exact>
                    <Model 
                        homeBackgroundImage={ModelS}
                        hero__title="Model S"
                        hero__description="Plaid"
                        stat1__title="390mi"
                        stat1__details="Range (est.)"
                        stat2__title="1.99s"
                        stat2__details="0-60mph*"
                        stat3__title="200mph"
                        stat3__details="Top Speed†"
                        stat4__title="1,020hp"
                        stat4__details="Peak Power"
                        stat__button_text="Order Now"
                        allNewInterior="true"
                        safety=""
                        allNewInteriorImg={allNewInteriorImg}
                    />
                </Route>
                <Route path="/model_3">
                    <Model 
                        homeBackgroundImage={Model3}
                        hero__title="Model 3"
                        hero__description=""
                        stat1__title="3.1s"
                        stat1__details="0-60mph*"
                        stat2__title="353mi"
                        stat2__details="Range (EPA est.)"
                        stat3__title="AWD"
                        stat3__details="Dual Motor"
                        stat4__title=""
                        stat4__details=""
                        stat__button_text="Order Now"
                        safety="true"
                        allNewInterior=""
                        allNewInteriorImg={""}
                        safetyImg={SafetyImg}
                        safetyImgImg="true"
                        safety__subheadline="Safety"
                        safety__headline="Built For Safety"
                        safety__desc="Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants."
                        rating="true"
                        twoSafetyButtons="true"
                        safety__buttonLeftText="Learn More"
                        safety__buttonRightText="Order Now"
                    />
                </Route>
                <Route path="/model_x">
                    <Model 
                        homeBackgroundImage={ModelX}
                        hero__title="Model X"
                        hero__description="Plaid"
                        stat1__title="340mi"
                        stat1__details="Range (est.)"
                        stat2__title="2.5s"
                        stat2__details="0-60mph*"
                        stat3__title="9.9s"
                        stat3__details="1/4 Mile"
                        stat4__title="1,020hp"
                        stat4__details="Peak Power"
                        stat__button_text="Order Now"
                        allNewInterior="true"
                        allNewInteriorImg={allNewInteriorImg}
                    />
                </Route>
                <Route path="/model_y">
                    <Model 
                        homeBackgroundImage={ModelY}
                        hero__title="Model Y"
                        hero__description=""
                        stat1__title="68 cu ft"
                        stat1__details="0-60mph*"
                        stat2__title="326mi"
                        stat2__details="Range (EPA est.)"
                        stat3__title="AWD"
                        stat3__details="Dual Motor"
                        stat4__title=""
                        stat4__details=""
                        stat__button_text="Order Now"
                        safety="true"
                        safetyImgImg="true"
                        safetyImg={SafetyImg}
                        safety__subheadline="Safety"
                        safety__headline="Designed for Safety"
                        safety__desc="Like every Tesla, Model Y is designed to be the safest vehicle in its class. The low center of gravity, rigid body structure and large crumple zones provide unparalleled protection."
                        safety__buttonRightText="Order Now"
                    />
                </Route>
                <Route path="/solar_roof">
                    <Model 
                        homeBackgroundImage={SolarRoof}
                        hero__title="Solar Roof"
                        hero__description="Replace your roof and produce clean energy"
                        stat1__title= "Icon"
                        stat1__details="Beautiful Solar Without Compromise"
                        stat2__title="3X"
                        stat2__details="Stronger Than Standard Tiles"
                        stat3__title="icon"
                        stat3__details="Pays For Itself Over Time"
                        stat4__title=""
                        stat4__details=""
                        stat__button_text="Order Now"
                        design="true"
                        design__img={SolarRoofDesign}
                        design__subheadline="Design"
                        design__headline="A Beautiful Roof"
                        design__buttonText="Order Now"
                        design__description="Replace your current roof with Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling."
                    />
                </Route>
                <Route path="/solar_panels">
                    <Model 
                        homeBackgroundImage={SolarPanels}
                        hero__title="Solar For Existing Roofs"
                        hero__description="Lowest Cost Solar Panels in America - Money-back guarantee"
                        stat1__title= "Icon"
                        stat1__details="Convert Sunlight to Energy"
                        stat2__title="$"
                        stat2__details="Guaranteed Lowest Price for Solar"
                        stat3__title="24/7"
                        stat3__details="Energy Monitoring"
                        stat4__title=""
                        stat4__details=""
                        stat__button_text="Order Now"safety="true"
                        safetyVideoVideo="true"
                        safetyVideo={SolarPanelsVideo}
                        safetyImg={""}
                        safety__subheadline="Savings"
                        safety__headline="Electricity For Less"
                        safety__desc="Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio."
                        safety__buttonRightText="See Your Savings"
                    />
                </Route>
            </div>
        </Router>
    )
}

export default App
