import React from 'react'
import Footer from '../../../compnent/footer/Footer'
import TopBar from '../topbar/TopBar'
import CategoryPage from './CategoryPage'

function CategoryContent() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">


                    <CategoryPage />
                    {/* <!-- /.container-fluid --> */}

                </div>

            </div>
            {/* <!-- End of Content Wrapper --> */}
        </>
    )
}

export default CategoryContent
