import React from 'react'
import Footer from '../../../compnent/footer/Footer'
import TopBar from '../topbar/TopBar'
import OrderPage from './OrderPage'

function OrderContent() {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}
          {/* <!-- End of Topbar --> */}

          <OrderPage />
          {/* <!-- /.container-fluid --> */}

        </div>


        {/* <!-- End of Main Content --> */}
        <Footer />

      </div>
      {/* <!-- End of Content Wrapper --> */}
    </>
  )
}

export default OrderContent