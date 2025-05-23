import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      {/* Bio Section */}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>Saya seorang web developer yang fokus pada pengembangan website modern, responsif, dan efisien. Menguasai front-end dan back-end dengan teknologi terkini.</p>
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
              <li>Bootstrap CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>BackEnd</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Golang</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / Github</li>
              <li>Canva</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experiences</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Intern Programmer</h3>
            <p className='text-primary mb-2'>PT Jaya Mahe | Desember 2024 - Juni 2025</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Service Officer</h3>
            <p className='text-primary mb-2'>PT Sentrum Promosi Indonesia | Juni 2023 - Juni 2024</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Memonitoring transaksi pulsa serta layanan PPOB lainnya</li>
              <li>Melakukan setup produk layanan pulsa atau PPOB</li>
              <li>Melayani chat client atau customer</li>
              <li>Mengerjakan orderan client sesuai kebutuhan setiap minggunya</li>
              <li>Melakukan pengecekan stock untuk kebutuhan client setiap hari</li>
            </ul>
          </div>
        </div>

      </section>

      {/* Education Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Sarjana Sistem Komputer</h3>
            <p className='text-primary mb-2'>ITB STIKOM Bali | 2019 - 2024</p>
            <p className='text-secondary'>Selama menempuh pendidikan di STIKOM Bali, saya mempelajari dasar-dasar pengembangan perangkat lunak, jaringan komputer, dan sistem informasi. Selain itu, saya juga aktif berorganisasi selama lebih dari 3 tahun, yang mengasah kemampuan kepemimpinan, komunikasi, dan kerja tim dalam lingkungan profesional dan kolaboratif.</p>
          </div>

        </div>

      </section>
    </div>
  )
}

export default About
