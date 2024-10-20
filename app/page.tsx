import Footer from './components/Footer';
import React from 'react';

export default function Home() {
  return (
    <>
      {' '}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
        <div className="max-w-7xl w-full mx-auto px-4">
          {/* Two-column layout with 30% and 70% width split */}
          <div className="grid grid-cols-1 md:grid-cols-[30%,70%] gap-16">
            {/* Left column: Large logo (30%) */}
            <div className="flex justify-start items-start mt-24">
              {' '}
              {/* Adjusted mt-8 to move it down */}
              <div className="text-left">
                <div className="text-[160px] font-extrabold leading-none">
                  S
                </div>
                <div className="text-[50px] font-light">2000</div>
              </div>
            </div>

            {/* Right column: Text content (70%) */}
            <div className="mt-8">
              {' '}
              {/* Added mt-8 to slightly align with the logo */}
              <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
              <p className="text-[20px] leading-relaxed text-gray-700 font-normal">
                👋 I&apos;m{' '}
                <span className="font-bold text-black">Shubham Sable</span>, a
                <span className="font-bold text-black"> Frontend Engineer</span>{' '}
                and self-taught
                <span className="font-bold text-black"> Designer</span> with
                full-stack experience that loves to design and build products
                that solve challenging world-scale problems with careful user
                research, design, planning, and strong engineering principles. I
                have a sharp eye for pixel-perfect detail.
              </p>
              <p className="text-[20px] leading-relaxed text-gray-700 font-normal mt-4">
                In my free time, I enjoy reading books, building side projects,
                and traveling. I hope to use my interdisciplinary skills to help
                build a better and sustainable future.
              </p>
              <p className="text-[20px] leading-relaxed text-gray-700 font-normal mt-4">
                Currently looking for Full-Time Opportunities. Previously worked
                as a software engineer at
                <span className="font-bold text-black">
                  {' '}
                  Mueshi Incorporated
                </span>{' '}
                and <span className="font-bold text-black"> Vertscend</span>.
              </p>
              <h3 className="text-2xl font-bold text-black mt-8 mb-4">
                8 Facts About Me
              </h3>
              <ul className="list-disc list-inside space-y-3 text-[20px] text-gray-700">
                <li>
                  Born in <span className="font-bold text-black">Pune</span> ❤️
                </li>

                <li>
                  Founded my first startup at{' '}
                  <span className="font-bold text-black">age 19</span>
                </li>
                <li> I own 27,500+ Lego</li>
                <li> Webstorm &gt; VS Code (fight me)</li>
                <li> Chai &gt; Coffee </li>
                <li> Have an excellent credit score</li>
                <li>
                  Read More than 50+{' '}
                  <span className="font-bold text-black">Books</span>
                </li>
                <li> I play percussive fingerstyle guitar 🎸</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
