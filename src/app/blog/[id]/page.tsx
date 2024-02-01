//import { Container, Typography } from '@material-ui/core';
import fs from 'fs';
import matter from 'gray-matter'; // Used to extract frontmatter metadata
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Footer from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';

const BlogPage = ({ params }: { params: { id: string } }) => {
  const markdown = fs.readFileSync(`src/app/_posts/${params.id}.md`, 'utf8');
  // Parse frontmatter and content using gray-matter
  const { content } = matter(markdown);
  return (
    <div className='flex min-h-screen flex-col px-2'>
      <NavigationHeader />
      <main className='flex flex-1 flex-col md:flex-row md:px-20 md:py-12'>
        {/* <aside className='mt-12 md:mt-20 md:w-80 md:pl-8'>
          <div className='mb-8'>
            <h2 className='text-lg font-semibold'>Categories</h2>
            <ul className='mt-2 space-y-2'>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Supercharging Recruitment
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Applicant Management (ATS)
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Candidate Experience
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>Recent Posts</h2>
            <ul className='mt-2 space-y-2'>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='/'
                >
                  Candidate Management
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Post Title 2
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Post Title 3
                </Link>
              </li>
            </ul>
          </div>
        </aside> */}
        <div
          className='blog-content'
          style={{ marginRight: '80px', marginLeft: '40px' }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
