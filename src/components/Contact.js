import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CssBaseline,
  Box,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
  },
  input: {
    margin: "10px",
    borderRadius: "50px",
    backgroundColor: "#dbd9d9",
    padding: "15px",
    width: "90%",
    border: 0,
  },
  msg: {
    margin: "10px",
    borderRadius: "10px",
    backgroundColor: "#c9c9c9",
    padding: "15px",
    width: "90%",
    border: 0,
    paddingBottom: "80px",
  },
  btnContact: {
    padding: "10px 40px",
    backgroundColor: "#2091F9",
    borderRadius: "50px",
    color: "white",
    marginTop: "10px",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" css={{ padding: "100px" }}>
        <Box textAlign="center" p={1}>
          <Box p={1} style={{ color: "white" }}>
            <Typography variant="h3">Contact</Typography>
            <Typography variant="caption">
              Most calendars are designed for teams. <br />
              Slate is designed for freelancers
            </Typography>
          </Box>
          <Box my={10} display="flex" justifyContent="center">
            <img src="/contact/twt.png" style={{ margin: "20px" }} />
            <img src="/contact/fb.png" style={{ margin: "20px" }} />
            <img src="/contact/in.png" style={{ margin: "20px" }} />
          </Box>
          <Box>
            <img src="/contact/map.png" />
          </Box>
          <Box my={10} display="flex" justifyContent="center">
            <Box
              mx={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <center>
                <img
                  src="/contact/loc.png"
                  style={{
                    margin: "20px",
                  }}
                />
              </center>
              <Typography variant="caption" style={{ color: "white" }}>
                6386 Spring St undefined Anchorage, <br /> Georgia 12473 United
                States
              </Typography>
            </Box>
            <Box
              mx={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <center>
                <img
                  src="/contact/phone.png"
                  style={{
                    margin: "20px",
                  }}
                />
              </center>
              <Typography variant="caption" style={{ color: "white" }}>
                (843) 555-0130
              </Typography>
            </Box>
            <Box
              mx={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <center>
                <img
                  src="/contact/message.png"
                  style={{
                    margin: "20px",
                  }}
                />
              </center>
              <Typography variant="caption" style={{ color: "white" }}>
                willie.jennings@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <CardContent className={classes.card}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              marginTop="80px"
            >
              <input className={classes.input} placeholder="Your Name" />
              <input className={classes.input} placeholder="Your Email" />
              <input className={classes.msg} placeholder="message" />
            </Box>
            <Box display="flex" justifyContent="flex-start" mx={5} my={2}>
              <Button className={classes.btnContact}>Send</Button>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </div>
  );
}
