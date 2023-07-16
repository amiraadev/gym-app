import {ReactElement} from 'react'


type headingProps = {title: string}
const Heading = ({title}:headingProps): ReactElement =>{
  return (
   <h1>{title}</h1>
  )
}

export default Heading
