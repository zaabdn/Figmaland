import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    top: 0,
    width: "100%",
    backgroundImage: "url(/Gradient.png)",
    position: "fixed",
    zIndex: "3",
  },
  input: {
    border: 0,
    padding: "15px",
    borderRadius: "25px",
    color: "black",
    margin: "10px",
  },
  menu: {
    margin: "20px 40px",
    maxWidth: "50%",
  },
  submenu: {
    margin: "0 15px",
    color: "white",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box
        p={2}
        display="flex"
        flexWrap="nowrap"
        css={{
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box justifyContent="center">
          <img src="/figmaland.png" />
        </Box>
        <Box className={classes.menu} display="flex" flexWrap="nowrap">
          <Box justifyContent="center" className={classes.submenu}>
            <Typography>Home</Typography>
          </Box>
          <Box justifyContent="center" className={classes.submenu}>
            <Typography>Product</Typography>
          </Box>
          <Box justifyContent="center" className={classes.submenu}>
            <Typography>Pricing</Typography>
          </Box>
          <Box justifyContent="center" className={classes.submenu}>
            <Typography>About</Typography>
          </Box>
          <Box justifyContent="center" className={classes.submenu}>
            <Typography>Contact</Typography>
          </Box>
        </Box>
        <Box justifyContent="center">
          <input
            type="text"
            className={classes.input}
            placeholder="Your Email"
          />
        </Box>
        <Box justifyContent="center">
          <Button
            style={{
              padding: "10px 20px",
              margin: "10px",
              background: "white",
              color: "#2091F9",
              borderRadius: "25px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </div>
  );
}
