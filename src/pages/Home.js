import React from "react";
import Paper from '@mui/material/Paper';
import { Fade } from "@mui/material";
import HomeModal from '../components/HomeModal';
import HomeGallery from '../components/HomeGallery';
import '../assets/css/styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeGallery/>
        <Fade 
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
        </Fade>
      </div>
    )
  }
}

export default Home;