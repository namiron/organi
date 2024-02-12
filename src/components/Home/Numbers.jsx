import React from 'react'
import home from './Home.module.scss'


const Numbers =({organic,number})=>{
    return (
        <article className={home.itemNumber} >
            <p className={home.numberTitle}>{number}</p>

            <p className={home.numberText}>{organic}</p>
        </article>
        
    )
}

export default Numbers