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
  textFooter: {
    margin: "10px 0",
  },
  inputFooter: {
    padding: "15px 120px 15px 20px",
    border: 0,
    borderRadius: "50px",
    margin: "20px 0",
  },
  btnFooter: {
    padding: "15px 70px 15px",
    border: 0,
    borderRadius: "50px",
    backgroundColor: "#2091F9",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box display="flex" css={{ padding: "100px 200px", color: "white" }}>
        <Box display="flex" flexDirection="column" width="20%">
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
        </Box>
        <Box display="flex" flexDirection="column" width="20%">
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
        </Box>
        <Box display="flex" flexDirection="column" width="20%">
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
        </Box>
        <Box display="flex" flexDirection="column">
          <Box display="flex" marginTop="20px">
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
        </Box>
      </Box>
    </div>
  );
}
