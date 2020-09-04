import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: "url(/Gradient.png)",
    backgroundSize: "cover",
    zIndex: "2",
    color: "white",
  },
  btnHome: {
    marginTop: "50px",
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "30px",
    color: "#2091F9",
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" style={{ paddingTop: "200px" }}>
        <Box>
          <Typography variant="h6">At your fingertips</Typography>
        </Box>
        <Box p={1}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            Lightning fast prototyping{" "}
          </Typography>
        </Box>
        <Box p={1}>
          <Typography variant="caption">
            Most calendars are designed for teams. Slate is designed <br /> for
            freelancers
          </Typography>
        </Box>
        <Box p={1}>
          <Button className={classes.btnHome}>Try For Free</Button>
        </Box>
        <Box style={{ marginTop: "100px" }}>
          <img src="/macbook.png" width="800px" />
        </Box>
      </Box>
    </div>
  );
}
