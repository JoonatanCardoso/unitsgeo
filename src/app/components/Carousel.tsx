import React from "react";
import { Box } from '@mui/material';
import Image from "next/image";
import styles from "./Carousel.module.css"
export function Carousel() {
    return (
        <Box>
            <Image
            className={styles.imageBanner}
            src="/bloco4.jpg"
            alt="Teste"
            priority
            quality={100}	
            style={{objectFit: "cover", position: "relative"}}
            height={500} width={1920}/>
        </Box>
    )
}