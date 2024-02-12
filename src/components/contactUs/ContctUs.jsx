import React from 'react'
import { useForm } from 'react-hook-form'
import { BeliveContacts } from '../Home/Belive'
import formimage from './../../img/thirt_block/formBelive.png'
import home from './../Home/Home.module.scss'
import mail from './../../img/icons/Group15.svg'
import tell from './../../img/icons/Group16.svg'
import './ContactUs.scss'
import { FirstPage } from '../common/FirstPage'
import bgContacts from '../../img/bg-first-page/BannerContacts.jpg'
import contactFarms from './../../img/bg-first-page/contactFarms.jpg'
import { ContactUsBelives } from '../Home/Categories'
import location from './../../img/icons/location.svg'
import { InnerTitleText } from '../common/Commons'
import Subscribe from '../pages/subscribe/Subscribe'

const ContactUs = () => {

    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm(
        {
            mode: 'onBlur'
        }
    )

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    return (
        <>
            {/* ---------------------------------FirstPage */}
            <FirstPage bg={bgContacts} title={'Contact Us'} />
            {/* ---------------------------------FirstPage */}

            <div className="contactUsContainer">
                {/* -------------------------------Belive */}
                <div className="contactUsLocated">
                    <BeliveContacts believeImage={formimage} titleAboutUs={"Let's Find Out. Where Our Organic Farms Located."}
                        foodsOrganic={mail}
                        QualityStandards={tell}
                    />
                </div>
                {/* -------------------------------Belive */}



                {/* -------------------------------------------Farms */}

                <div className="contactOurFarms">

                    <div className="contactOurFarmsContant ">
                        <article className={home.friendlyHeaders}>
                            <h3 className={home.frendlySubTitle}>Location</h3>
                            <h2 className={home.frendlyTitle}>Our Farms</h2>
                            <p className="contactOurFarmsText">Organick product farms are located in
                                main cities of the following places.</p>
                        </article>
                        <ContactUsBelives foodsOrganic={location}
                            categoriesAboutUsTitle={'New York, USA:'}
                            categoriesAboutUsText={'299 Park Avenue New York, New York 10171, USA.'}
                        />
                        <ContactUsBelives foodsOrganic={location}
                            categoriesAboutUsTitle={'London, UK'}
                            categoriesAboutUsText={'30 Stamford Street, Base Way, London 5478, UK.'}
                        />

                    </div>
                </div>
                {/* -------------------------------------------Farms */}


                {/* ----------------------------form */}
                <form className="contactUsFirstBlock" onSubmit={handleSubmit(onSubmit)}>
                    <div className="contactUsTopRow">
                        <div className="contactUsFirstRow">
                            <div className="nameBlock">
                                <input type="text" className='fullName' {...register('fullName', {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        messsage: "minimum 5 characters"
                                    },
                                })} name='fullName' placeholder='full Name' />
                            </div>

                            <div className="emailBlock">
                                <input type="email" className='email' {...register('YourMail', {
                                    required: true,
                                })} name='YourMail' placeholder='exanple@mail.com' />
                            </div>
                        </div>
                        <div className="contactUsSecondRow">
                            <div className="companyBlock">
                                <input className='company' type="text" {...register('Company', {
                                    minLength: {
                                        value: 5,
                                        messsage: "minimum 5 characters"
                                    },
                                })} name='Company' placeholder='Company name here' />
                            </div>
                            <div className="subjectBlock">
                                <input type="text" {...register('Subject', {
                                    minLength: {
                                        value: 5,
                                        messsage: "minimum 5 characters"
                                    },
                                })} name='Company' placeholder='how can we help' />
                            </div>
                        </div>
                    </div>


                    <div className="messageBlock">
                        <textarea type="text" {...register('Message', {
                            minLength: {
                                value: 5,
                                messsage: "minimum 5 characters"
                            },
                        })} name='Message' placeholder='Would you like to talk about how to...' />
                    </div>



                    <div className="errorText">{errors?.YourMail && <p className="errorForm">Required field*</p>
                    }</div>

                    <button className='btnForm' type='submit' disabled={!isValid}>Send Message</button>
                </form>
                {/* ----------------------------form */}

                {/* ------------------------------------------------------SUBSCRIBE */}
                <Subscribe />
                {/* ------------------------------------------------------SUBSCRIBE */}

            </div>
        </>

    )
}
export default ContactUs;