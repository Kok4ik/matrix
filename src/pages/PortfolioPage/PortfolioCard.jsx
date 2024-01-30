import React from 'react'
import cl from './PortfolioCard.module.css'

export const PortfolioCard = (props) => {
  return (
    <div className={cl.card}>
          <div className={cl.cardimage}>
            <img src={props.img} alt="Фото" />
          </div>
          <div className={cl.cardbuttons}>
            <button>{props.btn1}</button>
            <button>{props.btn2}</button>
            <button>{props.btn3}</button>
            <button>{props.btn4}</button>
          </div>
    </div>
  )
}
