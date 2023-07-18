import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';
type Props={
    children : React.ReactNode;
    setSelectedPage: (value:SelectedPage) => void;
}
function ActionButton({children,setSelectedPage} :Props) {
  return (
    <AnchorLink
       className='rounded-md bg-secondary-500 py-2  px-2 hover:bg-primary-500'
       onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
       href={`#${SelectedPage.ContactUs}`}
       >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
