import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/DevilCode0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/saad-alkathiri" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Saad Alkathiri - <a href="mailto:saad@s3d340.com">saad@s3d340.com</a> - +966 535235140 - <a href="mailto:s3d340@gmail.com">s3d340@gmail.com</a></p>
    </footer>
  );
}

export default Footer;