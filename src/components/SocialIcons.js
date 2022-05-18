import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-social-icons">
        <FacebookIcon/>
        <TwitterIcon />
        <PinterestIcon />
        <LinkedInIcon />
        <MailIcon />
        <WhatsAppIcon />
      </div>
    );
  }
}

export default SocialIcons;