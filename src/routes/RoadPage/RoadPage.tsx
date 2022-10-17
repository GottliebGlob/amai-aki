import { Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

interface RoadComponentProps {
  number: string;
  steps: string[];
}

const firstStep = [
  "• Creation of Amai Aki",
  "• Creation of project lore",
  "• Preparing to Launch and first Partnerships",
  "• Building strong relationships with the ecosystem",
  "• Creation an $AMA token for Amai Aki Online Store",
];

const secondStep = [
  "• Amai Aki Online Store development",
  "• First sneak peeks of manga",
  "• Full project show-off",
  "• Preparations to upcoming mint",
  "• Mint day",
];

const thirdStep = [
  "• $AMA token staking platform launch",
  "• Amai Aki NFT holders DAO initiation",
  "• Announcement of the first volume of the Manga",
  "• Organization of real life actions for the Amai Aki holders",
  "• Gifts of various paraphernalia and clothes of the Amai Aki Online Store",
];

const fourStep = [
  "• Search for an influencers for collabs with Amai Aki DAO",
  "• Drawing of two tickets for a unique trip to Japan",
  "• Online store official opening",
  "• Amai Aki anime teaser",
  "• RoadMap V.2 development",
];

const RoadComponent = ({ number, steps }: RoadComponentProps) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={6}
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 80,
        marginTop: 0,
      }}
      sx={{
        "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
        transition: "transform 0.25s ease-in-out",
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: theme.palette.primary.contrastText,
          fontSize: 120,
        }}
      >
        {number}
      </Typography>
      <div style={{ marginLeft: 20 }}>
        {steps.map((step, index) => {
          return (
            <div style={{ marginBottom: 10 }} key={index}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Main",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {step}
              </Typography>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export const RoadPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: window.innerWidth,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginTop: 150,
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: "black",
          marginLeft: "2.5%",
          marginBottom: 40,
        }}
      >
        Amai Map
      </Typography>
      <Grid
        container
        style={{
          width: "95%",
          marginLeft: "2.5%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RoadComponent number="01" steps={firstStep} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RoadComponent number="02" steps={secondStep} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RoadComponent number="03" steps={thirdStep} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RoadComponent number="04" steps={fourStep} />
        </Grid>
      </Grid>
    </div>
  );
};
