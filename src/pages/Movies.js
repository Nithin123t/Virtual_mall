import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const movieList = [
  { name: "Rekhachithram(Screen-1)", trailer: "qm23CukXzKQ" },
  { name: "Chhaava(Screen-2)", trailer: "DJohyFmST08" },
  { name: "Sankranthiki Vasthunam(Screen-3)", trailer: "yCkl2Z3PBs0" },
  { name: "Game Changer(Screen-1)", trailer: "zHiKFSBO_JE" },
  { name: "Sky Force (Screen-2)", trailer: "PKsVB1wPZ78" },
  { name: "Sikandar(Screen-3)", trailer: "RouIzAuPGGU" },
  { name: "Dragon(Screen-1)", trailer: "m1i-sYxTX8I" },
  { name: "Daaku Maharaaj(Screen-2)", trailer: "fNDRSver0uM" },
  { name: "Thandel(Screen-3)", trailer: "6jBEzTbanUc" },
  { name: "Court - State vs a Nobody *(Screen-1)", trailer: "urrUjvUFhxE" },
];

const Movies = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
        🎬 Now Showing in Virtual Mall
      </Typography>
      <Grid container spacing={3}>
        {movieList.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${movie.trailer}`}
                title={movie.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CardContent>
                <Typography variant="h6">{movie.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
