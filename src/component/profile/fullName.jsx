import React from 'react'

export default function FullName() {
  let MyFullName= ()=>{
    return 'Sami Sedoud'
  } 

  const NoMarginBottom = { marginBottom : 0 }
  return (
    <>
        <h3 style={NoMarginBottom}> 
          {MyFullName()}
        </h3>
    </>
  )
}
