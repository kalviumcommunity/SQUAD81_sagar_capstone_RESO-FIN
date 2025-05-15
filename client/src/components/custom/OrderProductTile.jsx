import React from 'react';

const OrderProductTile = () => {
  return (
    <div className='flex justify-between items-center p-4 rounded-lg bg-gray-100 dark:bg-zinc-900'>
      <img 
        src="https://images.pexels.com/photos/1365264/pexels-photo-1365264.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Product"
        className='w-20 sm:w-24 rounded-lg object-cover'
      />

      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 ml-4'>
        <h1 className='font-semibold text-sm sm:text-base mb-2 sm:mb-0'>Cosmic Byte Keyboard</h1>
        <p className='flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-customGray'>
          <span className='font-semibold'>
            Color: <span style={{ backgroundColor: "#ffffff", padding: '0 4px' }}>#ffffff</span>
          </span>
          <span className='hidden sm:block'>|</span>

          <span className='font-semibold'>
            QTY: <span className='font-medium text-yellow-300'>2</span>
          </span>
          <span className='hidden sm:block'>|</span>

          <span className='font-semibold'>
            Price: <span className='font-medium text-yellow-300'>₹ 260</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderProductTile;