import React from 'react'

export default function Address() {

  return (
    <>
        <span style={doMargin} > <strong>Address :</strong> samisedhh@gmail.com </span>
        <button  style={btn}  > Contact </button>
    </>
  )

}
const doMargin = { margin:'10px 0 40px 0' }
const btn = {margin:'10px ',padding:3 , color:'#333', width: '80%',border: '1px solid' ,borderRadius: '10px' }
// how do { btn:hover } here in object Style ?!