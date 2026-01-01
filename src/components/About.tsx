const About = () => {
  return (
    <div className="text-gray-300 p-4 sm:p-8 space-y-4 text-base sm:text-lg leading-relaxed">
      <p>
        I'm a software engineer at ParsonsKellogg. I build automation and integrations for their
        promotional products business. Graduating from UF in the spring.
      </p>
      <p>
        I work with MuleSoft, Salesforce, Business Central, and a bunch of vendor APIs. I've
        built computer vision stuff for product mockups, lead scoring systems, and tools that
        turn Excel files into actual usable data.
      </p>
      <p>
        Email me at{" "}
        <a href="mailto:nmaclear9@gmail.com" className="underline text-white">
          nmaclear9@gmail.com
        </a>
        .
      </p>

      <img
        src="/IMG_0299.JPG"
        alt="Nolan MacLear"
        className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mx-auto mt-10 ring-2 ring-zinc-600 shadow-lg"
      />
    </div>
  );
};

export default About;