import fs from 'fs';
import matter from 'gray-matter'; // Used to extract frontmatter metadata
import Link from 'next/link';
import path from 'path';
import React from 'react';

import Button from '@/components/buttons/Button';

export const BlogList = () => {
  const postDir = path.join(process.cwd(), 'src/app/_posts');
  const postLinks = fs
    .readdirSync(postDir)
    .map((file) => file.replace('.md', ''));

  const posts = postLinks.map((postLink) => {
    const filePath = path.join(postDir, `${postLink}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse frontmatter and content using gray-matter
    const { data, content } = matter(fileContent);

    return {
      metadata: data,
      content: content,
      href: `/blog/${postLink}`,
    };
  });

  return (
    <>
      {posts
        .filter((post) => post.metadata.featured == false)
        .map((post, i) => {
          return (
            <div key={i} className='rounded-lg border border-gray-200 p-4'>
              <h3 className='text-xl font-bold capitalize'>
                {post.metadata.title}
              </h3>
              <p className='text-gray-500 dark:text-gray-400'>
                {post.metadata.author}
              </p>
              <p className='text-gray-600 dark:text-gray-300'>
                {post.metadata.preview}...
              </p>
              <Button className='mt-2' variant='outline'>
                <Link href={post.href}> Read More </Link>
              </Button>
            </div>
          );
        })}
    </>
  );
};
