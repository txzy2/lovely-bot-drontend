import { ServerCrash } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-1 text-xl font-bold'>
        <div className='flex items-center gap-1'>
          <ServerCrash /> 404
        </div>
        <span>Страница не найдена</span>
      </div>

      <Link className='underline' to='/'>
        <code>Домой</code>
      </Link>
    </div>
  );
};

export default NotFound;
