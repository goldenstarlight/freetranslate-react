import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SellIcon from '@mui/icons-material/Sell';
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ReportIcon from '@mui/icons-material/Report';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box
        sx={{
          width: '100%',
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 3,
          backgroundColor: '#001e00',
          color: '#fff'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className='footer-block'>
              <h4>Keywords</h4>
              <Link to="" style={{ color: '#14a800'}}><SellIcon />Freetranslate</Link>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <h4>Opening Hours</h4>
              <div className='footer-time'>
                <p><b>Monday</b></p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Tuesday</b></p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Wednesday</b></p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Thursday</b></p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Friday</b></p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Saturday</b>	</p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
              <div className='footer-time'>
                <p><b>Sunday</b>	</p>
                <p>10:00 AM - 07:00 PM</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <h4>Where to find us</h4>
              <h6>Freetranslate</h6>
              <p>peubla Mexico</p>
              <p>Ontario, 55</p>
              <p>Cañada de Benatanduz Aragon</p>
              <p>Spain - 569457</p>
              <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Get in touch</Button>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <h4>Get the news</h4>
              <h6>Subscribe with us for latest updates</h6>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <TextField id="outlined-basic" variant="filled" />
                <Button sx={{color:'white'}}>SUBSCRIBE</Button>
              </ButtonGroup>
              <div className='mt-4 footer-touch'>
                <h4>Stay in touch</h4>
                <div>
                  <EmailIcon sx={{marginRight: '10px'}}/>
                  <LocalPhoneIcon sx={{marginLeft: '10px'}}/>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{borderTop: '1px solid #fff', marginTop: '10px', fontSize: '10px'}}>
          <Grid item xs={3}>
            <div className='footer-block'>
              <p>© 2022 Freetranslate</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <p><LeaderboardIcon />Sitemap</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <p><GraphicEqIcon/>1032 views</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='footer-block'>
              <p><ReportIcon/> Report abuse</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default Footer;