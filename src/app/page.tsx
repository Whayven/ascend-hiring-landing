'use client';

import {
  ArrowPathIcon,
  BanknotesIcon,
  ChartBarIcon,
  ClockIcon,
  LockClosedIcon,
  PencilIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { ItemSection } from '@/components/ItemSection';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const features = [
  {
    title: 'Create Job Posts',
    description:
      'Effortlessly create and publish job posts that attract top talent.',
    icon: <PencilIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Rapidly Screen Candidates',
    description:
      'Our AI-powered screening process quickly identifies the best candidates for your job.',
    icon: <ChartBarIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Automate Interviews',
    description:
      'Our automated interview process saves you time and energy by interviewing candidates for you.',
    icon: <ArrowPathIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Background Checks',
    description:
      'We run background checks on all candidates to ensure that they are qualified for your job.',
    icon: <LockClosedIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  // ... (add more features)
];

const benefits = [
  {
    title: 'Save Time',
    description:
      'Our automated hiring process saves you time and energy by interviewing candidates for you.',
    icon: <ClockIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Save Money',
    description:
      'Our automated hiring process saves you money by interviewing candidates for you.',
    icon: <BanknotesIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Find the Best Candidates',
    description:
      'Our automated hiring process finds the best candidates for you.',
    icon: <UsersIcon className='h-4 w-4' />, // Adjust the path as needed
  },
  {
    title: 'Hire with Confidence',
    description:
      'Our automated hiring process gives you confidence in your hiring decisions.',
    icon: <ShieldCheck className='h-4 w-4' />, // Adjust the path as needed
  },
];

const Contact = () => {
  return (
    <section id='contact' className='bg-white py-12'>
      <div className='container mx-auto text-center'>
        <h2 className='mb-8 text-3xl font-bold'>Get Started Today</h2>
        <p className='mb-8 text-lg'>
          Join Ascend Hiring and transform your hiring process. Contact us for a
          demo or more information.
        </p>
        <a
          href='mailto:info@ascendhiring.com'
          className='rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-700'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className='min-h-screen flex-1 bg-gray-100 font-sans text-gray-900'>
      <header className='bg-gray-800 text-white'>
        <nav className='container mx-auto flex items-center justify-between p-4'>
          <Link href='/' className='text-2xl font-bold'>
            Ascend Hiring
          </Link>
          <ul className='flex space-x-8'>
            <li>
              <a href='#features' className='hover:text-blue-400'>
                Features
              </a>
            </li>
            <li>
              <a href='#benefits' className='hover:text-blue-400'>
                Benefits
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-blue-400'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='hero bg-cover py-24 text-center'>
          <div className='container mx-auto'>
            <h1 className='mb-6 text-4xl'>
              Revolutionize Your Hiring Process with Ascend Hiring
            </h1>
            <p className='mb-12 text-xl'>
              We use AI and automation to streamline your recruitment process,
              saving time and resources while finding the perfect candidates.
            </p>
            <a
              href='#contact'
              className='rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-700'
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Add the rest of your content sections here, like "Features", "Benefits", etc., and style them with Tailwind CSS classes */}
      <ItemSection title='Key Features' items={features} />

      <ItemSection title='Benefits' items={benefits} />

      <Contact />

      <footer className='bg-gray-800 py-4 text-center text-white'>
        <div className='container mx-auto'>
          &copy; 2023 Ascend Hiring. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
