import * as React from 'react';
import styles from "./page.module.css";
import { Layout } from "./components/Layout"
import { Carousel } from "./components/Carousel"
import { SobreNos } from "./components/SobreNos"
import { Servicos } from './components/Servicos';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <Layout />
          <Carousel />
          <SobreNos />
          <Servicos />
      </div>
    </main>
  );
}
