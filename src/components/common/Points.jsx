import React from 'react'
import clsx from 'clsx';
import { Link } from 'react-router-dom';


export default function Points({length, active}) {
  const dots = [];

  for (let i = 1; i <= length; i++) {
    dots.push(
       <Link to={`../onboarding${i}`} relative="path"  >
      <div
        key={i}
        className={clsx(
          'w-3 h-3 rounded-4xl',
          i === active ? 'bg-ngreen' : 'bg-nlgrey'
        )}
      >
        </div>
       </Link>
    );
  }

  return (
    <div className='flex justify-center'>
    <div className="flex space-x-3 pt-10.5 pb-17 mx-auto">
      {dots}
    </div>

    </div>
  );
}
