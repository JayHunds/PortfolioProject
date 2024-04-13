import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize:18,
  marginTop: theme.spacing(1),
  backgroundColor: 'lightGray'
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '90%', marginTop: 3, marginLeft: 11, marginRight: 1}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <iframe 
            src="https://google.drive/your-video-path" 
            width="100%"
            height="353"
            frameborder="0" 
            allowfullscreen
        />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>In the Craftoria project, various namespaces encapsulate distinct functionalities to enrich the gaming experience. For instance, the CombatSystem namespace likely includes methods beyond those showcased, such as engaging in combat with other adversaries besides goblins and bandits, each encounter offering unique challenges and rewards. Similarly, the Dungeons namespace likely encompasses more than just dungeon exploration, possibly featuring methods for generating randomized dungeon layouts, spawning enemies based on player level, and implementing boss battles for added excitement. Additionally, the Ruins namespace likely extends beyond merely exploring ruins, potentially incorporating features like puzzle-solving mechanics, interactive environmental elements, and encounters with ancient guardians. These assumptions suggest a comprehensive game structure where players engage in diverse activities, face various</Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
            <iframe 
            src="https://google.drive/your-video-path" 
            width="100%"
            height="353"
            frameborder="0" 
            allowfullscreen
        />
          </Item> 
        </Grid>
        <Grid item xs={6}>
          <Item>In the LoggingKata namespace of the project, the Program class serves as the main entry point. It starts by initializing a logging instance to keep track of the program's activities. Then, it reads data from a CSV file named "TacoBell-US-AL.csv," storing each line for further processing.Using a TacoParser instance, the program converts each line from the CSV file into TacoBell locations. It logs the start and completion of this parsing process. Moving forward, the program iterates through each location to determine the pair of locations with the maximum distance between them.
          During this iteration, it calculates the distance between each pair of locations using their geographic coordinates, leveraging the GeoCoordinate class. The program keeps track of the maximum distance encountered along with the corresponding pair of locations. Finally, it displays the names of the two locations with the maximum distance between them. This program showcases a key feature of the project's functionality, demonstrating its ability to analyze geographic data effectively.</Item>
        </Grid>
        <Grid item xs={6}>
    <Item>
        <iframe 
            src="https://google.drive/your-video-path" 
            width="100%"
            height="353"
            frameborder="0" 
            allowfullscreen
        />
    </Item>
</Grid> 
        <Grid item xs={6}>
          <Item>In the DinoBattle namespace, the Game class orchestrates the gameplay, managing various aspects of the dinosaur adventure game. The Start method initializes the game, prompting the player to enter their name and setting up the initial game state, including the player, dinosaurs, and found items. Exploration begins as the Explore method allows the player to navigate the environment, encountering dinosaurs or finding items along the way. Depending on the player's choices and random events, they may befriend dinosaurs or face challenges during exploration. The game progresses until the player either befriends all dinosaurs and faces the final boss, the Indominus Rex, or is defeated by the dinosaurs. The BefriendDinosaur method handles encounters with dinosaurs, offering opportunities to befriend them or engage in combat. Similarly, the FindItem method simulates finding items during exploration, which can aid the player in various ways. The Fight method simulates the final battle against the dinosaurs, determining the game's outcome based on the player's survival and success in defeating all opponents. Overall, the Game class provides a comprehensive and engaging gaming experience, filled with exploration, interaction, and strategic decision-making.</Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
        <iframe 
            src="https://www.youtube.com/watch?v=70o9Mm5cw4A" 
            width="100%"
            height="353"
            frameborder="0" 
            allowfullscreen
        />
    </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>In the WordleApp namespace, the GamePlayLoop class takes charge of managing the gameplay loop for the Wordle game. Upon initialization, the constructor sets up the necessary components for gameplay. The ExecuteGame method orchestrates the main game loop, where players attempt to guess a secret word chosen from a predefined list. The method initializes variables such as the word list, maximum attempts allowed, and current attempt count. It also creates instances of WordSelector and FeedBackGenerator to handle word selection and feedback generation, respectively. Within the loop, the game prompts the player to enter their guesses and validates them against the secret word. If the guess is correct, the loop breaks, ending the game. Otherwise, feedback is generated based on the guess, and the loop continues until the player either guesses the word correctly or exhausts all attempts. Finally, the method displays a failure message if the player couldn't guess the word within the allotted attempts. This class encapsulates the core gameplay mechanics of the Wordle game.</Item>
        </Grid>
      </Grid>
    </Box>
  );
}