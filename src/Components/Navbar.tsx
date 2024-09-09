"use client"
import React from 'react'
import Link from 'next/link'
import useShoppingCartStore from '../Store/store'

function Navbar() {
    const setShowShoppingCart = useShoppingCartStore((state)=> state.setShowShoppingCart)
    const totalQuantity = useShoppingCartStore((state)=> state.totalQuantity)
  return (
    <div className="navbar bg-base-100 fixed z-50 bg-white">
        <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost text-xl">BBShop</Link>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={setShowShoppingCart}>
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{totalQuantity}</span>
                </div>
            </div>
            
            </div>
            <div className="dropdown dropdown-end">
           
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <input type='text' className='input' placeholder='Search'/>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
  )
}

export default Navbar
