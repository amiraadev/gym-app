
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import OurClasses from './scenes/ourclasses'
import ContactUs from './scenes/contactus'
import Footer from './scenes/footer'


function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
 const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
 useEffect(() =>{
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !== 0) {
      setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll)
  }
  
 },[]);

 useEffect(() =>{
  console.log(selectedPage);
   
  },[selectedPage]);

  return (
<div className="app bg-gray-20">
  <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  <Home  setSelectedPage={setSelectedPage} />
  <Benefits  setSelectedPage={setSelectedPage} />
  <OurClasses  setSelectedPage={setSelectedPage} />
  <ContactUs setSelectedPage={setSelectedPage} />
   <Footer />
</div>    
  )
}

export default App
