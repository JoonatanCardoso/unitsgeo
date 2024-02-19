"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Principal from "./home/page";
import FloatingButton from "./components/FloatingButton";

export default function Home() {

  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Principal />
        <FloatingButton onClick={handleButtonClick} />
      </div>
    </main>
  );
}
