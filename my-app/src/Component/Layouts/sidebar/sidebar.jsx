import React from 'react'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting} from 'react-icons/ai'
import {BiMessageSquareCheck} from 'react-icons/bi'
import {HiOutlineDocumentText,HiOutlineTemplate} from 'react-icons/hi'
import {MdPublic,MdOutlineFax} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'
import Link from 'next/link';
import styles from './sidebar.module.css'


const Sidebar = ({ handleMenuClose }) => {
  const details = [
    {
      id:1,
      icon: <AiOutlineHome className={styles.icon} />,
      title: "Dashboard",
      link: "/dashboard",
      path: "/dashboard",
      
    },
    {
      id:2,
      icon: <AiOutlineInbox className={styles.icon} />,
      title: "Inbox",
      link: "/dashboard/inbox",
      path: "/dashboard/inbox",
    },
    {
      id:3,
      icon: <BiMessageSquareCheck className={styles.icon} />,
      title: "Sent",
      link: "/dashboard/sent",
      path: "/dashboard/sent",
    },
    {
      id:4,
      icon: <HiOutlineDocumentText className={styles.icon} />,
      title: "Document",
      link: "/dashboard/document",
      path: "/dashboard/document",
    },
    {
      id:5,
      icon: <HiOutlineTemplate className={styles.icon} />,
      title: "Templates",
      link: "/dashboard/template",
      path: "/dashboard/template",
    },
    {
      id:6,
      icon: <MdPublic className={styles.icon} />,
      title: "Public",
      link: "/dashboard/public",
     path: "/dashboard/public",
    },
    {
      id:7,
      icon: <MdOutlineFax className={styles.icon} />,
      title: "Fax Inbox",
      link: "/dashboard/fax",
      path: "/dashboard/fax",
    },
  ]
  const handleClick = () => {
    // Call handleMenuClose function to close the menu
    handleMenuClose();
  };


  return (
  <div className={styles.sidebar}>
      <Link href={`/dashboard/newdoc`} className={styles.links}>
        <div className={styles.mainhead}>
          <div className={styles.headcont}>
            <AiFillFileAdd className={styles.icons} />
            <p>New Document</p>
          </div>
        </div>
      </Link>

      <div className={styles.container}>
        {details.map((datum) => (
          <div key={datum.id} className={styles.cont} onClick={handleClick}>
            <Link href={datum.path} className={styles.link}>
              <p>{datum.icon}</p>
              <p>{datum.title}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.linecont}>
        <hr className={styles.line} />
      </div>

      <Link href={`/setting`} className={styles.links}>
        <div className={styles.mainheads}>
          <div className={styles.headconts}>
            <AiFillSetting className={styles.icons} />
            <p>Setting</p>
          </div>
        </div>
      </Link>
      <hr className={styles.line} />

      <Link href={`/setting/organization/new`} className={styles.links}>
        <div className={styles.mainheader}>
          <div className={styles.header}>
            <IoMdAddCircleOutline className={styles.icons} />
            <p>New Organization</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar;