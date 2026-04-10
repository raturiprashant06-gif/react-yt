import React from 'react'
import style from './header.module.css'



const header = () => {
  return (
    <div className={style.header}>
        <h3>This is Header</h3>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default header
