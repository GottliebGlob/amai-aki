import { Slide, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import isMobile from '../../components/isMobile';

export const StorePage = () => {
    const theme = useTheme();
    const mobile = isMobile();

    const [dots, setDots] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setDots((dots) => dots === 3 ? 0 : dots + 1);
                
        }, 400);

        return () => clearInterval(interval);

     }, [])
    
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            width: window.innerWidth,
            justifyContent: 'center',
            alignItems: 'center',
            height: window.innerHeight,
        }}>

<Slide direction="up" in={true} timeout={500} mountOnEnter unmountOnExit>
            <Typography variant={mobile ? 'h2' : 'h1'} style={{ fontFamily: 'Main', textAlign: 'center',
            fontWeight: 'bold', color: 'black' }}
            >
                Coming soon
                <Typography variant={mobile ? 'h2' : 'h1'} style={{ fontFamily: 'Main', 
            fontWeight: 'bold', color: theme.palette.primary.contrastText, display: 'inline' }}
            sx={{
                opacity: dots > 0 ? 1 : 0,
                transition: 'opacity 0.2s ease-in-out'
            }}
            >
                .
                </Typography>
                <Typography variant={mobile ? 'h2' : 'h1'} style={{ fontFamily: 'Main', 
            fontWeight: 'bold', color: theme.palette.primary.contrastText, display: 'inline' }}
            sx={{
                opacity: dots > 1 ? 1 : 0,
                transition: 'opacity 0.2s ease-in-out'
            }}
            >
                .
                </Typography>
                <Typography variant={mobile ? 'h2' : 'h1'} style={{ fontFamily: 'Main', 
            fontWeight: 'bold', color: theme.palette.primary.contrastText, display: 'inline' }}
            sx={{
                opacity: dots > 2 ? 1 : 0,
                transition: 'opacity 0.2s ease-in-out'
            }}
            >
                .
                </Typography>
                </Typography>
                </Slide>
        
        </div>
    );
};

