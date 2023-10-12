'use client';

import { Dialog } from '@headlessui/react';
import {
  ArrowPathIcon,
  BanknotesIcon,
  ChartBarIcon,
  ClockIcon,
  LockClosedIcon,
  PencilIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import logo from 'public/images/ascend_logo.png';
import * as React from 'react';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import { ItemSection } from '@/components/ItemSection';
import UnderlineLink from '@/components/links/UnderlineLink';

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

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Company', href: '#' },
];

const features = [
  {
    title: 'Create Job Posts',
    description:
      'Effortlessly create and publish job posts that attract top talent.',
    icon: <PencilIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Rapidly Screen Candidates',
    description:
      'Our AI-powered screening process quickly identifies the best candidates for your job.',
    icon: <ChartBarIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Automate Interviews',
    description:
      'Our automated interview process saves you time and energy by interviewing candidates for you.',
    icon: <ArrowPathIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Background Checks',
    description:
      'We run background checks on all candidates to ensure that they are qualified for your job.',
    icon: <LockClosedIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  // ... (add more features)
];

const benefits = [
  {
    title: 'Save Time',
    description:
      'Our automated hiring process saves you time and energy by interviewing candidates for you.',
    icon: <ClockIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Save Money',
    description:
      'Our automated hiring process saves you money by interviewing candidates for you.',
    icon: <BanknotesIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Find the Best Candidates',
    description:
      'Our automated hiring process finds the best candidates for you.',
    icon: <UsersIcon className='h-7 w-7' />, // Adjust the path as needed
  },
  {
    title: 'Hire with Confidence',
    description:
      'Our automated hiring process gives you confidence in your hiring decisions.',
    icon: <ShieldCheck className='h-7 w-7' />, // Adjust the path as needed
  },
];

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Ascend Hire</span>
              {logo && <Image src={logo} alt='' height={72} width={72} />}
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <UnderlineLink
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </UnderlineLink>
            ))}
          </div>
          {/* Spacing */}
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Ascend Hire</span>
                <Image
                  className='h-8 w-auto'
                  src={logo}
                  alt=''
                  height={84}
                  width={84}
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='bg-blue relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='bg-blue absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-black opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Revolutionize Your Hiring Process with Ascend Hiring
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              We use AI and automation to streamline your recruitment process,
              saving time and resources while finding the perfect candidates.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button>Get started</Button>
              <TextButton className='text-sm font-semibold leading-6 text-gray-900'>
                Learn more <span aria-hidden='true'>→</span>
              </TextButton>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white to-black  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

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
      <Hero />

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
