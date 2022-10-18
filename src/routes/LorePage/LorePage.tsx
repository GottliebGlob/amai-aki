import { Grid, Typography, useTheme } from "@mui/material";
import lore from "../../img/loreLeft.png";


export const LorePage = () => {
const theme = useTheme()

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: window.innerWidth,
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
          sm={5}
          md={5}
          lg={5}
          style={{
            width: "100%",
          }}
        >
            <Typography
            variant="h2"
            style={{ fontFamily: "Main", fontWeight: "bold", color: theme.palette.primary.contrastText, position: 'fixed'}}
          >
            Lore
          </Typography>

            <img src={lore} style={{
                width: '20%',
                position: 'fixed',
                top: '25%',
                left: '12%'
                }} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={7}
          style={{
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black" }}
          >
            What could be better than a summer holiday on the beach? Obviously a
            summer holiday on the beach with lovely girls. Now we want to tell
            you a little about the lore of our future manga. Of course, this may
            have minor changes, but we see a clear plot line that we will cover
            for you in this story. Get ready to hear a wonderful story about
            sweet girls decided to spend their summer holidays on the golden
            coast of Maizuru city.
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black", marginTop: 20 }}
          >
            The plot takes place in the small town of Ayabe, which is famous for
            its dense forests and small mountain hills, castle parks and
            Buddhist temples, as well as the deep Yura River – a perfect place
            for beach picnics. In the city center, a peaceful and slightly lazy
            life thrives. This is a delightful place to spend a quiet and
            peaceful life, but is this a dream of a young girl? Hmm... if you
            are full of ambition and energy, then this life is not for you. I'm
            sure you've already got into the spirit and aesthetic of our
            upcoming manga, it's time for you to learn a little more about how
            one day turned the lives of several girls at once.
          </Typography>

          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black", marginTop: 20 }}
          >
            It was an ordinary summer day, it was hot as hell outside, and the
            daily routine dragged our main characters into its abyss. The time
            for studying is long gone, so it's time to think of something to do
            for this summer vacation. There were many different ideas: go hiking
            and tell scary stories all night, go on a beach picnic near the
            river, walk for the hundredth time in the park and look at ancient
            Buddhist temples, gather for an overnight stay with friends, or
            maybe just sleep all day and wait for the start school year?
          </Typography>

          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black", marginTop: 20 }}
          >
            But all this was already in the past and the year before last, it's
            time to come up with something fresh. Suddenly, an excellent idea
            appeared, how to spend these summer holidays on the shores of the
            sea. All the girls loved the idea and began to prepare for the beach
            trip. The main thing is not to forget the swimwear. It remains only
            to decide where to go. One of the girls remembered that she has a
            brother in the town of Maizuru. There are just excellent golden
            beaches and a warm sea where you can spend the whole day. Without
            thinking twice, the girls said at once: ''Done!! We will spend this
            summer vacation in Maizuru and enjoy beach holiday.''
          </Typography>

          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black", marginTop: 20 }}
          >
            The night after taking such an important decision was the longest
            one. No one can sleep and the girls chatted all night to come up
            with as many interesting activities as possible for this epic
            vacation. Finally, the night passed and it was time to get ready for
            the journey. It took several hours, but was undoubtedly worth it.
            When the girls arrived in the town of Maizuru and saw how beautiful
            it was, they immediately realized that this would be literally the
            best vacation of their lives.
          </Typography>

          <Typography
            variant="h5"
            style={{ fontFamily: "Main", fontWeight: "bold", color: "black", marginTop: 20 }}
          >
            This is only the beginning of our highlights. Just a small retelling
            of the first steps of the girls, the names and personalities of each
            one will be revealed in the manga itself. You will definitely feel
            the atmosphere and enjoy this journey along with the characters. And
            now we need to be patient and be ready for anything, because we are
            waiting for ''Great holidays''.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
