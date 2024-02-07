import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '../Component/Website/Home/Header/header'
import SectionTwo from '../Component/Website/Home/Sectiontwo/sectiontwo'
import Third from '../Component/Website/Home/Third/third'
import Four from '../Component/Website/Home/Four/page'
import Five from '../Component/Website/Home/Five/page'
import Six from '../Component/Website/Home/Six/page'
import Seven from '../Component/Website/Home/Seven/page'
import Footer from '../Component/Website/Navigation/Footer/page'





export default function Home() {
  return (
    <main className='main'>
    <Header />
    <SectionTwo />
    <Third />
    {/* <Four /> */}
    <Five />
    <Six />
    <Seven />
    <Footer />


  {/* <div className='poptext'>
    <div className='popcont'>
    <p className='text'>This site uses cookies to <span className="ellipsis">...</span> <span className='read'>Read more</span></p>
    <p className='show'>This site uses cookies to enhance site navigation and personalize your experience.
    By using this site you agree to our <span className="ellipsis">...</span> <span className='read'>Read more</span>  </p>
    </div>
  
  </div> */}
 


  </main>
  )
}
