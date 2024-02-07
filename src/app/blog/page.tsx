//import { Container, Typography } from '@material-ui/core';
import React from 'react';

import { BlogList } from '@/components/BlogList';
import FeaturedBlog from '@/components/FeaturedBlog';
import Footer from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';

const BlogHomePage = () => {
  return (
    <div className='flex min-h-screen flex-col px-2'>
      <NavigationHeader />
      <main className='flex-1 p-4 md:p-6'>
        <section className='mb-8 flex w-full justify-center'>
          <FeaturedBlog />
        </section>
        <div className='mx-auto grid w-[1000px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogHomePage;
