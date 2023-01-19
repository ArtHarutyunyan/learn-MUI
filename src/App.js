import logo from "./logo.svg";
import "./App.css";
import TourCard from "./components/ToutCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AppBar, Typography } from "@mui/material";
import PrimarySearchAppBar from "./components/AppBar";
import cities from "./data.json";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
