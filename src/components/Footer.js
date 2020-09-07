import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "50px 200px",
    position: "relative",
    backgroundColor: "#252B42",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  partFooter: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "30px",
    },
  },
  textFooter: {
    margin: "10px 0",
  },
  sosmed: {
    display: "flex",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  inputFooter: {
    padding: "15px 100px 15px 20px",
    border: 0,
    borderRadius: "50px",
    margin: "20px 0",
  },
  btnFooter: {
    padding: "10px 105px",
    border: 0,
    borderRadius: "50px",
    backgroundColor: "#2091F9",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.footer} align="left">
        <Grid item xs={6} sm={3} className={classes.partFooter}>
          <Typography variant="subtitle1" className={classes.textFooter}>
            <b>Pages</b>
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Home
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Product
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Price
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            About
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Contact
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.partFooter}>
          <Typography variant="subtitle1" className={classes.textFooter}>
            <b>Tomothy </b>
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Eleanor Edwards
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Ted Robertson
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Annette Russell
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Jennie Mckinney
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Gloria Richards
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.partFooter}>
          <Typography variant="subtitle1" className={classes.textFooter}>
            <b>Jane Black</b>
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Philip Jones
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Product
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Colleen Russell
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Marvin Hawkins
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Bruce Simmmons
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.partFooter}>
          <Box className={classes.sosmed}>
            <img src="/contact/twt-white.png" />
            <img src="/contact/fb-white.png" style={{ margin: "0 50px" }} />
            <img src="/contact/in-white.png" />
          </Box>
          <Typography variant="body2" style={{ margin: "30px 0 10px 0" }}>
            <b>Subscribe to our Newsletter</b>
          </Typography>
          <Typography variant="body2">
            Available exclusivery on Figmaland
          </Typography>
          <input className={classes.inputFooter} placeholder="Your Email" />
          <Button className={classes.btnFooter}>Subscribe</Button>
        </Grid>
      </Grid>
    </>
  );
}
