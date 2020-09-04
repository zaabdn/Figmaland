import { makeStyles } from "@material-ui/core/styles";
import { Typography, CssBaseline, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
  },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#2091F9",
    marginTop: "50px",
    borderRadius: "50px",
    color: "white",
  },
}));

export default function Price() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="left" css={{ padding: "100px" }} display="flex">
        <Box flexDirection="column" width="50%" px={12} color="white">
          <Typography variant="h2">
            <b>Pricing</b>
          </Typography>
          <Typography variant="caption">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </Typography>
        </Box>
        <Box
          flexDirection="column"
          width="50%"
          justifyContent="center"
          px={12}
          color="white"
        >
          <Typography variant="caption">30 - DAYS FREE TRIAL</Typography>
          <Box display="flex">
            <Typography variant="h2">
              <b>$10</b>
            </Typography>
            <Typography variant="caption" style={{ margin: "25px 10px" }}>
              / Month per User
            </Typography>
          </Box>
          <Typography variant="caption">
            Most calendars are designed
            <br /> for teams.
          </Typography>
          <br />
          <Button className={classes.btn}>Get Started</Button>
        </Box>
      </Box>
    </div>
  );
}
