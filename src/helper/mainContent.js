import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryManagement from '../features/admin/category/CategoryManagement'
import MainContentDashbord from '../features/admin/contentWrapper/MainContent'
import CountryCityManagement from '../features/admin/countryCity/CountryCityManagement'
import DishManagement from '../features/admin/dish/DishManagement'
import DriverManagement from '../features/admin/driver/DriverManagement'
import DriverDetailManagement from '../features/admin/driver/pages/DriverDetailManagement'
import OrderManagement from '../features/admin/order/OrderManagement'
import PaymentManagement from '../features/admin/payment/PaymentManagement'
import ProfileManagement from '../features/admin/profile/ProfileManagement'
import PromoCodePage from '../features/admin/promo/pages/PromoCodePage'
import PromotionPage from '../features/admin/promo/pages/PromotionPage'
import PromoManagement from '../features/admin/promo/PromoManagement'
import RestroDetailManagement from '../features/admin/restaurant/pages/RestroDetailManagement'
import RestaurantManagement from '../features/admin/restaurant/RestaurantManagement'
import UserManagement from '../features/admin/user/UserManagement'
import UserMap from '../features/admin/user/UserMap'
import Setting from '../pages/setting'

export default function MainContent() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={< MainContentDashbord/>} />
          <Route exact path="/Category" element={< CategoryManagement/>} />
          <Route exact path="/countryCity" element={< CountryCityManagement/>} />
          <Route exact path="/User" element={< UserManagement/>} />
          <Route exact path="/Restaurant" element={< RestaurantManagement/>} />
          <Route exact path="/restroDetail/:id" element={< RestroDetailManagement/>} />
          <Route exact path="/userMap" element={< UserMap/>} />
          <Route exact path="/Driver" element={< DriverManagement/>} />
          <Route exact path="/driverDetail/:id" element={< DriverDetailManagement/>} />
          <Route exact path="/Profile" element={< ProfileManagement/>} />
          <Route exact path="/Dish" element={< DishManagement/>} />
          <Route exact path="/Promo" element={< PromoManagement/>} />
          <Route exact path="/Promo/Code" element={< PromoCodePage/>} />
          <Route exact path="/Promo/Promotion" element={< PromotionPage/>} />
          <Route exact path="/Order" element={< OrderManagement/>} />
          <Route exact path="/Payment" element={< PaymentManagement/>} />
          <Route exact path="/setting" element={< Setting/>} />

        </Routes>
    </div>
  )
}