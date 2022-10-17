import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";


interface ToggleButtonProps {
    title: string;
    state: number;
    current: number;
    setState: (state: number) => void;
}

const ToggleButton = ({title, state, setState, current}: ToggleButtonProps) => {

    return (
        <Paper elevation={8} onClick={() => setState(state)} style={{
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: current === state ? 'black' : '#fff',
            cursor: 'pointer',
        }}
        
        sx={{ "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
        transition: "transform 0.25s ease-in-out",}}>
            <Typography variant="h4" style={{fontFamily: 'Main', fontWeight: 'bold', 
            color: current === state ? '#fff' : 'black'}}>
                    {title}
                </Typography>
        </Paper> 
    )
}

export const DojoPage = () => {
    const [dojoState, setDojoState] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: window.innerWidth,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 150,
      }}
    >
      <Grid
        container
        style={{
          width: "95%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{
            width: "100%",
          }}
        >
            <Grid
        container
        spacing={4}
        style={{
          width: "100%",
        }}>

      <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      style={{
        width: "100%",
      }} 
    >
       <ToggleButton title="ABOUT" state={0} setState={setDojoState} current={dojoState} />
        </Grid>

        <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      style={{
        width: "100%",
      }} 
    >
       <ToggleButton title="UTILITY" state={1} setState={setDojoState} current={dojoState} />
        </Grid>

        <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      style={{
        width: "100%",
      }} 
    >
       <ToggleButton title="TEAM" state={2} setState={setDojoState} current={dojoState} />
        </Grid>

        </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{
            width: "100%",
          }}
        >
          <h2>132</h2>
        </Grid>
      </Grid>
    </div>
  );
};
