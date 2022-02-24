import React from "react";
import Header from "../Header/Header";
import SalesRecord from "../SalesRecord/SalesRecord";
import AskAnalyst from "../AskAnalyst/AskAnalyst";
import Recomendation from "../Recomendation/Recomendation";
import DataGeneration from "../DataGeneration/DataGeneration";
import TrustedBy from "../../SharedComponents/TrustedBy";
import ClientSpeak from "../ClientSpeak/ClientSpeak";
import SalesConversation from "../../SharedComponents/SalesConversation";
import Footer from "../../SharedComponents/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SalesRecord />
      <AskAnalyst />
      <Recomendation />
      <DataGeneration />
      <TrustedBy />
      <ClientSpeak />
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default Home;
