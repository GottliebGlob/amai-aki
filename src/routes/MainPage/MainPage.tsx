import React, {useRef} from 'react';
import {Typography, useTheme, Container, Fade, Grid} from "@mui/material";

import back from "../../img/back.png";


export const MainPage = () => {
    const theme = useTheme()

   

    return (
        <div style={{
            backgroundImage: `url(${back})`,
            display: 'flex',
            flex: 1,
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginTop: 60,
            width: window.innerWidth,
            height: window.innerHeight - 60,
            minWidth: window.innerHeight,
            overflow: 'hidden',
            }}>
          
        </div>
    );
};

