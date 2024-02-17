"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Layout from "./components/Layout";
import { Carousel } from "./components/Carousel";
import { SobreNos } from "./components/SobreNos";
import { Servicos } from "./components/Servicos";
import { Contatos } from "./components/Contatos";
import FloatingButton from "./components/FloatingButton";

export default function Home() {

  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Layout />
        <Carousel />
        <SobreNos />
        <Servicos />
        <Contatos />
        <FloatingButton onClick={handleButtonClick} />
      </div>
    </main>
  );
}
