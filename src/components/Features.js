import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  features: {
    padding: "500px 50px 100px",
    width: "100%",
    position: "absolute",
    top: 570,
    backgroundColor: "#252B42",
    backgroundSize: "cover",
    zIndex: "1",
    color: "white",
  },
}));

export default function Features() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.features}>
        <Grid item xs={12} align="center">
          <Typography variant="subtitle1">At your fingertips</Typography>
          <Typography variant="h3" style={{ margin: "20px 0" }}>
            Features{" "}
          </Typography>
          <Typography variant="caption">
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img src="/browser.png" width="90%" />
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginTop: "100px" }}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <img src="/icon-features.png" width="50px" height="45px" />
            <Typography variant="h6" style={{ margin: "8px 10px 10px" }}>
              At your fingertips
            </Typography>
          </Grid>
          <Typography variant="caption">
            Slate helps you see how many more days you need to work to reach
            your financial goal.{" "}
          </Typography>
          <Grid item xs={12} style={{ display: "flex", marginTop: "30px" }}>
            <img src="/icon-features.png" width="50px" height="45px" />
            <Typography variant="h6" style={{ margin: "8px 10px 10px" }}>
              At your fingertips
            </Typography>
          </Grid>
          <Typography variant="caption">
            Slate helps you see how many more days you need to work to reach
            your financial goal.{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
