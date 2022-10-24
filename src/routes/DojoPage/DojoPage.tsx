import { Fade, Grid, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import dojoRight from "../../img/dojoRight.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import team1 from "../../img/team1.png";
import team2 from "../../img/team2.png";
import team3 from "../../img/team3.png";

interface ToggleButtonProps {
  title: string;
  state: number;
  current: number;
  setState: (state: number) => void;
}

interface TeamMemberCard {
  index: number;
  name: string;
  link: string;
  img: string;
  setMember: (currentMember: number) => void;
  isHovered: (flag: boolean) => void;
}

const AboutBlock = () => {
  const theme = useTheme();
  return (
    <div style={{ marginTop: 50 }}>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: "black",
          marginBottom: 20,
        }}
      >
        Our journey begins with a collection of 2000{" "}
        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          Amai Aki
        </Typography>{" "}
        NFTs. This is just a begining of a huge Anime and Manga metaverse for
        our community in Web3. A metaverse you will discover wirh us through
        storytelling, following Japanese culture, and taking part in our own
        company -{" "}
        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          Amai Aki
        </Typography>
        .
      </Typography>

      <Typography
        variant="h5"
        style={{ fontFamily: "Main", fontWeight: "bold", color: "black" }}
      >
        As a part of ecosystem, we have developed the{" "}
        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          $AMA
        </Typography>{" "}
        token. You can earn it by staking{" "}
        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          Amai Aki
        </Typography>{" "}
        NFT. By earning a token, you will be able to purchase Manga, Artbooks,
        Merch and participate in the Alpha life of the project.
      </Typography>
    </div>
  );
};

const UtilityBlock = () => {
const theme = useTheme();


  return (
    <div style={{ marginTop: 50 }}>
       <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Paying for the goods in 
 
 <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          {` Amai Aki `}
        </Typography>
        Online Store entirely for
        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          {` $AMA `}
        </Typography>
        </Typography>

        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Opportunity to contribute in future products and share profits   

        </Typography>

        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Early access for manga, anime and other 
 
 <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          {` Amai Aki `}
        </Typography>
        products
      
        </Typography>

        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Exclusive AMA sessions with our artists and writers 

        </Typography>

        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Participation in the social life of the project

        </Typography>

        <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 20
          }}
        >
          • Real life actions for 
 
 <Typography
          variant="h5"
          style={{
            fontFamily: "Main",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            display: "inline",
          }}
        >
          {` Amai Aki `}
        </Typography>
        community
      
        </Typography>

      </div>
  )
}

const TeamBlock = () => {
  const theme = useTheme();
  const [memberSelected, setMemberSelected] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const members = [
    "",
    "Denis is the greatest team member you have ever seen. He is true heart of our team. We are so glad to have such a professional in our team.",
    "Jonh is the greatest team member you have ever seen. He is true heart of our team. We are so glad in our team.",
    "Alice is the greatest team member you have ever seen. We are so glad to have such a professional in our team.",
    "Shawn is the greatest team member you have ever seen. He is true heart of our team. We are so glad to have such a professional in our team.",
    "Jordan is the greatest team member you have ever seen. He is true heart of our team. We are so glad in our team.",
    "Alex is the greatest team member you have ever seen. We are so glad to have such a professional in our team."
  ]

  return (
    <div style={{ marginTop: 50 }}>
      <Grid
        container
        spacing={4}
        style={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TeamPicture
            index={1}
            name="Denis James"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <TeamPicture
            index={2}
            name="Jonh Doe"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <TeamPicture
            index={3}
            name="Alice Frauh"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>

         <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '5%'
          }}
        >
          <TeamPicture
            index={4}
            name="Shawn Bell"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '5%'
          }}
        >
         <TeamPicture
            index={5}
            name="Jordan Bellfast"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '5%'
          }}
        >
         <TeamPicture
            index={6}
            name="Alex Deuch"
            link="https://twitter.com/CozyTown_"
            img={team1}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>
      </Grid>

  <Fade in={isHover} timeout={500}>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: "black",
          marginTop: 20,
        }}
      >
          <Typography
        variant="h5"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: theme.palette.primary.contrastText,
          display: "inline",
        }}
      >

{members[memberSelected].split(" ")[0]}
      </Typography>
       {` ${members[memberSelected].split(" ").slice(1).join(" ")}`}
      </Typography>
      </Fade>
    </div>
  );
};

const TeamPicture = ({ index, name, link, img, setMember, isHovered }: TeamMemberCard) => {
  const [hover, setHover] = useState(false);

  const mouseOnHandler = () => {
    setHover(true);
    setMember(index);
    isHovered(true);
  };

  const mouseOverHandler = () => {
    setHover(false);
    isHovered(false);
  };

  const onHover = {
    filter: "brightness(50%)",
    transition: "all 0.3s ease-in-out",
  };

  const IconOnHover = {
    color: "#fff",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div
      onMouseEnter={() => {
        mouseOnHandler();
      }}
      onMouseLeave={() => {
        mouseOverHandler();
      }}
      style={{
        position: "relative",
        width: "80%",
      }}
    >
      <img
        src={img}
        style={{
          width: "100%",
          margin: 0,
          borderRadius: 15,
          boxShadow: "rgb(0 0 0 / 30%) 5px 5px 10px",
          ...(hover ? onHover : null),
        }}
      />

      <FaTwitter
        style={{
          fontSize: 35,
          cursor: "pointer",
          color: "transparent",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          top: "30%",
          ...(hover ? IconOnHover : null),
        }}
        onClick={() => window.open(link, "_blank")}
      />

      <Typography
        variant="h5"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: "transparent",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          top: "50%",
          ...(hover ? IconOnHover : null),
        }}
      >
        {name}
      </Typography>
    </div>
  );
};

const ToggleButton = ({
  title,
  state,
  setState,
  current,
}: ToggleButtonProps) => {
  return (
    <Paper
      elevation={8}
      onClick={() => setState(state)}
      style={{
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: current === state ? "black" : "#fff",
        cursor: "pointer",
      }}
      sx={{
        "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
        transition: "transform 0.25s ease-in-out",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontFamily: "Main",
          fontWeight: "bold",
          color: current === state ? "#fff" : "black",
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

export const DojoPage = () => {
  const theme = useTheme();
  const [dojoState, setDojoState] = useState(0);

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
            }}
          >
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
              <ToggleButton
                title="ABOUT"
                state={0}
                setState={setDojoState}
                current={dojoState}
              />
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
              <ToggleButton
                title="UTILITY"
                state={1}
                setState={setDojoState}
                current={dojoState}
              />
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
              <ToggleButton
                title="TEAM"
                state={2}
                setState={setDojoState}
                current={dojoState}
              />
            </Grid>
          </Grid>

          {dojoState === 0 ? <AboutBlock /> : dojoState > 1 ? <TeamBlock /> : <UtilityBlock/>}

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
          <img
            src={dojoRight}
            style={{ width: "40%", position: "absolute", top: 65, right: 0 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
