import React from 'react';
import {Grid, Paper, Typography, useTheme} from "@mui/material";
import team1 from "../../img/team1.png"
import team2 from "../../img/team2.png"
import team3 from "../../img/team3.png"
import sneak1 from "../../img/sneak1.png"

export const Team = () => {
    const theme = useTheme()

    return (
        <Grid container spacing={3} style={{
            marginBottom: '2rem'
        }}>
            <Grid item xs={6} sm={3} md={3} lg={3} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Paper elevation={12} style={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 15,
                    paddingTop: 20,
                    borderRadius: 20
                }}>
                <img src={team1} alt="loading..."
                     style={{
                         width: '80%',
                         borderRadius: 20,
                         textAlign: 'center',
                     }}/>

                <Typography variant="h4" style={{
                    color: '#fff',
                    fontFamily: 'main',
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                 Michael
                </Typography>

                <Typography variant="h5" style={{
                    color: theme.palette.primary.contrastText,
                    fontFamily: 'main',
                    textAlign: 'center'
                }}>
                 FOUNDER
                </Typography>

                </Paper>
            </Grid>

            <Grid item xs={6} sm={3} md={3} lg={3} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Paper elevation={12} style={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 15,
                    paddingTop: 20,
                    borderRadius: 20
                }}>
                <img src={team2} alt="loading..."
                     style={{
                         width: '80%',
                         borderRadius: 20,
                         textAlign: 'center',
                     }}/>
                <Typography variant="h4" style={{
                    color: '#fff',
                    fontFamily: 'main',
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                     Karl
                </Typography>

                <Typography variant="h5" style={{
                    color: theme.palette.primary.contrastText,
                    fontFamily: 'main',
                }}>
                    Co-Founder
                </Typography>
                </Paper>
            </Grid>

            <Grid item xs={6} sm={3} md={3} lg={3} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Paper elevation={12} style={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 15,
                    paddingTop: 20,
                    borderRadius: 20
                }}>
                <img src={team3} alt="loading..."
                     style={{
                         width: '80%',
                         borderRadius: 20,
                         textAlign: 'center',
                     }}/>
                <Typography variant="h4" style={{
                    color: '#fff',
                    fontFamily: 'main',
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                   Finley
                </Typography>

                <Typography variant="h5" style={{
                    color: theme.palette.primary.contrastText,
                    fontFamily: 'main',
                }}>
                 MARKETING
                </Typography>
                </Paper>
            </Grid>

            <Grid item xs={6} sm={3} md={3} lg={3} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Paper elevation={12} style={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 15,
                    paddingTop: 20,
                    borderRadius: 20
                }}>
                <img src={sneak1} alt="loading..."
                     style={{
                         width: '80%',
                         borderRadius: 20,
                         textAlign: 'center',
                     }}/>
                <Typography variant="h4" style={{
                    color: '#fff',
                    fontFamily: 'main',
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                   Iris
                </Typography>

                <Typography variant="h5" style={{
                    color: theme.palette.primary.contrastText,
                    fontFamily: 'main',
                }}>
               
               ARTIST
                </Typography>
                </Paper>
            </Grid>

        </Grid>
    );
};

