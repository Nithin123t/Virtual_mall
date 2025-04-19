import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const gamesList = [
  { name: "Ludo With Friends", url: "https://www.gamezop.com/g/LudoWithFriends" },
  { name: "Rampage Racer", url: "https://www.gamezop.com/g/RampageRacer" },
  { name: "Fruit Chop", url: "https://www.gamezop.com/g/FruitChop" },
  { name: "Bubble Wipeout", url: "https://www.gamezop.com/g/BubbleWipeout" },
  { name: "Yohoho.io", url: "https://kevin.games/yohoho-io" },
  { name: "StabFish.io", url: "https://kevin.games/stabfish-io" },
  { name: "Bloxd.io", url: "https://kevin.games/bloxd-io" },
  { name: "Krunker.io", url: "https://kevin.games/krunker-io" },
  { name: "Basketball Stars", url: "https://poki.com/en/g/basketball-stars" },
  { name: "Tunnel Rush", url: "https://poki.com/en/g/tunnel-rush" },
];

const Games = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
        🎮 Play Fun Mini-Games
      </Typography>
      <Grid container spacing={3}>
        {gamesList.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{game.name}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }} href={game.url} target="_blank">
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Games;
