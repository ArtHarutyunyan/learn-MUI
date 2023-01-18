import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },

          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: "body3" },

          style: { frontSize: 9 },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP501/0757c8e8b0dc4bd8b267bebc1f817537_ful.jpg"
        ></img>
      </Paper>
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          2023 LEXUS IS 300
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          marginTop={3}
        >
          <Rating
            name="read-only"
            value={4.5}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body3" component="p" marginLeft={1.5}>
            (655 reviews)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" marginTop={0}>
            Odometer: 9,095 mi (ACTUAL)
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default TourCard;
