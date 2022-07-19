import DashbordAvalableCard from './helper/dashbordAvalableCard'
import DashbordLineCart from './helper/dashbordLineCart'
import DashbordPychartCard from './helper/dashbordPychartCard'
import DashbordTotalUsesDetailsCard from './helper/dashbordTotalUsesDetailsCard'

function MainContentDashbord() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column px-3">
                
                {/* <!-- Main Content --> */}
                    {/*total user details  */}
                    <DashbordTotalUsesDetailsCard />

                    {/* pychat container */}
                    <DashbordPychartCard/>

                    {/* line  container */}
                    <DashbordLineCart />

                     {/* avalable  container */}
                     <DashbordAvalableCard />

                    {/* <!-- /.container-fluid --> */}

                </div>


        </>
    )
}

export default MainContentDashbord
