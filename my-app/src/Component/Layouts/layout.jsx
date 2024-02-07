"use client"
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './layout.module.css';
import Dashtop from '@/Component/Layouts/dashboardheader/dashboardheader';
import Mainbar from '@/Component/DashboardComp/Overview/overview';
import Sidebar from '@/Component/Layouts/sidebar/sidebar';
import Settingsidebar from './settingSidebar/settingsidebar';
import Footer from '@/Component/Website/Navigation/Footer/page'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { LiaYoutubeSquare } from 'react-icons/lia';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className={`${styles.maincont} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.menu}>
        <button className={styles.button} onClick={toggleMenu}>
          <HiOutlineMenuAlt1 className={styles.icon} />
          Menu
        </button>
      </div>
      <div className={styles.head}>
        <Dashtop />
      </div>
      <hr />

      <div className={styles.subcont}>
        <div
          className={`${styles.subcontone} ${isMenuOpen ? styles.menuOpen : ''}`}
        >

          {
           router.pathname.includes ("/dashboard") ?  <Sidebar /> : <Settingsidebar  />
          }

         
        </div>
        <hr className={styles.line} />

        <div
          className={`${styles.subcontwo} ${isMenuOpen ? styles.menuClosed : ''}`}
        >
          {children}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Layout;
