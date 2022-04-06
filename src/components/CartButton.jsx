import React from 'react'

const CartButton = ({clickListener, icon}) => {
  return (
    <>
        <div onClick={clickListener}><span className="add-to-bag material-icons md-24">{icon}</span></div>
    </> 
  )
}

export default CartButton;