import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import DetailBlog from "./Components/Blog/DetailBlog";
import BookDemo from "./Components/BookDemo/BookDemo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home/Home";
import Marketing from "./Components/Marketing/Marketing";
import MuchMore from "./Components/MuchMore/MuchMore";
import Pricing from "./Components/Pricing/Pricing";
import ProductSales from "./Components/ProductSales/ProductSales";
import Navbar from "./Components/SharedComponents/Navbar";
import TalentAquisition from "./Components/TalentAquisition/TalentAquisition";
import WhyUs from "./Components/WhyUs/WhyUs";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/whyus">
          <WhyUs />
        </Route>
        <Route  path="/sales">
          <ProductSales />
        </Route>
        <Route  path="/blog">
          <Blog />
        </Route>
        <Route  path="/detailBlog">
          <DetailBlog />
        </Route>
        <Route  path="/pricing">
          <Pricing />
        </Route>
        <Route  path="/contactUs">
          <ContactUs />
        </Route>
        <Route  path="/marketing">
          <Marketing />
        </Route>
        <Route  path="/talentAquisition">
          <TalentAquisition />
        </Route>
        <Route  path="/muchMore">
          <MuchMore />
        </Route>
        <Route  path="/bookDemo">
          <BookDemo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
