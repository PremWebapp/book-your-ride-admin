import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryManagement from '../features/admin/category/CategoryManagement'
import MainContentDashbord from '../pages/dashbord/MainContent'
import CountryCityManagement from '../features/admin/countryCity/CountryCityManagement'
import DishManagement from '../features/admin/dish/DishManagement'
import DriverManagement from '../features/admin/driver/DriverManagement'
import DriverDetailManagement from '../features/admin/driver/pages/DriverDetailManagement'
import OrderManagement from '../features/admin/order/OrderManagement'
import PaymentManagement from '../features/admin/payment/PaymentManagement'
import PromoCodePage from '../features/admin/promo/pages/PromoCodePage'
import PromotionPage from '../features/admin/promo/pages/PromotionPage'
import PromoManagement from '../features/admin/promo/PromoManagement'
import UserManagement from '../features/admin/user/UserManagement'
import UserMap from '../features/admin/user/UserMap'
import Header from '../compnent/header/header'
import ServicePage from '../pages/service/servicepage'
import Setting from '../pages/setting/setting'
import VahiclePage from '../pages/vahicle/vahicle'
import UserManagementView from '../pages/user/userManagementView'
import VahicleView from '../pages/vahicle/vahicleView'
import BookingView from '../pages/booking/bookingView'
import ReatingPage from '../pages/rating/ratingPage'
import RatingView from '../pages/rating/ratingView'
import ReportPage from '../pages/report/reportPage'
import NotificationPage from '../pages/notification/notificationPage'
import ServiceView from '../pages/service/serviceview'
import ProfilePage from '../pages/profile/profile'
import PaymentView from '../pages/payment/paymentview'
import EditProfilePage from '../pages/profile/profileform'
import ResetPassword from '../pages/profile/changepassword'

export default function MainContent() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path="/" element={< MainContentDashbord/>} />
          <Route exact path="/User" element={< UserManagement/>} />
          <Route exact path="/user-management" element={< UserManagementView />} />
          <Route exact path="/Category" element={< CategoryManagement/>} />
          <Route exact path="/service" element={< ServicePage/>} />
          <Route exact path="/service-view" element={< ServiceView/>} />
          <Route exact path="/vahicle" element={< VahiclePage />} />
          <Route exact path="/vahicle-view" element={< VahicleView />} />
          <Route exact path="/countryCity" element={< CountryCityManagement/>} />
          <Route exact path="/userMap" element={< UserMap/>} />
          <Route exact path="/Driver" element={< DriverManagement/>} />
          <Route exact path="/driverDetail/:id" element={< DriverDetailManagement/>} />
          <Route exact path="/profile" element={< ProfilePage />} />
          <Route exact path="/profile-edit" element={< EditProfilePage />} />
          <Route exact path="/profile-reset" element={< ResetPassword />} />
          <Route exact path="/Dish" element={< DishManagement/>} />
          <Route exact path="/Promo" element={< PromoManagement/>} />
          <Route exact path="/Promo/Code" element={< PromoCodePage/>} />
          <Route exact path="/Promo/Promotion" element={< PromotionPage/>} />
          <Route exact path="/booking" element={< OrderManagement/>} />
          <Route exact path="/booking-view" element={< BookingView/>} />
          <Route exact path="/Payment" element={< PaymentManagement/>} />
          <Route exact path="/payment-view" element={< PaymentView/>} />
          <Route exact path="/setting" element={< Setting/>} />
          <Route exact path="/rating" element={< ReatingPage />} />
          <Route exact path="/rating-view" element={< RatingView />} />
          <Route exact path="/report" element={< ReportPage />} />
          <Route exact path="/notification" element={< NotificationPage />} />
        </Routes>
        {/* <Footer/> */}
    </div>
  )
}