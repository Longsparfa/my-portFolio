import React from 'react';

//w-[150px] h-[52px] rounded-[50px] text-2xl text-bold flex align-center justify-center m-0 bt-divgradient text-#fff cursor-pointer tansition-0.5s ease relative overflow-hidden opacity-0.5 md:w-[150px] h-[52px] text-2x1 mb-0

//border-none rounded-lg text-white flex absolute top-0 left-0 w-[100%] h-[100%] bt-gradient tansition duration-0.4s ease opacity-0.5 font-20px font-600 flex align-center justify-center cursor-pointer box-shadow hover:opacity-0 focus:outline-none

const Button = () => {
  return (
    <div className='w-[262px] h-[60px] rounded-[50px] text-[24px] text-[600] flex align-center justify-center mt-0 mx-0 mb-[80px] text-[#fff] bg-[#d0bb57] cursor-pointer transition 0.5s ease relative overflow-hidden opacity-100 sm:text-[16px] sm:w-[100%] sm:h-[32px] '>
        <a href='mailto:longsparfa@gmail.com' className='text-center pt-2'>Ask Me</a>
    </div>
  );
}

export default Button;