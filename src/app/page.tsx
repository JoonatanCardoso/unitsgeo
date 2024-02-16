"use client";
import * as React from "react";
import styles from "./page.module.css";
import Layout from "./components/Layout";
import { Carousel } from "./components/Carousel";
import { SobreNos } from "./components/SobreNos";
import { Servicos } from "./components/Servicos";
import { Contatos } from "./components/Contatos";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Layout />
        <Carousel />
        <SobreNos />
        <Servicos />
        <Contatos />
      </div>
    </main>
  );
}
