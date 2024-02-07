
import React, { useEffect } from 'react'
import { HiHome } from 'react-icons/hi'
import { AiOutlineFileAdd } from 'react-icons/ai'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'
import { MdCreate, MdOutlineCreateNewFolder } from 'react-icons/md'
import styles from './overview.module.css'
import PageLoader from '@/helper/loading'


const Overview = () => {
  const email = "henyorlerjosephine@gmail.com"

  const Content = [
    {
      id: 1,
      iconOne: <AiOutlineFileAdd className={styles.icons} />,
      label: "Import a document",
      iconTwo: <LiaLongArrowAltRightSolid className={styles.icons} />
    },
    {
      id: 2,
      iconOne: <MdOutlineCreateNewFolder className={styles.icons} />,
      label: "Create a template",
      iconTwo: <LiaLongArrowAltRightSolid className={styles.icons} />
    },
    {
      id: 3,
      iconOne: <MdCreate className={styles.icons} />,
      label: "Send a sign request",
      iconTwo: <LiaLongArrowAltRightSolid className={styles.icons} />
    }
  ]
  // const data = []
  // if(!data){return ( <PageLoader/>)}
  
    // if (error) {return <ErrorHandler/>}
  return (
    <div className={styles.maincont}>
      <div className={styles.homemain}>
      <div className={styles.homecont}>
        <HiHome className={styles.icon} />
      </div>
      </div>
     

      <div className={styles.textcont}>
        <p className={styles.textone}>Welcome to your</p>
        <p className={styles.textwo}>ModiDoc Dashboard</p>
      </div>

      <div className={styles.getcont}>
        <p className={styles.get}>GET STARTED:</p>
    
        <div className={styles.container}>
          {
            Content.map((item) => (

              <div key={item.id} className={styles.cont}>
              <div>{item.iconOne}</div>
              <p>{item.label}</p>
              <div>{item.iconTwo}</div>
            </div>
            ))
          }
        </div>
        <div className={styles.lastcont}>
        <p className={styles.last}>Not seeing your files? Try searching by file name, or browse and filter your dashboard. Still do not see your files? You are currently logged in as</p>
        <p className={styles.last}><span className={styles.bold}>{email}</span>. Maybe you logged in previously with a different account.</p>
        </div>
      </div>
      
     

    </div>
  )
}

export default Overview;