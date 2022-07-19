import SideNav from './sidenav/SideNav';
import Maincontent from './contentWrapper/MainContent';
import '../../vendor/fontawesome-free/css/all.css';
import '../../css/sb-admin-2.css';
import SideBar from './sidenav/SideBar';

function DashboardAdmin() {
    return (
        <>
            <div id="wrapper" className='d-flex'>
                {/* <SideNav /> */}
                <SideBar/>
                <Maincontent />
            </div>
        </>
    )
}

export default DashboardAdmin
