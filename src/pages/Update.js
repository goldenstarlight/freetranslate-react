import React from "react";
import FadeIn from 'react-fade-in';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
class Update extends React.Component {
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
            <h1>Our updates</h1>
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
          <div className="update-card">
            <h2>
              Welcome to Freetranslate company
            </h2>
            <p style={{color: '#14a800'}}>By FONZYLOANZ (Tell Us Communications)LTD</p>
            <div className="update-card-body">
              <p style={{color: '#14a800'}}>
                <CalendarMonthIcon/> <b>Sat, 09-Apr-2022, 18:28</b>
              </p>
              <p>
                This is Freetranslate website created by FONZYLOANZ (Tell Us Communications)LTD. Freetranslate is an affiliate company which carries varieties of functions You can visit us offline at our office located at : peubla Mexico, Cañada de Benatanduz, Aragon, Spain - 569457 You can contact us on email vis b*********@g*****.com or use the Contact Form.
              </p>
              <div className="update-continue-btn">
                <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Continue reading</Button>
              </div>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            width: '95%',
            p: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 3
          }}
        >
          <div className="update-card">
            <h2>
              SCAM PROTECTION
            </h2>
            <p style={{color: '#14a800'}}>By FONZYLOANZ (Tell Us Communications)LTD</p>
            <div className="update-card-body">
              <p style={{color: '#14a800'}}>
                <CalendarMonthIcon/> <b>Mon, 11-Apr-2022, 06:33</b>
              </p>
              <p>
                Built to beat fraudSift has spent over a decade building and tuning models and signals to deliver actionable, accurate results to our network of customers. Strength in numbers With billions of events training Sift models every month, our global network of 34,000 sites and apps from around the world ensures protection from day one. This shared learning enhances detection and keeps your business one step ahead of fraud. Sophisticated analysis We transform single data points, such as an email address, into hundreds of signals like similar emails, disposable domains, and email age. These rich...
              </p>
              <div className="update-continue-btn">
                <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Continue reading</Button>
              </div>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            width: '95%',
            p: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 3
          }}
        >
          <div className="update-card">
            <h2>
              INSURANCE VALIDATION
            </h2>
            <p style={{color: '#14a800'}}>By FONZYLOANZ (Tell Us Communications)LTD</p>
            <div className="update-card-body">
              <p style={{color: '#14a800'}}>
                <CalendarMonthIcon/> <b>Mon, 11-Apr-2022, 06:33</b>
              </p>
              <p>
                PREMIUM/INSURANCE DEPOSIT  1.The premium ID serves as an IDENTITY for you on our company! 2. Gives you opportunity to work for our company, multiple times with aid       of your profile on our company  ❗❗This is to protect against scam, incomplete project and copy of work from the internet Although, this has been updated with the TRUSTWALLET PLATFORM. HOW DOES TRUSTWALLET WORK WITH OUR COMPANY? With TRUSTWALLET; our company creates an account for you on A TRADING VIEW, to link your Trustwallet and allow you make withdrawal to other wallets. The wallet created for you by our company is a...
              </p>
              <div className="update-continue-btn">
                <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Continue reading</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
      

    )
  }
}

export default Update;