import React from 'react';
import { Modal } from "react-bootstrap";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MuiPhoneNumber from "material-ui-phone-number";

class MyVerticallyCenteredModal extends React.Component {
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
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Want to know more about us?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Fill in your details and we will get in touch at our earliest convenience</h6>
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
              maxRows={4}
            />
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function HomeModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="contained" endIcon={<SendIcon sx={{color: '#fff'}}/>} onClick={() => setModalShow(true)} sx={{backgroundColor: '#14a800'}}>
        Make Enquiry
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default HomeModal;