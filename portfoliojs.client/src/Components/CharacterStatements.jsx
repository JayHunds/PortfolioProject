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
  marginTop: theme.spacing(2),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', marginTop: 65 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>JavaScript empowers developers to dynamically adjust margins on web pages, 
            ensuring precise control over layout and spacing. By targeting specific elements and modifying their CSS properties, 
            responsive designs adapt seamlessly to varying screen sizes and user interactions. 
            This flexibility enhances the overall aesthetics and usability of websites, optimizing the browsing experience for all users.
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>JavaScript empowers developers to dynamically adjust margins on web pages, 
            ensuring precise control over layout and spacing. By targeting specific elements and modifying their CSS properties, 
            responsive designs adapt seamlessly to varying screen sizes and user interactions. 
            This flexibility enhances the overall aesthetics and usability of websites, optimizing the browsing experience for all users.</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}