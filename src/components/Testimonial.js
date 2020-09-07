import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  testi: {
    padding: "100px 50px",
    width: "100%",
    position: "relative",
    backgroundColor: "#252B42",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px 50px",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    margin: "0 20px 40px",
  },
  btnTesti: {
    padding: "15px 20px",
    backgroundColor: "#2091F9",
    borderRadius: "50px",
    color: "white",
  },
}));

const testimonials = [
  {
    id: 1,
    img: "/testi1.png",
  },
  {
    id: 2,
    img: "/testi2.png",
  },
  {
    id: 3,
    img: "/testi3.png",
  },
  {
    id: 4,
    img: "/testi4.png",
  },
  {
    id: 5,
    img: "/testi5.png",
  },
  {
    id: 6,
    img: "/testi6.png",
  },
];

export default function Testimonial() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.testi}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Testimonials
          </Typography>
        </Grid>
        {testimonials.map((testi) => (
          <Grid item xs={6} sm={3} className={classes.card} key={testi.id}>
            <img src={testi.img} />
            <Typography
              color="textSecondary"
              style={{ width: "150px", margin: "10px" }}
            >
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </Typography>
            <img src="/stars.png" />
            <Typography variant="body2">Regina Miles</Typography>
            <Typography variant="caption">Designer</Typography>
          </Grid>
        ))}
        <Grid item xs={12} align="center">
          <Button className={classes.btnTesti}>More Testimonials</Button>
        </Grid>
      </Grid>
    </>
  );
}
