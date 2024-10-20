import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Text */}
        <p className="mt-4 text-gray-500">
          Handmade with <span className="text-red-500">❤️</span> in{' '}
          <span className="font-semibold">Boston, MA</span> using{' '}
          <span className="font-semibold">Next.js</span> and{' '}
          <span className="font-semibold">▲Vercel</span>
        </p>

        <p className="mt-2 text-gray-500">
          © 2024 <span className="font-bold">Shubham Sable</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
