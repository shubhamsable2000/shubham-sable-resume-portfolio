import { Button } from '@/components/ui/button';

import { FaPaypal, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-sans font-light text-center mb-4">
          Contact Me
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-[#EB9B3F] mb-12"></div>{' '}
          {/* Orange underline */}
        </div>
        <p className="text-center text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12">
          Whether you want to hire me, collaborate, get some advice, or just
          chat about mutual interests, please reach out!
        </p>

        <div className="flex flex-col items-center space-y-6 mb-12">
          <p className="text-lg font-semibold">
            📞 +1 (857) 452 — four four zero one
          </p>
          <p className="text-lg font-semibold">📧 shubhammsable@gmail.com</p>

          <p className="text-lg text-gray-500">
            If you found my help useful, you can buy me coffee ☕.
          </p>

          <div className="flex space-x-6">
            <Button className="flex items-center px-6 py-3 border border-black">
              <FaPaypal className="h-5 w-5 mr-2" />
              PayPal
            </Button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 text-xl text-[#EB9B3F]">
          <a href="#" className="flex items-center space-x-2">
            <FaTwitter color="black" />
            <span>/shubhamsablee</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaLinkedin color="black" />
            <span>/sableshubham</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaGithub color="black" />
            <span>/shubhamsable</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
