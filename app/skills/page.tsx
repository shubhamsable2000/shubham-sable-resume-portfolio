const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-sans font-light text-center mb-3">
        Technical Skills
      </h2>
      <div className="flex justify-center mb-6">
        <div className="w-24 h-1 bg-[#EB9B3F]"></div> {/* Orange underline */}
      </div>
      <p className="text-left text-xl font-sans font-light  leading-relaxed mb-20 max-w-2xl mx-auto">
        Though I am a Frontend Engineer, my time is split 60/30/10 frontend,
        backend, and design. I like to work on high-quality experiences from
        user research to launch on web and mobile.
        <br />
        <br />I also have experience with{' '}
        <strong>Advertisement, DevOps , Security</strong>, and{' '}
        <strong>Performance</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 ">
        {/* Frontend */}
        <div>
          <h3 className="text-[#EB9B3F] font-sans font-semibold text-2xl mb-2">
            Frontend
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>React, Next.js</strong>
            </li>
            <li>React Native, Expo</li>

            <li>Vite, Webpack</li>
            <li>Schadcn,Tailwind CSS</li>
          </ul>
        </div>

        {/* API / Backend */}
        <div>
          <h3 className="text-[#EB9B3F] font-sans font-semibold text-2xl mb-2">
            API / Backend
          </h3>
          <ul className="space-y-2">
            <li>Node.js + Express</li>
            <li>GraphQL, REST, RPC</li>

            <li>Postgres, MySQL/SQL</li>
            <li>MongoDb, Firebase</li>
            <li>Server Side Rendering</li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-[#EB9B3F] font-sans font-semibold text-2xl mb-2">
            Languages
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>TypeScript</strong>
            </li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C/C++, Java</li>
            <li>Go, Ruby</li>
          </ul>
        </div>

        {/* Testing / Release */}
        <div>
          <h3 className="text-[#EB9B3F] font-sans font-semibold text-2xl mb-2">
            Cloud & DevOps
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Terraform</strong>
            </li>
            <li>Ansible, GCP</li>
            <li>Mocha, Jest</li>
            <li>CI/CD, AWS</li>
            <li>GitHub Action</li>
          </ul>
        </div>

        {/* Prototyping */}
        <div>
          <h3 className="text-[#EB9B3F] font-sans font-semibold text-2xl mb-2">
            Prototyping
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Figma</strong>
            </li>
            <li>FigJam</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
