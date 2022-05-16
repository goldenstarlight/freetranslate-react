import React from "react";
import Paper from '@mui/material/Paper';
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaymentsIcon from '@mui/icons-material/Payments';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import HomeModal from '../components/HomeModal';
import HomeGallery from '../components/HomeGallery';
import FadeIn from 'react-fade-in';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LogoDesignImg from '../assets/images/logodesign.jpeg';
import '../assets/css/styles.css';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeGallery/>
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
             sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '98%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <div className="translate-grid">
              <h1>Freetranslate</h1>
              <HomeModal/>
            </div>
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
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Item className="card pt-3">
                <h4>
                  WHAT ARE THE THINGS THAT WE DO?
                </h4>
                <p>FONZYLOANZ(freetranslate) is Canada’s largest multilingual translation company run entirely by language experts. We offer a full range of translation services for any of the world’s languages, as well as all relevant support services. As the top professional firm in a country where translation is a way of life, we define what world class means in our industry and we never fail to deliver. Our services are provided by the best freelancers from the PPH, UPWORK and other Freelancer platforms.We bring together a 10,000-strong network of professional in-country linguists, culture experts, and the latest language technology to deliver localization solutions to global businesses in IT/telecom, life sciences, energy, automotive, manufacturing, financial services, consumer electronics, and more.</p>
                <p className="pt-3 pb-2">We hire freelancers from UPWORK, PPH and FREELANCER.COM</p>
              </Item>
            </Grid>
            <Grid item xs={7}>
              <Item className="card pt-3">
                <h6>The World’s Leading Company:  FREETRANSLATE</h6>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>TECHNICAL TRANSLATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Accurate translation of user manuals, reference materials, product guides & more.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>SOFTWARE LOCALIZATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        L10N for enterprise & mobile applications, software GUI, linguistic & cosmetic testing.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>WEBSITE LOCALIZATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Translate multilingual corporate & ecommerce websites with real-time updates.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>MEDICAL TRANSLATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Life Sciences translations for pharma, CRO, biotech, medical devices & more.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        REGULATORY TRANSLATION
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Global regulatory submission specialists with linguistic, cultural, & subject expertise.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>DOCUMENT TRANSLATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Quality translation & terminology management for business, legal, technical documentation
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>LINGUISTIC EXCELLENCE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Powered by our large network of professionally trained linguists with in-depth subject matter expertise, we deliver quality translations that speak our clients’ language both technically and culturally.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
             sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '98%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <div className="translate-grid">
              <h1>SERVICES/AFFILIATES</h1>
              <p>View all</p>
            </div>
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Welcome to Freetranslate company
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    By FONZYLOANZ (Tell Us Communications)LTD
                  </Typography>
                
                  <Typography variant="body2" className="pt-3">
                    This is Freetranslate website created by FONZYLOANZ (Tell Us Communications)LTD. Freetranslate is an affiliate company which carries varieties of functions You can visit us offline at our office located at : peubla Mexico...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{backgroundColor:'#14a800'}} className="mt-4">Continue reading</Button>
                </CardActions>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <CardContent>
                  <Typography variant="h5" component="div">
                    SCAM PROTECTION
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    By FONZYLOANZ (Tell Us Communications)LTD
                  </Typography>
                
                  <Typography variant="body2" className="pt-3">
                    Built to beat fraudSift has spent over a decade building and tuning models and signals to deliver actionable, accurate results to our network of customers. Strength in numbers With billions of events training Sift models every month, our global network of 34,000 sites and apps from around the wor...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{backgroundColor:'#14a800'}}>Continue reading</Button>
                </CardActions>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <CardContent className="instruction-card">
                  <Typography variant="h5" component="div">
                    INSURANCE VALIDATION
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    By FONZYLOANZ (Tell Us Communications)LTD
                  </Typography>
                
                  <Typography variant="body2" className="pt-3">
                    PREMIUM/INSURANCE DEPOSIT  1.The premium ID serves as an IDENTITY for you on our company! 2. Gives you opportunity to work for our company, multiple times with aid       of your profile on our company  ❗❗This is to protect against scam, incomplete project and copy of work from the internet Alt...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{backgroundColor:'#14a800'}}>Continue reading</Button>
                </CardActions>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <CardContent>
                  <Typography variant="h5" component="div">
                    LOGO DESIGNING
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    By FONZYLOANZ (Tell Us Communications)LTD
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={LogoDesignImg} className="pt-3" width="100%"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" className="pt-3">
                        This is Freetranslate website created by FONZYLOANZ (Tell Us Communications)LTD. Freetranslate is an affiliate company which carries varieties of functions You can visit us offline at our office located at : peubla Mexico...
                      </Typography>
                    </Grid>
                  </Grid>
                
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{backgroundColor:'#14a800'}}>Continue reading</Button>
                </CardActions>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
             sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '98%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <div className="translate-grid">
              <h1>OUR MEDIA</h1>
              <p>View all</p>
            </div>
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
          <Grid container spacing={2}>
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
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
             sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '98%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <div className="translate-grid">
              <h1>PROJECT</h1>
              <p>Click on the button below to submit completed project</p>
              <Link to="/" style={{ color: '#14a800'}}>SUBMIT</Link>
            </div>
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
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item className="home-media">
                <RocketLaunchIcon fontSize="large" className="mt-4" color="success" sx={{fontSize: '41px'}}/>
                <div className="pt-5">
                  <h4>PROJECT SUBMISSION</h4>
                  <p>Upload completed project</p>
                  <Link to="/" style={{ color: '#14a800'}}>SUBMIT</Link>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="home-media" style={{backgroundColor: '#13544e', color: '#fff'}}>
                <h4 className="mt-4">PREMIUM ID</h4>
                <p className="pt-5">The premium ID is an identity on our company which enables you to access more projects. It is also used in verifying and approving your payment.</p>
                <Link to="/" style={{ color: '#14a800'}}>Apply</Link>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="home-media" style={{backgroundColor: '#bc511b', color: '#fff'}}>
              <h4 className="mt-4">PREMIUM ID</h4>
                <p className="pt-5">The premium ID is an identity on our company which enables you to access more projects. It is also used in verifying and approving your payment.</p>
                <Link to="/" style={{ color: '#13544e'}}>Apply</Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <FadeIn 
          in={true}
          timeout={4000}>
          <Paper
             sx={{
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 3,
              maxWidth: '98%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <div className="translate-grid">
              <h1>SALARY APPROVED</h1>
              <p>Profile completed freelancers are hereby adviced to checkout the shortlisted names, to process his or her payment.</p>
              <Link to="/" style={{ color: '#14a800'}}>Check min</Link>
            </div>
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item className="home-media"  style={{backgroundColor: '#13544e', color: '#fff'}}>
                <PaymentsIcon fontSize="large" className="mt-4" sx={{fontSize: '38px'}}/>
                <div className="pt-5">
                  <h4>Payment Approved Freelancers</h4>
                  <p>Payment approved clients</p>
                  <Link to="/" style={{ color: '#14a800'}}>CHECK LIST</Link>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="home-media">
                <h4 className="mt-4">Pending Workers</h4>
                <p className="pt-5 mt-4">Payment pending workers/Freelancers are to submit their profile form to receive payment</p>
                <Link to="/" style={{ color: '#14a800'}}>Learn more</Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  }
}

export default Home;