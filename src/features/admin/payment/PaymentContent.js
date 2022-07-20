import React from 'react'
import Footer from '../../../compnent/footer/Footer'
import TopBar from '../topbar/TopBar'
import PaymentPage from '../../../pages/payment/PaymentPage'

function PaymentContent() {
  return (
    <>
    
                {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}

                    <PaymentPage />
                    {/* <!-- /.container-fluid --> */}

                </div>


                {/* <!-- End of Main Content --> */}
                <Footer />

            </div>
            {/* <!-- End of Content Wrapper --> */}
    </>
  )
}

export default PaymentContent