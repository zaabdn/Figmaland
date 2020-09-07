import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  price: {
    padding: "100px 250px",
    position: "relative",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#2091F9",
    marginTop: "30px",
    borderRadius: "50px",
    color: "white",
  },
  pricing: {
    padding: "0 100px 0 0",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  textPrice: {
    padding: "0 0px 0 150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      padding: 0,
    },
  },
}));

export default function Price() {
  const classes = useStyles();
  const hpScreen = useMediaQuery("(max-width:600px)");
  const tabletScreen = useMediaQuery("(max-width:1000px)");

  return (
    <>
      <Grid container className={classes.price}>
        <Grid item xs={12} sm={6} className={classes.pricing}>
          <Typography variant="h2">
            <b>Pricing</b>
          </Typography>
          <Typography variant="caption">
            Slate helps you see how many more days you need
            <br /> to work to reach your financial goal for the month
            <br /> and year.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textPrice}>
          <Typography variant="caption">30 - DAYS FREE TRIAL</Typography>
          <Typography variant="h2">
            <b>$10</b>
            <Typography variant="caption" style={{ margin: "25px 10px" }}>
              / Month per User
            </Typography>
          </Typography>
          <Typography variant="caption">
            Most calendars are designed
            <br /> for teams.
          </Typography>
          <br />
          <Button className={classes.btn}>Get Started</Button>
        </Grid>
      </Grid>
    </>
  );
}
