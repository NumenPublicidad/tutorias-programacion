// Home.js

import React from 'react';
import { Tutorias } from './components/Tutorias';
import { tutoriasData } from './constants/constants';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='flex flex-col md:flex-row gap-8 w-full justify-center'>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[0], bgColor: 'orange-300' }} />
        </div>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[1], bgColor: 'blue-300' }} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8 w-full justify-center'>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[2], bgColor: 'green-300' }} />
        </div>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[3], bgColor: 'yellow-300' }} />
        </div>
      </div>
    </main>
  );
}
