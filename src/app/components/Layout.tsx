"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./Layout.module.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

type Anchor = "left";

export default function Layout() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useState(() => {
    console.log("in useState");
  });

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ width: "100%", minWidth: 360 }}>
        <ListItem>
          <Image
            className={styles.logoMobile}
            src="/logo.png"
            alt="Logo UnitsGeo"
            priority={true}
            width={150}
            height={43}
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("sobre")}>
            Sobre Nós
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("servicos")}>
            Serviços
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("contatos")}>
            Contatos
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton
            href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+quero+solicitar+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar Cotação
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const isMobile = useMediaQuery("(max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Grid className={styles.main}>
      <Grid xs={12} md={12} className={styles.navbarSocial}>
        <a
          href="https://www.instagram.com/unitsgeo/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/iconInsta.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
        <a
          href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/iconWhats.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
        <a
          href="https://maps.app.goo.gl/cfPZopzhS9yjKxbN7"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/iconMaps.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
      </Grid>
      <Grid
        className={styles.container}
        container
        sx={{ flexDirection: { xs: "row", md: "row" } }}
        style={{
          backgroundImage: "url(/navbar.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src="/logo-preto.png"
          alt="Logo UnitsGeo"
          priority={true}
          width={150}
          height={43}
        />
        <div>
          {(["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              {isMobile && (
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon sx={{ color: "black" }} />
                </Button>
              )}
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

        {isDesktop && (
          <Grid
            justifyContent="right"
            container
            xs={12}
            md={9}
            sx={{ flexDirection: { xs: "row", md: "row" } }}
          >
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("sobre")}
              >
                Sobre Nós
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("servicos")}
              >
                Serviços
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("contatos")}
              >
                Contatos
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 3 : 3}>
              <Button
                className={styles.button}
                href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+quero+solicitar+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar Cotação
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
