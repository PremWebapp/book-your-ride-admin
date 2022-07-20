import React from 'react'
import OrderPage from './OrderPage'

function OrderContent() {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <OrderPage />
        </div>

      </div>
    </>
  )
}

export default OrderContent