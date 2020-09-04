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
    padding: "20px 50px",
    textAlign: "center",
    justifyContent: "center",
    width: "25%",
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
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" css={{ padding: "100px" }}>
        <Box textAlign="center" p={1}>
          <Box p={1}>
            <Typography variant="h3" style={{ color: "white" }}>
              Testimonials
            </Typography>
          </Box>
          <Box
            my={10}
            mx={0}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            {testimonials.map((testi) => (
              <CardContent className={classes.card} key={testi.id}>
                <img src={testi.img} />
                <Typography
                  color="textSecondary"
                  style={{ width: "150px", margin: "10px" }}
                >
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </Typography>
                <img src="/stars.png" />
                <Typography variant="body2">Regina Miles</Typography>
                <Typography variant="caption">Designer</Typography>
              </CardContent>
            ))}
          </Box>
          <Box>
            <Button className={classes.btnTesti}>More Testimonials</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
