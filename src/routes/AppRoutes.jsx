import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import TradeAcademy from "../pages/Resources/TradeAcademy";
import TradeAcademyArticleDetail from "../pages/Resources/TradeAcademyArticleDetails";
import TradeAcademyCategory from "../pages/Resources/TradeAcademyCategory";
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

    </Routes>
  );
}

export default AppRoutes;