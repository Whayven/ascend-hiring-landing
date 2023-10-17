/* eslint-disable no-console */
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch('/api/email', request);

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send the email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='to-from from-primary-100 to-primary-700 relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Join The Waitlist!
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Let's keep in touch! We'll let you know when we're ready to launch.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                {...register('firstName', { required: true })} // Updated this line
                type='text'
                id='firstName' // Updated this line
                autoComplete='given-name'
                className='focus:ring-primary-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                {...register('lastName', { required: true })} // Updated this line
                type='text'
                id='lastName'
                autoComplete='family-name'
                className='focus:ring-primary-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Company
            </label>
            <div className='mt-2.5'>
              <input
                {...register('company', { required: true })} // Updated this line
                type='text'
                id='company'
                autoComplete='organization'
                className='focus:ring-primary-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                {...register('email', { required: true })} // Updated this line
                type='email'
                id='email'
                autoComplete='email'
                className='focus:ring-primary-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                {...register('message')} // Updated this line
                id='message'
                rows={4}
                className='focus:ring-primary-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                defaultValue=''
                placeholder='Feel free to leave a suggestion or send us a message.'
              />
            </div>
          </div>
          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-primary-600' : 'bg-gray-200',
                  'focus-visible:outline-primary-600 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className='text-sm leading-6 text-gray-600'>
              By selecting this, you agree to our{' '}
              <a href='#' className='text-primary-600 font-semibold'>
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
