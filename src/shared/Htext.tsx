import React from 'react'

type Props = {
    children:React.ReactNode;
}

function Htext({children}: Props) {
  return (
    <h1 className="basis-3/5 font-montserrat text-4xl font-bold">
        {children}
    </h1>
    )
}

export default Htext
