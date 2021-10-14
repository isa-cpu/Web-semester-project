import React, { useState } from 'react'
import s from '../pagesCss/Home.module.css'
import { Carousel } from 'react-bootstrap'
import img from '../../images/img-1.jpg'
import img1 from '../../images/img-2.jpg'
import img2 from '../../images/img-3.jpg'

export default function Home() {
  const [text, setText] = useState('Isaac')
  // handler
  const handleClick = () => {
    if (text === 'Isaac') {
      setText('Learn for me!')
    } else {
      setText('Isaac')
    }
  }
  return (
    <>
      <section className={s.slider_container}>
        <h1 style={{ textAlign: 'center' }}>{text}</h1>
      </section>
      <button type='button' style={{ marginLeft: '48%' }} onClick={handleClick}>
        Do what!
      </button>
    </>
  )
}
