import DashbordTotalUsesDetailsCard from '../../../pages/helper/dashbordTotalUsesDetailsCard'
import Footer from '../footer/Footer'
import SideBar from '../sidenav/SideBar'
import TopBar from '../topbar/TopBar'
import PageContent from './PageContent'

function MainContentDashbord() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
                
                {/* <!-- Main Content --> */}
                <div id="content">
                {/* <SideBar/> */}

                    {/* <!-- Topbar --> */}
                    <TopBar />
                    {/* <!-- End of Topbar --> */}

                    {/* <PageContent /> */}

                    {/*total user details  */}
                    <DashbordTotalUsesDetailsCard />

                    {/* <!-- /.container-fluid --> */}

                </div>


                {/* <!-- End of Main Content --> */}
                <Footer />

            </div>
            {/* <!-- End of Content Wrapper --> */}
        </>
    )
}

export default MainContentDashbord
