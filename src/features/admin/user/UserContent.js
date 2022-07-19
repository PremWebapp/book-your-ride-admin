import React from 'react'
import UserPage from '../../../pages/user/UserPage'

function UserContent() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- End of Topbar --> */}

                    <UserPage />
                    {/* <!-- /.container-fluid --> */}

                </div>


                {/* <!-- End of Main Content --> */}

            </div>
            {/* <!-- End of Content Wrapper --> */}
        </>
    )
}

export default UserContent
