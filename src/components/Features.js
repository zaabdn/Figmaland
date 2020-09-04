import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    width: "100%",
    position: "absolute",
    top: "600px",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
    zIndex: "1",
  },
  btnHome: {
    marginTop: "50px",
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "30px",
    color: "#2091F9",
  },
  btnBuy: {
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "50px",
    color: "#2091F9",
    marginRight: "10px",
  },
  btnTry: {
    padding: "10px 20px",
    borderRadius: "50px",
    color: "white",
    border: "1px solid white",
  },
}));

export default function Features() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box
        textAlign="center"
        m={1}
        p={1}
        css={{ paddingTop: "200px", marginTop: "350px" }}
      >
        <Box p={1}>
          <Typography variant="subtitle1" style={{ color: "white" }}>
            At your fingertips
          </Typography>
        </Box>
        <Box p={1}>
          <Typography variant="h3" style={{ color: "white" }}>
            Features{" "}
          </Typography>
        </Box>
        <Box p={1}>
          <Typography variant="caption" style={{ color: "white" }}>
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </Typography>
        </Box>
        <Box display="flex">
          <Box>
            <img src="/browser.png" width="900px" />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column">
              <Box display="flex" style={{ marginTop: "150px" }}>
                <img src="/icon-features.png" width="50px" height="45px" />
                <Typography
                  variant="h6"
                  style={{ color: "white", margin: "8px 10px" }}
                >
                  At your fingertips
                </Typography>
              </Box>
              <Box textAlign="left" width="70%" my={1}>
                <Typography variant="caption" style={{ color: "white" }}>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.{" "}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box display="flex" style={{ marginTop: "50px" }}>
                <img src="/icon-features.png" width="50px" height="45px" />
                <Typography
                  variant="h6"
                  style={{ color: "white", margin: "8px 10px" }}
                >
                  At your fingertips
                </Typography>
              </Box>
              <Box textAlign="left" width="70%" my={1}>
                <Typography variant="caption" style={{ color: "white" }}>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
