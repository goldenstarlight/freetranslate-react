import React from "react";
import FadeIn from 'react-fade-in';
import Paper from '@mui/material/Paper';

class Contact extends React.Component {
  constructor(props) {
    super(props);
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
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <h1 className="text-center">Contact Us / Support</h1>
        <p className="text-center">Are you curious about something? Do you have some kind of problem with our products/services?</p>
        <p className="text-center"><b>Please feel free to contact us, our customer service center is working for you 24/7.</b></p>
        <hr />
        
        <div>
          
        </div>
      </Paper>
    </FadeIn>
    )
  }
}

export default Contact;