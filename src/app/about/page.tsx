import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      {/* Bio Section */}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime nemo, modi ut molestias minus alias. Necessitatibus in quas cupiditate sint vero, quos omnis a deleniti impedit architecto possimus minima.</p>
      </section>

      {/* Skilss Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>FrontEnd</h3>
            <ul className='text-secondary space-y-2'>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>BackEnd</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / Github</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI / CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experiences</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Senior Full Stack Developer</h3>
            <p className='text-primary mb-2'>Company Name | 2020 - present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Senior Full Stack Developer</h3>
            <p className='text-primary mb-2'>Company Name | 2020 - present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>

      </section>

      {/* Education Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Bachelor of Computer System</h3>
            <p className='text-primary mb-2'>ITB STIKOM Bali | 2019 - 2024</p>
            <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In vel nostrum quia perspiciatis culpa fuga inventore nulla itaque maxime sit, quo obcaecati sapiente deleniti, reiciendis quam, possimus quis dolorem minima.</p>
          </div>

        </div>

      </section>
    </div>
  )
}

export default About
