import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Review and analytics platform',
    description: 'TypeScript + Next.js + Python + NLTK',
    demoLink: 'Live Demo',
    timeTaken: '~17 hours',
    imageSrc: '/pluck.png', // Replace with your image path
  },
  {
    title: 'Language Learning SaaS',
    description: 'Next.js 14 + Drizzle ORM + PostgreSQL + Stripe + ShadcnUI',
    demoLink: 'Live Demo',
    timeTaken: '~14 hours',
    imageSrc: '/duolingo.png', // Replace with your image path
  },
  {
    title: 'Ecommerce Platform',
    description: 'Node.js + Express + PostgreSQL + AWS + Terraform + Jest',
    demoLink: 'Live Demo',
    timeTaken: '~2 days',
    imageSrc: '/ecommerce.png', // Replace with your image path
  },
  {
    title: 'Next.js Streaming Application',
    description: 'React + Next.js + RTMP + WHIP + Prisma',
    demoLink: 'Live Demo',
    timeTaken: '~10 hours',
    imageSrc: '/twitch.png', // Replace with your image path
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2 className="text-4xl font-sans font-light text-center mb-4">
          Projects
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-[#EB9B3F] mb-6"></div>{' '}
        </div>
        <p className="text-center mb-8 text-lg">
          Here are some selected side projects / code samples I have worked on.
          You can view all of them here:
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-transparent hover:bg-[#eb9b3f] text-[#eb9b3f] font-semibold py-2 px-4 border border-[#eb9b3f] hover:text-white rounded">
            See all projects
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-sans font-medium text-center">
                    {project.title}
                  </h3>
                  <span className="text-[#EB9B3F] font-bold">
                    {project.demoLink}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Code Sample</span> ⏳{' '}
                  {project.timeTaken}
                </p>
              </div>
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
