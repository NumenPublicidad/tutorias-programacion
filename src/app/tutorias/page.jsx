import { Tutorias } from '../components/Tutorias';
import { tutoriasData } from '../constants/constants';

export default function Cards() {
  return (
    <main className='flex flex-col items-center justify-between p-24 text-black w-full gap-12'>
      <div className='flex flex-col md:flex-row  w-full justify-center'>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[0], bgColor: 'red-500' }} />
        </div>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[1], bgColor: 'blue-300' }} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center'>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[2], bgColor: 'blue-400' }} />
        </div>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <Tutorias tutoria={{ ...tutoriasData[3], bgColor: 'green-500' }} />
        </div>
      </div>
    </main>
  );
}
