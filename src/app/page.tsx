import * as React from 'react';
import styles from "./page.module.css";
import { Layout } from "./components/Layout"
import { Carousel } from "./components/Carousel"
import { SobreNos } from "./components/SobreNos"

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
          <Layout />
          <Carousel />
          <SobreNos />
      </div>
    </main>
  );
}
