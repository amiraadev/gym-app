import Logo from "@/assets/Logo.png";
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
           
All rights reserved. Embrace your fitness journey with our world-class facilities, expert trainers, and diverse classes.
          </p>
          <p>2023© Gigigym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className=" flex flex-row items-center mt-16 basis-1/4 md:mt-0">
            <AiOutlineFacebook size={24}  />
            <p className="my-5 px-2">https://www.facebook.com/Gigigym</p>
          </div>
          <div className=" flex flex-row items-center mt-16 basis-1/4 md:mt-0">
             <AiOutlineInstagram size={24} />
             <p className="my-5  px-2">https://www.instagram.com/Gigigym</p>
          </div>
        
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p>(+216) 71-682-228</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;