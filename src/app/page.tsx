import Image from "next/image";
const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Rafiqul Hasan<span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
      >
        <div>
          <p className="mb-4 font-semibold text-blue-600">
            HELLO, I'M
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Rafiqul Hasan
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-blue-600 sm:text-3xl">
            Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            I build modern, responsive, and user-friendly web
            applications using React and Next.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View My Projects
            </a>

            <a
              href="/rafiqul-hasan-cv.pdf"
              download="Rafiqul-Hasan-CV.pdf"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Professional Photo */}
        <div className="flex justify-center md:justify-end">
  <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
    <Image
      src="/Rafique.png"
      alt="Rafique Hasan - Web Developer"
      fill
      priority
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, 384px"
    />
  </div>
</div>
      </section>

      
      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-100 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            Get to Know Me
          </p>

          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-slate-600">
              I am an aspiring Web Developer passionate about building
              modern, responsive, and user-friendly web applications.
              I enjoy learning new technologies and turning ideas into
              practical digital solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I work with React and Next.js to build web interfaces,
              TypeScript to write structured code, and Tailwind CSS
              to create responsive designs. I also explore API
              integration and backend development to strengthen my
              full-stack development skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Problem Solving
              </span>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Continuous Learning
              </span>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Responsive Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            My Technical Skills
          </p>

          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
            These are the technologies I use in my projects and
            continue to develop my skills in.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "REST API Integration",
              "Git",
              "GitHub",
              "Python",
              "Django REST Framework",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-100 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            Get to Know Me
          </p>

          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-slate-600">
              I am an aspiring Web Developer passionate about building
              modern, responsive, and user-friendly web applications.
              I enjoy learning new technologies and turning ideas into
              practical digital solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I work with React and Next.js to build web interfaces,
              TypeScript to write structured code, and Tailwind CSS
              to create responsive designs. I also explore API
              integration and backend development to strengthen my
              full-stack development skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Problem Solving
              </span>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Continuous Learning
              </span>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Responsive Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            My Technical Skills
          </p>

          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
            These are the technologies I use in my projects and
            continue to develop my skills in.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "REST API Integration",
              "Git",
              "GitHub",
              "Python",
              "Django REST Framework",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

            
      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-slate-100 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            My Recent Work
          </p>

          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
            Here are some projects I have been building while developing
            my web development skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🛒
              </div>

              <h3 className="text-xl font-bold">BazarDor</h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                A product price browsing application designed to help
                users explore products, browse categories, and compare
                prices.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "REST API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-100 pt-5">
                <a
                  href="https://bazar-dhar-e5bv.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  BazarDor ↗
                </a>
                <span className="text-sm text-slate-400">
                  Live link
                </span>
              </div>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                💪
              </div>

              <h3 className="text-xl font-bold">FitLog</h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                A fitness-focused web application built with Next.js,
                featuring integration with an external API.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind CSS", "API Integration"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-100 pt-5">
                <a
                  href="https://fit-l0g-06.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Fitlog ↗
                </a>
                <span className="text-sm text-slate-400">
                  Live link
                </span>
              </div>
            </article>

            {/* Project 3 */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m14 4-4 16" />
  </svg>
</div>


              <h3 className="text-xl font-bold">DevStack</h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                A book browsing web application built with Next.js,
                featuring a structured frontend and book data.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind CSS", "JavaScript"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-100 pt-5">
                <a
                  href="https://effortless-frangollo-34b8c4.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  GitHub ↗
                </a>
                <span className="text-sm text-slate-400">
                  Live link
                </span>
              </div>
            </article>

            {/* Project 4 */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl">
                🔐
              </div>

              <h3 className="text-xl font-bold">User Authentication App</h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                A web authentication project with sign-up, sign-in,
                social login, and user profile features.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "Better Auth", "MongoDB", "OAuth"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-100 pt-5">
                <a
                  href="https://github.com/rafiqulhasan81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  GitHub ↗
                </a>
                <span className="text-sm text-slate-400">
                  Live link
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

                
      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-100 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            I am interested in web development opportunities and
            collaborations. If you have a project or an opportunity
            to discuss, feel free to get in touch.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasanrafiqul39@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Email Me
</a>

            <a
              href="https://github.com/rafiqulhasan81"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/rafiqulhasan81/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
                  
                      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Rafiqul Hasan
          </a>

          
<p className="text-sm text-slate-500">
  © 2026 Rafiqul Hasan. All rights reserved.
</p>


          <a
            href="#home"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
 

    


