//import { Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='flex items-center justify-between bg-white p-6 dark:bg-gray-800'>
        <Link
          className='text-2xl font-bold text-gray-900 dark:text-gray-100'
          href='#'
        >
          Ascend Hiring Blog
        </Link>
        <nav className='space-x-4'>
          <Link
            className='text-gray-600 hover:underline dark:text-gray-400'
            href='#'
          >
            About
          </Link>
          <Link
            className='text-gray-600 hover:underline dark:text-gray-400'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex flex-1 flex-col md:flex-row md:px-6 md:py-12'>
        <div className='flex-1 md:pr-8'>
          <article className='prose prose-gray dark:prose-dark max-w-none'>
            <h1 className='text-4xl font-bold'>
              Revolutionizing Recruitment: How Ascend Hiring is Reshaping Talent
              Acquisition
            </h1>
            <br />
            <p>
              According to Aptitude Research,{' '}
              <b>
                recruiters spend up to 16 hours per week scheduling calls and 10
                hours looking for candidates in their ATS
              </b>
              . Additionally, 32% of recruiters surveyed are looking for other
              career opportunities.
            </p>
            <br />
            <h2>The Time Crunch: Addressing the Recruitment Bottleneck</h2>
            <p>
              Recruiters juggle multiple responsibilities daily, from sourcing
              candidates to coordinating interviews and managing communications.
              However, the burden of manual scheduling and candidate tracking
              consumes valuable time and energy, diverting focus from strategic
              recruitment initiatives. Ascend Hiring tackles this time crunch
              head-on by automating scheduling processes and streamlining
              candidate tracking within its intuitive platform. With intelligent
              algorithms and user-friendly interfaces, recruiters can bid
              farewell to endless email chains and spreadsheet chaos, reclaiming
              precious hours to invest in building meaningful connections with
              potential hires.
            </p>
            <h2>Navigating the ATS Maze: Simplifying Candidate Management</h2>
            <p>
              The Applicant Tracking System, once hailed as a recruitment
              game-changer, has evolved into a labyrinth of candidate profiles
              and outdated information. As recruiters struggle to navigate
              through the clutter, valuable candidates slip through the cracks,
              leading to missed opportunities and lost talent. Ascend Hiring
              transforms candidate management by seamlessly integrating with
              existing ATS platforms, providing recruiters with a centralized
              hub for candidate interaction and data analysis. With real-time
              updates and customizable workflows, recruiters gain unparalleled
              visibility into the recruitment pipeline, empowering informed
              decision-making and enhancing candidate engagement.
            </p>
            <h2>
              Cultivating a Culture of Empowerment: Retaining Top Talent in the
              Digital Era
            </h2>
            <p>
              The exodus of recruiters seeking greener pastures underscores a
              pressing need for organizational change and employee empowerment.
              As recruiters grapple with burnout and disengagement, companies
              risk losing invaluable expertise and industry knowledge,
              jeopardizing long-term growth and sustainability. Ascend Hiring
              champions a culture of empowerment by equipping recruiters with
              the tools and resources needed to thrive in a digital-first
              environment. Through ongoing training and professional development
              initiatives, recruiters gain mastery over innovative technologies
              and best practices, fostering a culture of collaboration and
              continuous learning.
            </p>
            <h2>Embracing the Future of Recruitment: Ascend Hiring's Vision</h2>
            <p>
              As we stand at the precipice of a new era in recruitment, Ascend
              Hiring remains steadfast in its commitment to redefining industry
              norms and empowering recruiters to reach new heights of success.
              By harnessing the power of automation and data-driven insights,
              Ascend Hiring paves the way for a future where recruitment
              transcends boundaries and embraces limitless possibilities. In
              conclusion, the statistics provided by Aptitude Research serve as
              a stark reminder of the urgent need for transformative change
              within the recruitment landscape. With Ascend Hiring leading the
              charge, recruiters can bid farewell to manual inefficiencies and
              embrace a future where talent acquisition is defined by
              innovation, agility, and unparalleled excellence.
            </p>
            <p>
              Join us on the journey towards a brighter tomorrow, where every
              hire is a testament to the limitless potential of human ingenuity.
              Together, let us ascend to new heights of recruitment excellence
              with Ascend Hiring by our side.
            </p>
          </article>
        </div>
        <aside className='mt-12 md:mt-0 md:w-80 md:pl-8'>
          <div className='mb-8'>
            <h2 className='text-lg font-semibold'>Categories</h2>
            <ul className='mt-2 space-y-2'>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-600 hover:underline dark:text-gray-400'
                  href='#'
                >
                  Personal
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
                  href='#'
                >
                  Post Title 1
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
        </aside>
      </main>
      <footer className='flex h-20 items-center justify-center bg-white dark:bg-gray-800'>
        <p className='text-gray-600 dark:text-gray-400'>© 2024 My Blog</p>
      </footer>
    </div>
  );
};

export default BlogPage;
