import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';import Image from "next/image";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <Fab
      sx={{
        marginBottom: 2,
        marginRight: 2,
        position: "fixed",
        bottom: 2,
        right: 2,
        backgroundColor: '#00a94e',
        color: 'white'
      }}
      onClick={onClick}
    >
      <a
        href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon fontSize="large" />
      </a>
    </Fab>
  );
};

export default FloatingButton;
