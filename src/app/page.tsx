
import React from 'react';
import Cards from './tutorias/page'

export default function Home():any {
  return (
    <main className='flex flex-col items-center justify-between p-12 text-black w-full'>
      <Cards />
    </main>
  );
  }