import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { SocialIcon } from 'react-social-icons';

import { Container } from '../'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <div className="footerCopyright">
            &copy; CaretoCompare? 2017
          </div>
          <div className="footerSocialMedia">
            <ul className="footerIcons">
              <li><SocialIcon url="#" network="facebook" color="#363f48" style={{ height:30, width:30 }}/></li>
              <li><SocialIcon url="#" network="twitter" color="#363f48" style={{ height:30, width:30 }}/></li>
              <li><SocialIcon url="#" network="youtube" color="#363f48" style={{ height:30, width:30 }}/></li>
              <li><SocialIcon url="#" network="instagram" color="#363f48" style={{ height:30, width:30 }}/></li>
            </ul>
          </div>
        </Container>
      </footer>
    )
  }
}

export default withRouter(Footer);
