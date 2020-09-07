import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "100px 50px",
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
    color: "white",
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
    <>
      <Grid container align="center" className={classes.contact}>
        <Grid item xs={12}>
          <Typography variant="h3">Contact</Typography>
          <Typography variant="caption">
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src="/contact/twt.png" style={{ margin: "20px" }} />
          <img src="/contact/fb.png" style={{ margin: "20px" }} />
          <img src="/contact/in.png" style={{ margin: "20px" }} />
        </Grid>
        <Grid item xs={12}>
          <img src="/contact/map.png" />
        </Grid>
        <Grid container style={{ padding: "50px 300px" }}>
          <Grid item xs={12} sm={4}>
            <img src="/contact/loc.png" />
            <Grid>
              <Typography variant="caption">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src="/contact/phone.png" />
            <Grid style={{ marginTop: "10px" }}>
              <Typography variant="caption">(843) 555-0130</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src="/contact/message.png" />
            <Grid style={{ marginTop: "20px" }}>
              <Typography variant="caption">
                willie.jennings@example.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
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
      </Grid>
    </>
  );
}
