'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '@/components/Footer';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import logo from '~/images/ascend_logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Company', href: `/company` },
];

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen flex-1 font-sans text-gray-900'>
      <div className='bg-white p-8'>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav
            className='flex items-center justify-between p-6 lg:px-8'
            aria-label='Global'
          >
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Ascend Hiring</span>
                {logo && (
                  <Image
                    src={logo}
                    alt='Ascend Hiring ATS Candidate Management Software'
                    height={72}
                    width={72}
                  />
                )}
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
      </div>

      <div className='px-8 pt-24'>
        <h1 className='mb-8 text-4xl font-bold'>About Ascend Hiring</h1>

        <section className='mb-8'>
          <h2 className='mb-4 text-3xl font-bold'>Our Story</h2>
          <p className='text-lg'>
            Ascend Hiring is a pioneering AI Recruiting and Onboarding company,
            founded by the dynamic duo of Abhishek De and Wayne Foster Jr. With
            a shared passion for revolutionizing the hiring and onboarding
            process, Abhishek and Wayne embarked on a mission to redefine the
            way organizations discover and engage with exceptional talent.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-3xl font-bold'>What Sets Us Apart</h2>
          <ul className='list-disc pl-5 text-lg'>
            <li>
              Innovation: Ascend Hiring is perpetually committed to staying at
              the vanguard of AI and HR technology, ceaselessly refining our
              solutions to meet the ever-evolving demands of the job market.
            </li>
            <li>
              Diversity and Inclusion: We fervently advocate for diverse hiring
              practices, firmly convinced that diverse teams are pivotal to
              success. Our tools are thoughtfully designed to mitigate bias and
              champion fair hiring practices.
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-3xl font-bold'>Our Mission</h2>
          <p className='text-lg'>
            Our mission is underpinned by the aspiration to create a world where
            the processes of recruitment and onboarding become catalysts for
            growth, connection, and triumph. We are unwavering in our dedication
            to harness the capabilities of AI-driven solutions, ensuring that
            the recruitment and onboarding experience is characterized by
            transparency, equity, and efficiency, ultimately fostering the
            prosperity of businesses and individuals alike.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-3xl font-bold'>Our priorities</h2>
          <ul className='list-disc pl-5 text-lg'>
            <li>
              User-Centric Approach: Our unwavering commitment to prioritizing
              user experience is manifested through the creation of intuitive,
              user-friendly platforms for both job seekers and employers.
            </li>
            <li>
              Data Security: We accord the utmost priority to data security,
              diligently implementing robust measures to safeguard the personal
              information of our users and clients.
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-3xl font-bold'>Join Us on the Journey</h2>
          <p className='text-lg'>
            At Ascend Hiring, we cordially invite you to partake in this
            exhilarating journey to redefine the realms of recruitment and
            onboarding. Whether you are a job seeker in pursuit of your dream
            career or an employer in search of exceptional talent, we stand
            ready to provide unwavering support at every juncture. Together, we
            can ascend to new heights within the realm of hiring and HR. We
            express our sincere gratitude for selecting Ascend Hiring as your
            strategic partner on this transformative journey
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
