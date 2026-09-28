import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../components/common/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../components/common/TermsAndConditions/TermsAndConditions";
import CustomerDashboardLayout from "../layouts/CustomerDashboard/CustomerDashboardLayout";
import About from "../pages/About/About";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail";
import ContactUs from "../pages/Contact/Contact";
import Dashboard from "../pages/Customer/Dashboard/Dashboard";
import Payments from "../pages/Customer/Payments/Payments";
import Profile from "../pages/Customer/Profile/Profile";
import RequestDetails from "../pages/Customer/RequestDetails/RequestDetails";
import Requests from "../pages/Customer/Requests/Requests";
import RequestSubmitted from "../pages/Customer/RequestSubmitted/RequestSubmitted";
import Shipments from "../pages/Customer/Shipments/Shipments";
import SourceRequest from "../pages/Customer/SourceRequest/SourceRequest";
import Home from "../pages/Home/Home";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import FAQs from "../pages/Resources/FAQS/FAQS";
import Testimonials from "../pages/Resources/Testimonials/Testimonials";
import TradeAcademyArticleDetail from "../pages/Resources/TradeAcademy/Articles/TradeAcademyArticleDetails";
import TradeAcademyCategory from "../pages/Resources/TradeAcademy/Category/TradeAcademyCategory";
import TradeAcademy from "../pages/Resources/TradeAcademy/TradeAcademy";
import AirFreight from "../pages/Services/AirFreight";
import BusinessProcurement from "../pages/Services/BusinessProcurement";
import Consolidation from "../pages/Services/Consolidation";
import LocalDelivery from "../pages/Services/LocalDelivery";
import ProductSourcing from "../pages/Services/ProductSourcing";
import SeaFreight from "../pages/Services/SeaFreight";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/services/consolidation" element={<Consolidation />} />

      <Route  path="/services/product-sourcing" element={<ProductSourcing />}/>

      <Route path="/services/business-procurement" element={<BusinessProcurement />} />

      <Route path="/services/sea-freight" element={<SeaFreight />} />

      <Route path="/services/air-freight" element={<AirFreight />} />

      <Route path="/services/local-delivery" element={<LocalDelivery />} />
      
      <Route path="/how-it-works" element={<HowItWorks />} />

      <Route path="/resources/trade-academy" element={<TradeAcademy />} />

      <Route path="/resources/trade-academy/category/:categorySlug" element={<TradeAcademyCategory />} />

      <Route path="/resources/trade-academy/article/:articleSlug" element={<TradeAcademyArticleDetail />} /> 

      <Route path="/resources/faqs" element={<FAQs />} />

      <Route path="/resources/testimonials" element={<Testimonials />} />

      <Route path="/about-us" element={<About />} />

      <Route path="/contact"element={<ContactUs />} />

      <Route path="/login" element={<Login />} />


      <Route path="/register" element={<Register />}  />

      <Route path="forgot-password" element= {<ForgotPassword/>} />

      <Route path="verify-email" element = { <VerifyEmail/>} />

      <Route path="/privacy-policy" element={<PrivacyPolicy/> } />
      
      <Route path="/terms" element={<TermsAndConditions />} />


        <Route  path="/dashboard"  element={<CustomerDashboardLayout />} >

            <Route index element={<Dashboard />} />

            <Route  path="requests"  element={<Requests />}  />

            <Route  path="requests/:requestNumber"  element={<RequestDetails />} />

            <Route  path="requests/new"  element={<SourceRequest />} />

            <Route  path="requests/submitted"  element={<RequestSubmitted />}  />

            <Route  path="shipments"  element={<Shipments />}   />

            <Route  path="payments"  element={<Payments />} />

            <Route  path="profile"  element={<Profile />} /> 

       </Route>




      {/* <Route path="/dashboard" element={<Dashboard />} />

      <Route path="dashboard/requests/new"element={<SourceRequest/>} />

      <Route path="/dashboard/requests/submitted" element={<RequestSubmitted/>} />

      <Route path="/dashboard/requests" element={<Requests />} />

      <Route path="/dashboard/requests/:requestNumber" element={<RequestDetails />} /> */}

    </Routes>
  );
}

export default AppRoutes;