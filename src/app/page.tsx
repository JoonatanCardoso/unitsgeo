import * as React from 'react';
import styles from "./page.module.css";
import { Layout } from "./components/Layout"
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
          <Layout />
          {/* <Button variant="contained">Hello world</Button> */}
      </div>
    </main>
  );
}
