import { Box, Container, Fade, Grid, Paper, Typography, useTheme } from '@mui/material';

import gal1 from "../../img/gal1.png";
import gal2 from "../../img/gal2.png";
import gal3 from "../../img/gal3.png";
import gal4 from "../../img/gal4.png";
import gal5 from "../../img/gal5.png";
import gal6 from "../../img/gal6.png";
import gal7 from "../../img/gal7.png";
import gal8 from "../../img/gal8.png";
import gal9 from "../../img/gal9.png";
import gal10 from "../../img/gal10.png";
import isMobile from '../../components/isMobile';


export const GalleryPage = () => {
    const theme = useTheme();
    const mobile = isMobile();
    const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10];

    return (
        <div
        style={{
          display: "flex",
          flex: 1,
          width: window.innerWidth,
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          marginTop: mobile ? 80 : 150,
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            textAlign: mobile ? 'center' : 'left',
          width: '100%',
          marginBottom: 20,
          marginLeft: mobile ? 0 : '2.5%',
          }}
        >
          Gallery
        </Typography>
        <Fade in={true} timeout={1000}>
            <Container maxWidth="xl">
        <Grid container spacing={6} columns={10}>
            {
                images.map((image, index) => {
                        return (
                            <Grid item xs={10} sm={2} md={2} lg={2} key={index} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}>
                                <Box style={{
                                    margin: 0,
                                    padding: 0,
                                    backgroundColor: "transparent",
                                }}
                                sx={{
                                    "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
                                    transition: "transform 0.25s ease-in-out",
                                  }}>
                        <img
                        src={image}
                        style={{
                          width: "100%",
                          height: '100%',
                          borderRadius: 15,
                          boxShadow: "rgb(0 0 0 / 30%) 5px 5px 10px",
                        }}
                      />
                             </Box>
                                </Grid>
                
                        )
                }
                ) }
            
            </Grid>
                </Container>
                </Fade>
        </div>
    );
};

