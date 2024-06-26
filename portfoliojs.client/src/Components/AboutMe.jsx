import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={20}>
          {[0, 1, 2].map((value) => (
           <Grid sx={{marginTop: 3}} key={value} item>
              <Paper
                sx={{
                  height: 600,
                  width: 400,
                 backgroundColor: 'lightgray'
                  
                }}
              >
               {
                  value === 0 ? <img src="" alt="Deez" /> : value === 1 ? <img src="/path/to/are.jpg" alt="Are" /> : <img src="/path/to/examples.jpg" alt="Examples" />
               }
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}