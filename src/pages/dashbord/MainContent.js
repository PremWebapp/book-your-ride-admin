import DashbordAvalableCard from './helper/dashbordAvalableCard'
import DashbordLineCart from './helper/dashbordLineCart'
import DashbordTotalUsesDetailsCard from './helper/dashbordTotalUsesDetailsCard'
import DashbordPaymentCard from './helper/dashbordPaymentCard';

function MainContentDashbord() {

    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column px-1">
                <div id="content">

                    {/* 1st card of dashbord  start */}
                    <DashbordTotalUsesDetailsCard />
                    {/* 1st card of dashbord  end */}

                    {/* 2nd Payment-card of  dashbord start*/}
                    <DashbordPaymentCard />
                    {/* 2nd Payment-card of  dashbord endstart*/}


                    {/* 2nd available-card of  dashbord start*/}
                    <DashbordAvalableCard />
                    {/* 2nd available-card of  dashbord end*/}

                    {/* 2nd line-card of  dashbord start*/}
                    <DashbordLineCart />
                    {/* 2nd line-card of  dashbord end*/}

                </div>
            </div>

        </>
    )
}

export default MainContentDashbord
