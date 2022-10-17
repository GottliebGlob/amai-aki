import React from 'react';
import {Container, Grid} from "@mui/material";
import promoOne from "../../img/promo/promoOne.png"
import promoTwo from "../../img/promo/promoTwo.png"
import promoThree from "../../img/promo/promoThree.png"
import promoFour from "../../img/promo/promoFour.png"
import promoFive from "../../img/promo/promoFive.png"
import promoSix from "../../img/promo/promoSix.png"
import promoSeven from "../../img/promo/promoSeven.png"
import promoEight from "../../img/promo/promoEight.png"
import promoNine from "../../img/promo/promoNine.png"
import promoTen from "../../img/promo/promoTen.png"
import promoEleven from "../../img/promo/promoEleven.png"


export const Promo = () => {
    return (
        <Container maxWidth="lg" style={{
            marginTop: '1rem',
            marginBottom: '2rem'
        }}>

            <Grid container spacing={3}>
                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <img src={promoOne} alt="loading..."
                         onClick={() => window.open("https://nftsolana.io/", "_blank")}
                         style={{width: '60%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoTwo} alt="loading..."
                         onClick={() => window.open("https://wenmint.io/drop/tokyo-food?sale=aaf55da8", "_blank")}
                         style={{width: '60%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoFive} alt="loading..."
                         onClick={() => window.open("https://raritysniper.com/", "_blank")}
                         style={{width: '60%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoSix} alt="loading..."
                         onClick={() => window.open("https://nftdroops.com/", "_blank")}
                         style={{width: '60%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoFour} alt="loading..."
                         onClick={() => window.open("https://nft-list.io/", "_blank")}
                         style={{width: '35%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoThree} alt="loading..."
                         onClick={() => window.open("https://www.nftpilot.io/", "_blank")}
                         style={{width: '35%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoSeven} alt="loading..."
                         onClick={() => window.open("https://nftreminder.io/", "_blank")}
                         style={{width: '35%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={3} md={3} lg={3} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoEight} alt="loading..."
                         onClick={() => window.open("https://www.nftfigure.org/", "_blank")}
                         style={{width: '35%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={4} md={4} lg={4} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoNine} alt="loading..."
                         onClick={() => window.open("https://www.nft-drop-calendar.com/", "_blank")}
                         style={{width: '55%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>

                <Grid item sm={4} md={4} lg={4} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoTen} alt="loading..."
                         onClick={() => window.open("https://icy.tools/calendar", "_blank")}
                         style={{width: '55%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>
                <Grid item sm={4} md={4} lg={4} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={promoEleven} alt="loading..."
                         onClick={() => window.open("https://www.nftmintradar.com/", "_blank")}
                         style={{width: '55%', textAlign: 'center', cursor: 'pointer'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

