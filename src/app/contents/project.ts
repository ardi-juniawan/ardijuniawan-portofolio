import { Project } from "../types";

export const projects: Project[] = [
    {
        title: 'Video Belajar',
        description: 'Platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        githubLink: 'https://github.com/ardi-juniawan/videobelajar2.0',
        demoLink: 'https://videobelajar2-0.vercel.app/',
        image: '/projects/videobelajar.png',
      },
      {
        title: 'CMR Car Rental',
        description: 'Landing page untuk pemesanan sewa mobil serta paket touring.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/ardi-juniawan/cmr-car-rental',
        demoLink: 'https://cmr-car-rental.vercel.app/',
        image: '/projects/cmr.png',
      },
      {
        title: 'Portfolio Website',
        description: 'Personal portofolio webite menggunakan next.js dan tailwind css.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/ardi-juniawan/ardijuniawan-portofolio',
        demoLink: 'https://ardijuniawan-portofolio.vercel.app/',
        image: '/projects/portfolio.png',
      }
  ];