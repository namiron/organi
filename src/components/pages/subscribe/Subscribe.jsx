import React from 'react'
import home from './../../Home/Home.module.scss'
import bgsubscribe from './../../../img/bg-first-page/bg-second.jpg'
import { BtnBelieve } from '../../common/Buttons';
import { useForm } from 'react-hook-form'

const Subscribe = () => {
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
        <div className={home.subscribe}>
            <div className={home.subscribeContainer}>
                <div className={home.subscribeContent}>
                    <h2 className={home.subscribeTitle}>Subscribe Our Newsletter
                    </h2>
                    <form className={home.subscribeForm} onSubmit={handleSubmit(onSubmit)} >
                        <input type="text" className='fullName' style={{
                            padding: '25px'
                        }}
                            {...register('fullName', {
                                required: true,
                                minLength: {
                                    value: 5,
                                    messsage: "minimum 5 characters"
                                },
                            })} name='fullName' placeholder='full Name' />
                        <button className={home.btnForm} type='submit' disabled={!isValid}>Send Message</button>
                    </form>
                </div>
                <div className={home.subscribeImg}>
                    <img src={bgsubscribe} alt="form-bg" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;