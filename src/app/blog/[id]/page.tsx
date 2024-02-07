//import { Container, Typography } from '@material-ui/core';
import fs from 'fs';
import matter from 'gray-matter'; // Used to extract frontmatter metadata
import Link from 'next/link';
import path from 'path';
import React from 'react';

import './style.css';

import Footer from '@/components/Footer';
import Markdown from '@/components/Markdown';
import { NavigationHeader } from '@/components/NavigationHeader';

const BlogPage = ({ params }: { params: { id: string } }) => {
  const markdown = fs.readFileSync(`src/app/_posts/${params.id}.md`, 'utf8');
  // Parse frontmatter and content using gray-matter
  const { content } = matter(markdown);
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
    <div className='flex min-h-screen flex-col px-2'>
      <NavigationHeader />
      <main className='flex flex-1 flex-col md:flex-row md:px-20 md:py-12'>
        <aside className='mt-12 md:mt-20 md:w-[250px] '>
          {/* <div className='mb-8'>
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
          </div> */}
          <div>
            <h2 className='text-lg font-semibold'>Recent Posts</h2>
            <ul className='mt-2 flex w-full flex-col items-start space-y-2'>
              {posts
                .sort((a, b) => {
                  return (
                    new Date(b.metadata.date).getTime() -
                    new Date(a.metadata.date).getTime()
                  );
                })
                .filter((_post, i) => {
                  return i < 3;
                })
                .map((post) => (
                  <li key={post.href}>
                    <Link
                      className='text-gray-600 hover:underline dark:text-gray-400'
                      href={post.href}
                    >
                      {post.metadata.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
        <div
          className='blog-content w-3/4'
          style={{ marginRight: '80px', marginLeft: '40px' }}
        >
          <Markdown>{content}</Markdown>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
