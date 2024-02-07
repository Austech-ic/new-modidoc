"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import profile_Img from '../../../../public/img/dp.jpeg'
import { BiNotification, BiSolidToggleRight } from 'react-icons/bi'
import { BsArrowUp } from 'react-icons/bs'
import { FaArrowUp, FaHamburger } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styles from './dashboardheader.module.css'

const DashboardHeader = () => {
  const userName = 'John Doe'
  return (
      
    <div className={styles.maincont}>
      <div className={styles.subcontone}>

        <div className={styles.textcont}>
        <div className={styles.imagecont}>
        <Image src={profile_Img} alt='logo' className={styles.image} />
        
        </div>
        <div className={styles.textwrap}>
        <p className={styles.textone}>{userName}</p>
        <p className={styles.textwo}>Personal Dashboard</p>
        </div>
       
        </div>
        <div className={styles.iconcont}>
        <MdOutlineKeyboardArrowDown className={styles.icon} />
        </div>
       
      </div>


      <div className={styles.subcontwo}>
       
     
        <p className={styles.label}>ModiDoc</p>
        <div className={styles.upgradecont}> 
          <button className={styles.button}>Upgrade
            <FaArrowUp className={styles.arrow} />
          </button>
          
          <IoIosNotifications className={styles.iconalarm} />
          <div className={styles.imagecont}>
          <Image src={profile_Img} alt='logo' className={styles.image} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;