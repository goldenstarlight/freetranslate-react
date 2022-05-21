import React from "react";
import FadeIn from 'react-fade-in';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MuiPhoneNumber from "material-ui-phone-number";
import Grid from '@mui/material/Grid';
import ReCAPTCHA from "react-google-recaptcha";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultValues: {
        username: "",
        name: "",
        phone: ""
      }
    };
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handlePhoneChange(value) {
    if (value) {
      this.setState({ phone: value });
    }
  }

  render() {
    return (
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
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#f2f7f2',
        }}
      >
        <h1 className="text-center">Contact Us / Support</h1>
        <p className="text-center">Are you curious about something? Do you have some kind of problem with our products/services?</p>
        <p className="text-center"><b>Please feel free to contact us, our customer service center is working for you 24/7.</b></p>
        <hr />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box
                sx={{
                  maxWidth: '100%',
                  marginTop: 4
                }}
              >
                <TextField fullWidth 
                  label="Name" 
                  id="name" 
                  type="text"
                  autoComplete="off"
                  required
                  />
                <TextField fullWidth 
                  sx={{
                    marginTop: 4
                  }}
                  label="Email" 
                  id="email" 
                  type="email"
                  autoComplete="off"
                  required
                  />
                <MuiPhoneNumber
                  sx={{
                    marginTop: 4
                  }}
                  name="phone"
                  fullWidth
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"us"}
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  multiline
                  fullWidth
                  sx={{
                    marginTop: 4
                  }}
                  rows={5}
                />
                <div className="d-flex justify-content-between">
                  <ReCAPTCHA
                    className="mt-2"
                    sitekey="6LdnaAAgAAAAAKWmJCh0UqqgIPcPSS3-aZhUYqbP"
                  />
                  <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Send message</Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={4} >
              <h5 className="text-center">Freetranslate   - Head Office</h5>
              <hr/>
              <p className="text-center">peubla Mexico
                <br/>Ontario, 55
                <br/>añada de Benatanduz Aragon
                <br/>añada de Benatanduz Aragon
                <br/>Spain - 569457<br/>
                <br/><WhatsAppIcon/> +1**********0006
                <br/><MailIcon/> b*********@g*****.com
              </p>
            </Grid>
          </Grid>
      </Paper>
    </FadeIn>
    )
  }
}

export default Contact;