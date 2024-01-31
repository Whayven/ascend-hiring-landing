import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import React from 'react';

import Button from '@/components/buttons/Button';

export const BlogList = () => {
  const postDir = path.join(process.cwd(), 'src/app/_posts');
  const postLinks = fs
    .readdirSync(postDir)
    .map((file) => file.replace('.md', ''));

  return (
    <>
      {postLinks.map((postLink, i) => {
        return (
          <div key={i} className='rounded-lg border border-gray-200 p-4'>
            <h3 className='text-xl font-bold capitalize'>
              {postLink.replace('-', ' ')}
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>Author Name</p>
            <p className='text-gray-600 dark:text-gray-300'>
              This is a preview of the blog post. Click here to read more.
            </p>
            <Button className='mt-2' variant='outline'>
              <Link href={`/blog/${postLink.replace('.md', '')}`}>
                {' '}
                Read More{' '}
              </Link>
            </Button>
          </div>
        );
      })}
    </>
  );
};
