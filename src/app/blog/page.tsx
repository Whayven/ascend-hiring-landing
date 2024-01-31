//import { Container, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

import { BlogList } from '@/components/BlogList';
import Button from '@/components/buttons/Button';
import Footer from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';

const BlogHomePage = () => {
  return (
    <div className='flex min-h-screen flex-col px-2'>
      <NavigationHeader />
      <main className='flex-1 p-4 md:p-6'>
        <section className='mb-8'>
          <Image
            alt='Cover image'
            className='aspect-video overflow-hidden rounded-lg object-cover'
            height='400'
            src='/images/og.png'
            width='1200'
          />
          <div className='mt-4'>
            <h2 className='text-3xl font-bold'>Featured Post Title</h2>
            <p className='text-gray-500 dark:text-gray-400'>Author Name</p>
            <p className='text-gray-600 dark:text-gray-300'>
              This is a preview of the featured blog post. Click here to read
              more.
            </p>
            <Button className='mt-4' variant='outline'>
              Read More
            </Button>
          </div>
        </section>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogHomePage;
