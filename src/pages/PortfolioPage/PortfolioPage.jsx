import React from 'react'
import cl from './PortfolioPage.module.css'
import { PortfolioCard } from './card/PortfolioCard'
const arr = [
  {img: 'https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
  {img: '', btn1: '', btn2: '', btn3: '', btn4: ''},
]


function PortfolioPage() {
  return (
    <div className='page'>
      <div className={cl.title_page}>
        <h1>Заголовок</h1>
      </div>
      <div className={cl.bank}>
        {arr.map(card => 
          <PortfolioCard {...card}/>
        )}
      </div>
    </div>
  )
}

export default PortfolioPage
