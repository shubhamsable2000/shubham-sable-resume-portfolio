import Image from 'next/image'; // Import next/image

const Experience = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-sans font-light text-center mb-4">
            Education
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#EB9B3F] mb-6"></div>{' '}
            {/* Orange underline */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* First Education Block */}
            <div className="flex items-center space-x-6 justify-center">
              <Image
                src="/u1.jpeg" // Replace with correct image path
                alt="Northeastern University"
                width={100} // Specify width
                height={100} // Specify height
                className="h-24"
              />
              <div>
                <p className="text-base font-sans font-medium">
                  2022 - 2024, Boston, United States
                </p>
                <h3 className="text-2xl font-sans">Northeastern University</h3>
                <p className="text-[#EB9B3F] text-lg font-sans font-semibold">
                  3.65/4.00 GPA, M.S. Information Systems
                </p>
              </div>
            </div>

            {/* Second Education Block */}
            <div className="flex items-center space-x-6 justify-center">
              <Image
                src="/u2.jpeg" // Replace with correct image path
                alt="Pune University"
                width={100} // Specify width
                height={100} // Specify height
                className="h-24"
              />
              <div>
                <p className="text-base font-sans font-medium">
                  2018 - 2022, Pune, India
                </p>
                <h3 className="text-2xl font-sans">Pune University</h3>
                <p className="text-[#EB9B3F] text-lg font-sans font-semibold">
                  3.9/4.00 GPA, B.S. Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Line between Education and Experience */}
        <hr className="border-t border-gray-300 my-12" />

        {/* Experience Section */}
        <div>
          <h2 className="text-4xl font-sans font-light text-center mb-4">
            Experience
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#EB9B3F] mb-6"></div>{' '}
            {/* Orange underline */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* First Experience Block */}
            <div className="flex flex-col items-center">
              <Image
                src="/c1.jpeg" // Replace with correct image path
                alt="Mueshi, Inc."
                width={100} // Specify width
                height={100} // Specify height
                className="h-16 mb-4"
              />
              <p className="text-sm font-medium">Jan 2024 - Sept 2024</p>
              <h3 className="text-2xl font-sans">Mueshi, Inc.</h3>
              <p className="text-[#EB9B3F] font-sans font-semibold">
                Software Engineer Intern
              </p>
              <p>Boston, Massachusetts</p>
              <p className="text-sm text-[#AAAAAA]">Seed Stage</p>
            </div>

            {/* Second Experience Block */}
            <div className="flex flex-col items-center">
              <Image
                src="/c2.jpeg" // Replace with correct image path
                alt="Vertscend Automation"
                width={100} // Specify width
                height={100} // Specify height
                className="h-16 mb-4"
              />
              <p className="text-sm font-medium">Oct 2021 - Jun 2022</p>
              <h3 className="text-2xl font-sans">Vertscend Automation</h3>
              <p className="text-[#EB9B3F] font-sans font-semibold">
                Software Engineer Intern
              </p>
              <p>Pune, India</p>
              <p className="text-sm text-[#AAAAAA]">Series E</p>
            </div>

            {/* Third Experience Block */}
            <div className="flex flex-col items-center">
              <Image
                src="/c3-bg.png" // Replace with correct image path
                alt="Skketchboard Insol"
                width={100} // Specify width
                height={100} // Specify height
                className="h-16 mb-4"
              />
              <p className="text-sm font-medium">Feb 2021 - Sept 2021</p>
              <h3 className="text-2xl font-sans">Skketchboard Insol</h3>
              <p className="text-[#EB9B3F] font-sans font-semibold">
                Full Stack Engineer Intern
              </p>
              <p>Pune, India</p>
              <p className="text-sm text-[#AAAAAA]">Series B</p>
            </div>

            {/* Fourth Experience Block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
