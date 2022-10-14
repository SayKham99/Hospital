import React from 'react'
import './FullWidth.scss'
import {NavLink} from "react-router-dom";


function FullWidth({data}) {
    return (
        <NavLink to={`/news/${data.news_id}`}>
            <div className='fullwidth'>
                <div className='fullwidth__head'>
                    <img src={data.image} alt="" className='fullwidth__head-image'/>
                    <p className='fullwidth__head-title'>{data.title_ru}</p>
                    <div className='fullwidth__head-infos'>
                        <p className='time'>{data.created_at}</p>
                    </div>
                </div>
                <div className='fullwidth__body'>
                    <p className='fullwidth__body-title'>{data.full_description_ru}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default FullWidth