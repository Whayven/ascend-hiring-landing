import fs from 'fs';
import matter from 'gray-matter'; // Used to extract frontmatter metadata
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';

import Button from '@/components/buttons/Button';

const FeaturedBlog = () => {
  const postDir = path.join(process.cwd(), 'src/app/_posts');
  const postLinks = fs
    .readdirSync(postDir)
    .map((file) => file.replace('.md', ''));

  const post = postLinks
    .map((postLink) => {
      const filePath = path.join(postDir, `${postLink}.md`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // Parse frontmatter and content using gray-matter
      const { data, content } = matter(fileContent);

      return {
        metadata: data,
        content: content,
        href: `/blog/${postLink}`,
      };
    })
    .filter((post) => post.metadata.featured == true)[0];

  return postLinks ? (
    <div>
      <Image
        alt='Cover image'
        className='aspect-video overflow-hidden rounded-lg object-cover'
        height='100'
        src='/images/optimistic-future.jpeg'
        width='1000'
      />
      <div className='mt-4'>
        <h2 className='text-3xl font-bold capitalize'>{post.metadata.title}</h2>
        <p className='text-gray-500 dark:text-gray-400'>
          By {post.metadata.author}
        </p>
        <p className='text-gray-600 dark:text-gray-300'>
          {post.metadata.preview}...
        </p>
        <Button className='mt-4' variant='outline'>
          <Link href={post.href}> Read More </Link>
        </Button>
      </div>
    </div>
  ) : null;
};

export default FeaturedBlog;
