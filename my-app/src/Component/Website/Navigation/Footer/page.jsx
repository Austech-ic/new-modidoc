import React from 'react'
import styles from './page.module.css'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

const page = () => {
    const details = [
        {
          id: 1,
          icon: <FaTwitter className={styles.icon} color='#77C3FD' />
        },
        {
          id: 2,
          icon: <FaFacebook className={styles.icon} color='#2F83C2' />
        },
        {
          id: 3,
    
          icon: <FaInstagram className={styles.icon} color='#EB5A33'/>
        },
        {
          id: 4,
          icon: <FaLinkedinIn className={styles.icon} color= '#2F83C2' />
        },
        {
          id: 5,
          icon: <FaPinterest className={styles.icon} color='#E9404A'/>
        }
      ]
  return (
    <section className={styles.maincont}>
    <div className={styles.subcont}>
      <div className={styles.subone}>
        <div className={styles.subonecomp}>
       
        <p>ModiDoc</p>
        <p>@ 2023 ModiDoc,LLC</p>
        </div>
        
      </div>
      <div className={styles.subtwo}>
        <div className={styles.about}>
          <p className={styles.aboutext}>Products</p>
          <div className={styles.abtcont}>
            <p>PDF Editor</p>
            <p>Forms & Templates</p>
            <p>Sign Documents</p>
            <p>Server Status</p>
            <p>Pricing</p>
            <p>Forms Library</p>
            <p>Features</p>
            <p>Functions</p>
           
          </div>

        </div>

        <div className={styles.project}>
          <p className={styles.company}>Company</p>
          <div className={styles.compcont}>
            <p>About</p>
            <p>Terms</p>
            <p>Privacy Notice</p>
            <p>Legal</p>
            <p>Support</p>
            <p>Release Notes</p>
           
          </div>

        </div>

        <div className={styles.commun}>
          <p className={styles.resources}>Resources</p>
          <div className={styles.resourcecont}>
            <p>pdfFiller</p>
            <p>US Legal Forms</p>
            <p>Electronic Signature</p>
            <p>No-code document</p>
            <p>workflows</p>
          </div>

        </div>
        
      </div>

    </div>
    <hr />
    <div className={styles.divcont}>
      <p>© 2023 modidoc. All rights reserved.</p>
      <div className={styles.iconcont}>
        {
          details.map((datum) => (
            <div key={datum.id}>
              <p>{datum.icon}</p>
              </div>
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default page