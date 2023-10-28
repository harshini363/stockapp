"use client"
import link from 'next/link';
import Image from 'next/image';
import {useState,useEffect} from 'react';

const Nav = () => {
  return (
    <nav className="bg-purple-200 w-full p-4">
      	 <div className="max-w flex items-center  justify-between">
        <div className="text-white text-2xl font-bold">GrowwStonks</div>
        <div className=" w-1/2 flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 align-right"
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav