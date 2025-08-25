import React from 'react';

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 lg:text-left text-centre prata-regular'>
      <p className='text-gray-500'>{text1}<span className='text-gray-700 font-medium ml-3'>{text2}</span></p>
      <p className='w-12 sm:w-16 h-[1px] sm:h-[2px] bg-gray-700 mt-3'></p>
    </div>
  );
}

export default Title;
