import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ruslan Prakapets | Portfolio</title>
        <meta
          name="description"
          content="Портфолио frontend-разработчика Прокопца Руслана. Опыт в создании современных веб-приложений с использованием HTML, CSS, JavaScript, React."
        ></meta>
        <meta
          name="keywords"
          content="frontend developer, web development, HTML, CSS, JavaScript, React, портфолио разработчика, frontend портфолио"
        ></meta>
      </Head>

      <Header />

      <section id="hero" className="md:snap-start">
        <Hero />
      </section>

      <section id="about" className="md:snap-center">
        <About />
      </section>

      <section id="experience" className="md:snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="md:snap-start">
        <Skills />
      </section>

      <section id="projects" className="md:snap-start">
        <Projects />
      </section>

      <section id="contact" className="md:snap-center">
        <ContactMe />
      </section>

      <footer className="hidden md:block md:sticky md:bottom-5 md:w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
          </Link>
        </div>
      </footer>
    </div>
  )
}
