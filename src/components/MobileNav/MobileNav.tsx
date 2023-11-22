import React from 'react';
import {Paper, Typography, Modal, useTheme} from "@mui/material";
import {Link, NavLink, useLocation} from "react-router-dom";
import {FaTwitter, FaDiscord, FaNewspaper} from "react-icons/fa";

interface MobileNavProps {
isOpen: boolean,
handleClose: () => void
}

interface TextUnitProps {
    text: string,
    navLink: string
}

const TextUnit = ({text, navLink}: TextUnitProps) => {
    const location = useLocation();
    const theme = useTheme();

    return (
        <Link to={navLink} style={{
            textDecoration: 'none'}}>
                    <Typography variant="h5" style={{
                    fontFamily: 'Main',
                    fontWeight: 'bold',
                    padding: 10,
                    marginBottom: text !== "STORE" ? 20 : 10,
                    cursor: 'pointer',
                    color: location.pathname === navLink ? theme.palette.primary.contrastText : 'black',
                    borderRadius: 5,
                    textAlign: 'center',
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 10px"
                }}
                           >
                            {text}
                            </Typography> 
            </Link>

    )}


export const MobileNav = ({isOpen, handleClose}: MobileNavProps) => {
    return (
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 50,
            marginTop: "3.5rem",
            outline: "none",
            padding: 20,
          }}
        >
          <TextUnit text="HOME" navLink="/" />
          <TextUnit text="DOJO" navLink="/dojo" />
          <TextUnit text="LORE" navLink="/lore" />
          <TextUnit text="AMAI MAP" navLink="/roadmap" />
          <TextUnit text="GALLERY" navLink="/gallery" />
          <TextUnit text="STORE" navLink="/store" />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <FaDiscord
              style={{
                fontSize: 35,
                cursor: "pointer",
                color: "black",
                padding: 10,
                paddingBottom: 0,
              }}
              onClick={() =>
                window.open("https://discord.gg/A23HygXeGz", "_blank")
              }
            />

            <FaTwitter
              style={{
                fontSize: 35,
                cursor: "pointer",
                color: "black",
                padding: 10,
                paddingBottom: 10,
              }}
              onClick={() =>
                window.open("https://twitter.com/amai_aki_", "_blank")
              }
            />

            <FaNewspaper
              style={{
                fontSize: 35,
                cursor: "pointer",
                color: "black",
                padding: 0,
              }}
              onClick={() =>
                window.open("https://amai-aki.gitbook.io/welcome", "_blank")
              }
            />
          </div>
        </Paper>
      </Modal>
    );
};

