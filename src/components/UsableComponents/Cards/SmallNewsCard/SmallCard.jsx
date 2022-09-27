import React from 'react'
import './SmallCard.scss'
import İmg from '../../../../assets/images/aqImg2.png'
import {NavLink} from "react-router-dom";
function SmallCard({data}) {
  return (
    <NavLink to={`/news/${data.id}`} className='card'>
        <div className='card__header'>
            <img src={İmg} alt="" className='card__header-image'/>
        </div>
        <div className='card__body'>
            <p className='card__body-title'>News Title Lorem Ipsum Dolor Sit Amet</p>
        </div>
        <div className='card__footer'>
            <p className='card__footer-time'>1 Hour Ago</p>
            <p className='card__footer-country'>CNN Indonesia</p>
        </div>
    </NavLink>
  )
}

export default SmallCard