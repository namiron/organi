import React from 'react'
import { ConstructionExperts, FirstPage } from '../../common/Commons';
import teams from './../../../img/bg-first-page/BannerTeam.png'
import Subscribe from './../../pages/subscribe/Subscribe'
import woman3 from './../../../img/piple/woman-3.png'
import woman4 from './../../../img/piple/woman-4.png'
import farmer from './../../../img/piple/first-man.jpg'
import maketing from './../../../img/piple/woman-first.jpg'
import financiar from './../../../img/piple/woman-second.jpg'
import man2 from './../../../img/piple/man-2.png'
import './Team.scss'


const OurTeam = () => {
    return (
        <>
            {/* -----------------------------FirstPage */}
            <FirstPage bg={teams} title={'Our Team'} />

            {/* -----------------------------FirstPage */}

            {/* ---------------------------------Teams */}
            <div className="teams">
                <div className="teamsContainer">
                    <div className="teamsHeading">
                        <h3 className="teamsSubTitle">Team</h3>
                        <h2 className="teamsTitle">Our Organic Experts</h2>
                        <p className="teamsText">We have grown on the principles of health, ecology, and care. We aim to give our
                            customers a healthy chemical-free meal for perfect nutrition.</p>
                    </div>
                    <div className="teamsContent">
                        <ConstructionExperts title={'Shane Watson'} image={farmer} text={'Farmer'} />
                        <ConstructionExperts title={'Maria Thomas'} image={maketing} text={'Marketing'} />
                        <ConstructionExperts title={'Angeline flora'} image={financiar} text={'Financiar'} />
                        <ConstructionExperts title={'Keira Knightley'} image={woman3} text={'Farm Expert'} />
                        <ConstructionExperts title={'Scott Lawrence'} image={man2} text={'Scott Lawrence'} />
                        <ConstructionExperts title={'Karen Allen'} image={woman4} text={'Manger'} />
                    </div>
                </div>
            </div>

            {/* ---------------------------------Teams */}



            {/* ------------------------------------------------------Subscribe */}
            <Subscribe />
            {/* ------------------------------------------------------Subscribe */}

        </>

    )
}
export default OurTeam;