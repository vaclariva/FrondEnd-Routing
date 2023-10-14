// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import file CSS untuk gaya footer

// Import ikon Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/clarivameydietawidagdo">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/clarivameydietawidagdo">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <p>&copy; 2023 Clariva Meydieta Widagdo</p>
    </footer>
  );
}

export default Footer;
