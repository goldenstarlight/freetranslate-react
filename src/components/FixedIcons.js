import React from "react";
import LocationOnIconImg from '../assets/images/google.svg';
import WhatsAppIconImg from '../assets/images/whatsapp.svg';
class FixedIcons extends React.Component {
  render() {
    return (
      <div className="fixed-icons">
        <a href="https://www.google.com/maps/?q=40.5791,-0.5381" target="_blank">
          <img src={ LocationOnIconImg } width="40px"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=10006&text=Hi,%20FONZYLOANZ%20(Tell%20Us%20Communications)LTD%20need%20more%20information%20about%20Freetranslate.%20please%20contact%20me." target="_blank">
          <img src={ WhatsAppIconImg } width="40px"/>
        </a>
      </div>
    )
  }
}

export default FixedIcons;