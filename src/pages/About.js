import React from "react";
import FadeIn from 'react-fade-in';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MediaImg from '../assets/images/logodesign.jpeg';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SocialIcons from "../components/SocialIcons";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
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
            <h1>About us</h1>
          </Paper>
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
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img src={ MediaImg } width="100%" />
              </Grid>
              <Grid item xs={9}>
                <h5 className="text-center">The World’s Leading Companies Trust CSOFT</h5>
                <hr/>
                <p>We bring together a 10,000-strong network of professional in-country linguists, culture experts, and the latest language technology to deliver localization solutions to global businesses in IT/telecom, life sciences, energy, automotive, manufacturing, financial services, consumer electronics, and more.</p>
              </Grid>
            </Grid>
          </Paper>
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  TECHNICAL TRANSLATION
                </Typography>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  SOFTWARE LOCALIZATION
                </Typography>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  WEBSITE LOCALIZATION
                </Typography>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>   
                  MEDICAL TRANSLATION
                </Typography>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  DOCUMENT TRANSLATION
                </Typography>
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
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  LINGUISTIC EXCELLENCE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Powered by our large network of professionally trained linguists with in-depth subject matter expertise, we deliver quality translations that speak our clients’ language both technically and culturally.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  What Makes Us Different Exceptional Customer Service
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The care and satisfaction of our clients is our #1 priority, and we are committed to always providing our customers with outstanding service 24x7x365 – Customer service the way it used to be.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  Technology-driven Efficiency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We have helped clients reduce localization spending by 30% to 50% using technology to automate and eliminate redundant work. Our proprietary tools drive both quality and efficiency.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  People
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We hire the best and brightest the industry has to offer. CSOFT has achieved continued success for over 17 years through pure organic growth.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className="about-accordian-title"
              >
                <Typography>
                  <Brightness1Icon sx={{fontSize: '10px', color: '#14a800', marginRight: '10px'}}/>
                  Fortune’s Most Powerful Women Entrepreneurs! 
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  FREETRANSLATE President and CEO Shunee Yee selected as one of Fortune’s 2012 Most Powerful Women Entrepreneurs.
                  Over the last decade, entrepreneurship has seen a rapid and invigorating surge, with particular focus on women entrepreneurs. According to Global Entrepreneurship Monitor (GEM), the number of entrepreneurs around the world in 2012 was nearing 400 million, with 163 million early-stage women entrepreneurs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
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
            <p className="text-center">
              The storyline of Crisis 108 is extreme, set in a world where the shortage of energy resources is very severe. We purposely chose to exaggerate the energy crisis to generate open dialogue about what we are facing today and what we can do to evade a full-scale crisis.
            </p>
            <p className="text-center">CSOFT’s debut featurette “Crisis 108,” depicts a world where the shortage of energy resources is extreme. The mini-film showcases the creative production capabilities we can offer to clients through our Creative Services division. And just for fun, we cast the entire crew with CSOFT employees, and friends.</p>
            <SocialIcons />
          </Paper>
        </FadeIn>
      </>
    )
  }
}

export default About;