'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

import BenefitSection from '@/components/BenefitSection';
import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import ContactSection from '@/components/ContactSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import logo from '~/images/ascend_logo.png';

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
  { name: 'Features', href: '#features' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'Company', href: `/company` },
];

const Hero = (props: {
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}) => {
  const { refs } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Ascend Hiring</span>
              {logo && (
                <Image
                  src={logo}
                  alt='Ascend Hiring ATS Candidate Management Software'
                  height={72}
                  width={72}
                />
              )}
            </Link>
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
                onClick={(e) => {
                  if (!item.href.startsWith('#')) return;
                  e.preventDefault();
                  const ref = refs.find(
                    (ref) => ref.current?.id === item.href.substring(1)
                  );
                  if (ref) {
                    ref.current?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
                <span className='sr-only'>Ascend Hiring</span>
                <Image
                  className='h-8 w-auto'
                  src={logo}
                  alt='Ascend Hiring ATS Candidate Management Software'
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
                    <UnstyledLink
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </UnstyledLink>
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
            className='from-primary-100 to-primary-700 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
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
              saving you time and resources while finding the perfect
              candidates.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  const ref = refs.find((ref) => ref.current?.id === 'contact');
                  if (ref) {
                    ref.current?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get started
              </Button>
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
            className='from-primary-100 to-primary-700 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
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

export default function HomePage() {
  const benefitsRef = React.useRef<HTMLDivElement | null>(null);
  const featuresRef = React.useRef<HTMLDivElement | null>(null);
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className='min-h-screen flex-1 bg-gray-100 font-sans text-gray-900'>
      <Hero refs={[featuresRef, benefitsRef, contactRef]} />

      {/* Add the rest of your content sections here, like "Features", "Benefits", etc., and style them with Tailwind CSS classes */}
      <div id='features' ref={featuresRef}>
        {/* <ItemSection title='Key Features' items={features} /> */}
        <FeatureSection />
      </div>

      <div id='benefits' ref={benefitsRef}>
        <BenefitSection />
      </div>
      <div id='contact' ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
