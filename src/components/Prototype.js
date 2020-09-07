import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  prototype: {
    padding: "100px 50px",
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    color: "white",
    marginTop: "700px",
  },
  input: {
    padding: "15px 20px",
    border: "0",
    borderRadius: "50px",
    backgroundColor: "white",
    color: "#18171D",
    marginRight: "10px",
  },
  btnTry: {
    padding: "10px 20px",
    borderRadius: "50px",
    color: "white",
    border: "1px solid white",
  },
}));

function FeaturesSubscribe() {
  const classes = useStyles();
  return (
    <div style={{ padding: "100px 0 0", display: "flex" }}>
      <Grid item xs={12} sm={6}>
        <img src="/prototype.png" width="600px" />
      </Grid>
      <Grid item xs={12} sm={6} style={{ margin: "100px" }}>
        <Typography variant="subtitle1">At your fingertips</Typography>
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Lightning fast prototyping
        </Typography>
        <Typography variant="subtitle1">
          <b>Subscribe to our Newsletter</b>
        </Typography>
        <Typography variant="caption">
          Available exclusivery on Figmaland
        </Typography>
        <Grid style={{ marginTop: "20px" }}>
          <input className={classes.input} placeholder="Your Email" />
          <Button
            style={{
              padding: "10px 15px",
              border: "0",
              borderRadius: "50px",
              backgroundColor: "#2091F9",
              color: "white",
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default function Features() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.prototype}>
        <Grid item xs={12} align="center">
          <Typography variant="subtitle1">At your fingertips</Typography>
          <Typography variant="h3" style={{ margin: "10px" }}>
            Lightning fast prototyping{" "}
          </Typography>
          <Typography variant="caption">
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </Typography>
          <Grid style={{ margin: "70px" }}>
            <Button
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                borderRadius: "50px",
                color: "#2091F9",
                marginRight: "10px",
              }}
            >
              Buy Now
            </Button>
            <Button className={classes.btnTry}>Try For Free</Button>
          </Grid>
        </Grid>
        <FeaturesSubscribe />
      </Grid>
    </>
  );
}
