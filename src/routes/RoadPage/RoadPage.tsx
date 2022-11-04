import { Grid, Paper, Slide, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import isMobile from "../../components/isMobile";

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
  const mobile = isMobile();

  return (
    <Paper
      elevation={6}
      style={{
        width: "100%",
        borderRadius: 20,
        padding: mobile ? 5 : 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: mobile ? 20 : 40,
        marginRight: mobile ? 20 : 40,
        marginBottom: mobile ? 40 : 80,
        marginTop: 0,
      }}
      sx={{
        color: '#696969',
        "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)",  color: theme.palette.primary.contrastText },
        transition: "all 0.25s ease-in-out",
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
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
  const theme = useTheme();
  const mobile = isMobile();

  const [firstSlide, setFirstSlide] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setFirstSlide(true), 400);

      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  const [secondSlide, setSecondSlide] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setSecondSlide(true), 800);

      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  const [thirdSlide, setThirdSlide] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setThirdSlide(true), 1200);

      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return (
    <div
      style={{
        display: "flex",
        overflowX: "hidden",
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
          marginBottom: 40,
          textAlign: mobile ? 'center' : 'left',
          width: '100%',
          marginLeft: mobile ? 0 : '2.5%',
        }}
      >
        Amai Map
      </Typography>
      <Grid
        container
        style={{
          width: "100%",
        }}
      >
          <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
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
        </Slide>

        <Slide direction="left" in={firstSlide} timeout={500} mountOnEnter unmountOnExit>
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
        </Slide>

        <Slide direction="right" in={secondSlide} timeout={500} mountOnEnter unmountOnExit>
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
        </Slide>

        <Slide direction="left" in={thirdSlide} timeout={500} mountOnEnter unmountOnExit>
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
        </Slide>
      </Grid>
    </div>
  );
};
