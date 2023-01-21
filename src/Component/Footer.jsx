import { Box} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

const Footer = () => {
    return (
      <Box className='px-4 mt-3 divide-y text-white' bgcolor={colors.primary[500]}>
        <div className='container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0'>
          <div className='lg:w-1/3'>
            <Link
              rel='noopener noreferrer'
              to='/'
              className='flex justify-center space-x-4 lg:justify-start'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-violet-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  fill='currentColor'
                  className='flex-shrink-0 w-5 h-5 rounded-full text-gray-900'>
                  <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                </svg>
              </div>
              <span className='self-center text-2xl font-semibold'>tričko</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4'>
            <div className='space-y-3'>
              <h3 className='tracking-wide uppercase text-gray-50'>Contents</h3>
              <ul className='space-y-1'>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='uppercase text-gray-50'>Developers</h3>
              <ul className='space-y-1'>
                <li>
                  <a
                    rel='noopener noreferrer'
                    href='https://singular-mooncake-bead22.netlify.app/'
                    target='_blank'>
                    Fardin Khan
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <div className='uppercase text-gray-50'>Social media</div>
              <div className='flex justify-start space-x-3'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://www.facebook.com/profile.php?id=100074017012643'
                  title='Facebook'
                  className='flex items-center p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                    className='w-5 h-5 fill-current'>
                    <path d='M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z'></path>
                  </svg>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/fardinkhan121199/'
                  title='Linkedin'
                  className='flex items-center p-1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-current'>
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                  </svg>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/KPorus'
                  title='GitHub'
                  className='flex items-center p-1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-current'>
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-6 text-sm text-center text-gray-400'>
          © 2023 Company Co. All rights reserved.
        </div>
      </Box>
    );
};

export default Footer;