'use client';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '@/components/Footer';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { privacyPolicies } from './_data';

import logo from '~/images/ascend_logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Company', href: `/company` },
];

export default function PrivacyPolicy() {
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
        <h1 className='mb-4 text-4xl font-bold'>Privacy Policy</h1>

        <p className='mb-6 text-gray-700'>
          <strong>Last Updated:</strong> October 17, 2023
        </p>

        {privacyPolicies.map((item, i) => (
          <div key={i} className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold'>{item.title}</h2>
            <p className='text-gray-700'>
              {item.content.split('\n').map((str, index, array) => (
                <>
                  {str}
                  {/* Avoid adding a <br /> after the last line */}
                  {index === array.length - 1 ? null : <br />}
                </>
              ))}
            </p>
          </div>
        ))}

        <h2 className='mb-2 text-2xl font-semibold'>Contact Us</h2>
        <p className='mb-4 text-gray-700'>
          For any questions or concerns regarding this Privacy Policy, please
          contact us at:
        </p>
        <ul className='list-disc pl-6'>
          <li className='mb-2 text-gray-700'>
            Email:{' '}
            <a
              href='mailto:support@ascendhiring.com'
              className='text-indigo-600 hover:underline'
            >
              support@ascendhiring.com
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
