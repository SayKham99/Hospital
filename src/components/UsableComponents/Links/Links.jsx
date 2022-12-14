import React from 'react'
import './Links.scss'
import Hearth from "../../../assets/icons/heart-pulse.svg";
import Geo from "../../../assets/icons/geo-alt.svg";
import Mail from "../../../assets/icons/envelope-open.svg";
import {useTranslation} from "react-i18next";


function Links() {
const {t} = useTranslation()
const data = [
    {id: 1, icon: Geo, title: t('linktitle1'), descr: t('linkdescr1'), url: '/contacts'},
    {id: 1, icon: Mail, title: t('linktitle2'), descr: t('linkdescr2'), url: 'mailto:nomonovvv7@gmail.com'},
    {id: 1, icon: Hearth, title: t('linktitle3'), descr: '+998 97 234 34 07', url: 'tel:+998972343407'},
]
    return (
          <section className='footer__link'>
              {data.map(link => (
                    <div key={link.id} className='footer__link-item'>
                        <img src={link.icon} alt=""/>
                        <div className='Ltext'>
                            <p className='title'>{link.title}</p>
                            <a href={link.url} className='descr'>
                                <p>{link.descr}</p>
                            </a>
                        </div>
                    </div>
              ))}
          </section>
    )
}

export default Links