// components/Contact.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaTwitter, FaGithub, FaLinkedin,FaFacebook, FaInstagram } from 'react-icons/fa';


interface SocialIconProps {
  icon: IconType;
  link: string;
}

// Assuming you have the necessary imports and SocialIcon component

const Contact: React.FC = () => {
  return (
    <>
    <section id="contact" className="my-auto min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center space-x-8">
        <h2 className="text-4xl font-bold mb-8">Contact me on: </h2>
        <div className='flex justify-around w-full'>
          <SocialIcon icon={FaTwitter} link="https://x.com/SudhinKarki?t=YfdHUZtwDimEwzaYCLejiA&s=09" />
          <SocialIcon icon={FaGithub} link="https://github.com/Sudhin-star1" />
          <SocialIcon icon={FaLinkedin} link="https://www.linkedin.com/in/sudhin-karki-bbb572237/" />
          <SocialIcon icon={FaFacebook} link="https://www.facebook.com/sudheen.karkee/" />
          <SocialIcon icon={FaInstagram} link="https://www.instagram.com/sudheenkarkee/" />
        </div>
      </div>
    </section>
      <div className="mt-8 text-center">
        <p>Made with ❤️ by Sudhin</p>
        <p>&copy; 2023 Sudhin Karki. All rights reserved.</p>
      </div>
    </>
  );
};


const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-gray-600 hover:text-blue-500 transition-colors"
    >
      <Icon />
    </a>
  );
};

export default Contact;
