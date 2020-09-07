import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  partners: {
    padding: "100px",
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
  },
  btnTry: {
    padding: "10px 20px",
    borderRadius: "50px",
    color: "white",
    border: "1px solid white",
  },
}));

export default function Partner() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.partners} align="center">
        <Grid item xs={12}>
          <Typography variant="h3" style={{ color: "white" }}>
            Partners
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ margin: "50px 0px" }}>
          <img src="/1.png" />
          <img src="/2.png" style={{ margin: "0 30px" }} />
          <img src="/3.png" style={{ margin: "0 30px" }} />
          <img src="/4.png" style={{ margin: "0 30px" }} />
          <img src="/5.png" style={{ margin: "0 30px" }} />
          <img src="/6.png" style={{ margin: "0 30px" }} />
          <img src="/7.png" />
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{
              padding: "10px 30px",
              backgroundColor: "#2091F9",
              color: "white",
              borderRadius: "50px",
            }}
          >
            Try For Free
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
