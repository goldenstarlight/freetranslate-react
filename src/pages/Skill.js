import React from "react";
import FadeIn from 'react-fade-in';
import Paper from '@mui/material/Paper';
import UpworkImg from '../assets/images/upwork.png';

class Skill extends React.Component {
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
            theme.palette.mode === 'dark' ? '#1A2027' : '#f2f7f2',
        }}
      >
        <h1 className="text-center">FREELANCER SKILLS NEEDED</h1>
        <hr />
        <div className="d-flex justify-content-center">
          <img src={ UpworkImg } />
        </div>
        <div className="mt-3">
          <h5 className="text-center" style={{color: '#14a800'}}>
            TRANSLATION SKILLS
          </h5>
          <p className="text-center">
            *PORTUGUESE* *ENGLISH* *PORTUGUESE TO ENGLISH TRANSLATION* ENGLISH TO PORTUGUESE TRANSLATION* *BRAZILIAN DIALECT* *TRANSCRIPTION*
          </p>
          <h5 className="text-center" style={{color: '#14a800'}}>
            WRITING SKILLS
          </h5>
          <p className="text-center">*CONTENT WRITING* *ARTICLE WRITING* *CONTRACT WRITING* *BLOGGING*</p>
        </div>
      </Paper>
    </FadeIn>
    )
  }
}

export default Skill;