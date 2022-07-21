import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContentDashbord from '../pages/dashbord/MainContent'
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
import UserPage from '../pages/user/userpage'
import PaymentPage from '../pages/payment/PaymentPage'
import OrderPage from '../pages/booking/OrderPage'

export default function MainContent() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path="/" element={< MainContentDashbord/>} />
          <Route exact path="/User" element={< UserPage />} />
          <Route exact path="/user-management" element={< UserManagementView />} />
          <Route exact path="/service" element={< ServicePage/>} />
          <Route exact path="/service-view" element={< ServiceView/>} />
          <Route exact path="/vahicle" element={< VahiclePage />} />
          <Route exact path="/vahicle-view" element={< VahicleView />} />
          <Route exact path="/profile" element={< ProfilePage />} />
          <Route exact path="/profile-edit" element={< EditProfilePage />} />
          <Route exact path="/profile-reset" element={< ResetPassword />} />
          <Route exact path="/booking" element={< OrderPage/>} />
          <Route exact path="/booking-view" element={< BookingView/>} />
          <Route exact path="/Payment" element={< PaymentPage />} />
          <Route exact path="/payment-view" element={< PaymentView/>} />
          <Route exact path="/setting" element={< Setting/>} />
          <Route exact path="/rating" element={< ReatingPage />} />
          <Route exact path="/rating-view" element={< RatingView />} />
          <Route exact path="/report" element={< ReportPage />} />
          <Route exact path="/notification" element={< NotificationPage />} />
        </Routes>
    </div>
  )
}