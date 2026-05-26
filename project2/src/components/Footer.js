import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
      <h3>Kumo Kumo Café</h3>

      <p>contact@kumokumo.com</p>

      <p>(201) 555-0192</p>

      <div className='socials'>
        <a href='https://instagram.com'>
          <FaInstagram />
        </a>

        <a href='https://tiktok.com'>
          <FaTiktok />
        </a>

        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}

export default Footer;