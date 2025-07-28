const About = () => {
  return (
    <div className="text-gray-300 p-4 sm:p-8 space-y-4 text-base sm:text-lg leading-relaxed">
      <p>
        I build the glue between messy systems and real business workflows. I’m finishing my CS
        degree at UF this fall (one class left) and spent the last year as the sole dev at
        ParsonsKellogg (CorporateGear, Gameday Gear, PK Health).
      </p>
      <p>
        Stuff I shipped: a Photoshop mockup automation platform (Photoscripts + API uploaders),
        a GPT‑driven SEO metadata generator, Excel→Admin transformers, real-time image/CDN
        uploaders, and a pile of integrations across Business Central, MuleSoft, Salesforce,
        ZoomInfo, Repspark, Elastic, and PromoStandards.
      </p>
      <p>
        Translation: undocumented vendor APIs, legacy ERPs, scattered spreadsheets, and “can we
        automate this?” requests turned into production systems that saved teams thousands of hours.
      </p>
      <p>
        If you’re building internal platforms, automation pipelines, or e‑comm infrastructure and
        want someone who’ll own the whole thing end‑to‑end, hit me at{" "}
        <a href="mailto:nmaclear9@gmail.com" className="underline text-white">
          nmaclear9@gmail.com
        </a>.
      </p>

      {/* Image at the very bottom */}
      <img
          src="../../IMG_0299.jpg"
        alt="Nolan MacLear"
        className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mx-auto mt-10 ring-2 ring-zinc-600 shadow-lg"
      />
    </div>
  );
};

export default About;
 //         src="../../IMG_0299.jpg"


