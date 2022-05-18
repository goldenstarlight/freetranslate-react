import React from "react";
import FadeIn from 'react-fade-in';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Media1 from '../assets/images/media/logo1.jpg';
import Media2 from '../assets/images/media/logo2.jpg';
import Media3 from '../assets/images/media/logo3.jpg';
import Media5 from '../assets/images/media/video.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Media extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
              sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '93%',
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <h1>Our Media</h1>
          </Paper>
        </FadeIn>
        <Box
          sx={{
            width: '95%',
            p: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 3
          }}
        >
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button style={{ backgroundColor: '#14a800' }}>All</Button>
            <Button style={{ backgroundColor: '#14a800' }}>Images</Button>
            <Button style={{ backgroundColor: '#14a800' }}>Files</Button>
          </ButtonGroup>
          <Grid container spacing={2} className="mt-3">
            <Grid item xs={3}>
              <Item className="home-media">
                <img src={ Media1 } width="100%" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className="home-media">
                <img src={ Media2 } width="100%" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className="home-media">
                <img src={ Media3 } width="100%" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className="home-media">
                <img src={ Media5 } width="100%" />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  }
}

export default Media;