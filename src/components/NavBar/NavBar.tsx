import React from 'react'

const NavBar = () => {
  return (
    <div className="w-screen overflow-hidden flex justify-center items-center gap-72 flex-1">
      <div className="w-[113px] h-[38px] text-black text-[32px] font-bold font-['Roboto']">
        Planted
      </div>
      <div className="w-[318px] h-[97px] px-[57px] py-9 bg-white justify-center items-center gap-[26px] flex">
        <div className="w-[66px] h-8 text-black text-2xl font-bold font-['Nunito']">home</div>
        <div className="w-[66px] h-8 text-black text-2xl font-bold font-['Nunito']">about</div>
        <div className="w-[63px] h-8 text-black text-2xl font-bold font-['Nunito']">plans</div>
      </div>
      <div className="w-[114px] h-8 text-[#066f14] text-[32px] font-bold font-['Roboto']">
        Cart
        <br />
      </div>
    </div>
  )
}

export default NavBar
