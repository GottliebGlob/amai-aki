import { Fade, Grid, Paper, Slide, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import dojoRight from "../../img/dojoRight.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import team1 from "../../img/team1.jpg";
import team2 from "../../img/team2.png";
import team3 from "../../img/team3.png";
import team4 from "../../img/team4.png";
import team5 from "../../img/team5.png";
import team6 from "../../img/team6.png";

import isMobile from "../../components/isMobile";

interface ToggleButtonProps {
  title: string;
  state: number;
  current: number;
  setState: (state: number) => void;
}

interface TeamMemberCard {
  index: number;
  name: string;
  link?: string;
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
  const mobile = isMobile();
  const [memberSelected, setMemberSelected] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const members = [
    "Seed is the ideological mastermind and leader of the Amai Aki team. He is already more than 3 years in the NFT universe, developing in this area and following the latest news. Before launching Amai Aki worked as a Barista and as a Discord Server Administrator on various projects. Every day he shares a part of himself to our project and the manga behind it. For all the manga stuff you have to thank him.",
    "Tol is a core of our marketing. His aim is to make the whole NFT world know about Amai Aki. You can contact him on twitter 24/7. His is a big fan of manga, and always ready to share his passion with you.",
    "DarkNess is an experiensed web3 developer from Poland, early adopter of Solana ecosystem and web3 believer. All the tech part upon his shoulders. He is also a part of the Amai Aki team since the very beginning. Have advices or just wnat to know how the thing are working? Just dm me on discord.",
    "Every artwork you see is art and her personal take on the Amai Aki Universe. She started drawing at the age of 10, now she creates masterpieces in the world of NFT. She loves anime and manga, and also the game Genshin Impact. She gets inspiration by manga reading and outdoor meditation.",
  ];

  return (
    <div
      style={{
        marginTop: 50,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        spacing={mobile ? 0 : 4}
        style={{
          width: mobile ? "80%" : "100%",
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
            width: "100%",
          }}
        >
          <TeamPicture
            index={0}
            name="Seed"
            link="https://twitter.com/_seed_nft"
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
            index={1}
            name="Tol Manson"
            link="https://twitter.com/TolManson"
            img={team2}
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
            name="DarkNess"
            img={team3}
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
            marginTop: "5%",
          }}
        >
          <TeamPicture
            index={3}
            name="Amaila"
            img={team4}
            setMember={setMemberSelected}
            isHovered={setIsHover}
          />
        </Grid>
      </Grid>

      <Fade in={isHover && !mobile} timeout={500}>
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
  const mobile = isMobile();

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
          ...(hover || mobile ? onHover : null),
          marginBottom: mobile ? 20 : 0,
        }}
      />

    { link && <FaTwitter
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
          ...(hover || mobile ? IconOnHover : null),
        }}
        onClick={() => window.open(link, "_blank")}
      />}

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
          ...(hover || mobile ? IconOnHover : null),
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
  const mobile = isMobile();

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
        margin: mobile ? 5 : 0
      }}
      sx={{
        "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
        transition: "transform 0.25s ease-in-out",
      }}
    >
      <Typography
        variant={mobile ? 'h5' : 'h4'}
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
  const mobile = isMobile();
  const [dojoState, setDojoState] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: mobile ? '100%' : window.innerWidth,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: mobile ? 90 : 150,
      }}
    >
      <Grid
        container
        style={{
          width: "95%",
        }}
      >
          <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
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
            spacing={mobile ? 0 : 4}
            style={{
              width: "100%",
            }}
          >
            <Grid
              item
              xs={4}
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
              xs={4}
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
              xs={4}
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
        </Slide>

        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          style={{
            width: "100%",
            display: mobile ? 'none' : 'block'
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
