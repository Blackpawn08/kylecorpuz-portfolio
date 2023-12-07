import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { TfiYoutube } from 'react-icons/tfi';
import { SiTiktok } from 'react-icons/si';
import kc from '../../assets/kc.png';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footerlogo'>
        <img src={kc} alt="Kyle Corpuz Logo" />
      </a>
      <ul className='permalinks'>
        <li><a className='footer-social' href="#">Home</a></li>
        <li><a className='footer-social' href="#about">About</a></li>
        <li><a className='footer-social' href="#experience">Experience</a></li>
        <li><a className='footer-social' href="#services">Services</a></li>
        <li><a className='footer-social' href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a className='footer-social' href="https://www.facebook.com/kyle.corpuz.98" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a className='footer-social' href="https://www.instagram.com/corpuz.kyle/" target='_blank' rel="noopener noreferrer"><GrInstagram /></a>
        <a className='footer-social' href="https://www.youtube.com/@KyleCorpuz/videos" target='_blank' rel="noopener noreferrer"><TfiYoutube /></a>
        <a className='footer-social' href="https://www.tiktok.com/@kylcrpz" target='_blank' rel="noopener noreferrer"><SiTiktok /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kyle Corpuz. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
