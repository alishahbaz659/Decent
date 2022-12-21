import { useState,useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/decentlogo.png'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { BsDisplay } from 'react-icons/bs'
import { RiGroup2Line } from 'react-icons/ri'
import { SiFacebookgaming } from 'react-icons/si'
import solanaLogo from '../assets/sol.png'
import useWalletBalance from '../context/useWalletBalance'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
require('@solana/wallet-adapter-react-ui/styles.css')

const Header = ({ name, url }) => {
  const [balance] = useWalletBalance()

  useEffect(() => {
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
  }
});

  const style = {
    wrapper: `flex items-center w-full h-[4rem] justify-around px-[1rem] py-[0.2rem] sticky top-0 bg-[#252526] shadow-[0px 5px 8px -9px rgba(0, 0, 0, 0.75)] z-20`,
    headerLeft: `flex justify-center gap-[0.6rem]`,
    facebookLogo: `items-center flex object-contain`,
    searchContainer: `flex items-center bg-[#3a3b3d] max-w-[10rem] rounded-full py-2 px-2 text-[#b0b3b8]`,
    searchInput: `border-none px-[0.6rem] bg-transparent outline-none w-[15rem] text-white placeholder:text-[#b0b3b8]`,
    headerCenterContainer: `flex-1 flex items-center justify-center h-full`,
    headerCenterWrapper: `flex justify-center h-full py-2`,
    centerNavIconContainer: `flex items-center px-[1.8rem] cursor-pointer duration-[0.5s]  hover:bg-[#555657] rounded-[10px]`,
    centerNavIcon: `text-2xl text-[#666]`,
    headerRight: `flex h-min`,
    headerRightButton: `flex items-center px-3 mx-2 rounded-[0.2rem] cursor-pointer`,
    userInfo: `bg-[#31e3bd] hover:bg-[#438791]`,
    userName: `font-bold ml-2 text-black`,
    userImage: `rounded-full object-cover`,
    balanceContainer: `bg-[#ec55bc] hover:bg-[#572079] text-black`,
    balanceIcon: `object-covers`,
    balanceText: `text-white font-bold ml-2`,
  }
  return (
    // <div className={style.wrapper}>
    //   <div className={style.headerLeft}>
    //     <Image
    //       className={style.facebookLogo}
    //       src={logo}
    //       alt=''
    //       height={30}
    //       width={30}
    //     />
    //     <div className={style.searchContainer}>
    //       <AiOutlineSearch />
    //       <input
    //         type='text'
    //         className={style.searchInput}
    //         placeholder='Search Decent'
    //       />
    //     </div>
    //   </div>
      // <div className={style.headerCenterContainer}>
      //   <div className={style.headerCenterWrapper}>
      //     <div className={style.centerNavIconContainer}>
      //       <AiFillHome className={style.centerNavIcon} />
      //     </div>
    //       <div className={style.centerNavIconContainer}>
    //         <BsDisplay className={style.centerNavIcon} />
    //       </div>
    //       <div className={style.centerNavIconContainer}>
    //         <RiGroup2Line className={style.centerNavIcon} />
    //       </div>
    //       <div className={style.centerNavIconContainer}>
    //         <SiFacebookgaming className={style.centerNavIcon} />
    //       </div>
    //     </div>
    //   </div>
      // <div className={style.headerRight}>
      //   {name && (
      //     <div className={`${style.userInfo} ${style.headerRightButton}`}>
      //       <Image
      //         src={url || "https://avatars.dicebear.com/api/pixel-art-neutral/7.svg"}
      //         height={20}
      //         width={20}
      //         className={style.userImage}
      //         alt='user image'
      //       />
      //       <div className={style.userName}>{name}</div>
      //     </div>
      //   )}
      //   <WalletMultiButton />
      //   <div className={`${style.balanceContainer} ${style.headerRightButton}`}>
      //     <Image
      //       className={style.balanceIcon}
      //       src={solanaLogo}
      //       height={20}
      //       width={20}
      //       alt='solana logo'
      //     />
      //     <div className={style.balanceText}>{balance.toFixed(2)} SOL</div>
      //   </div>
      // </div>
    // </div>

<nav className="flex items-center justify-between w-full flex-wrap bg-teal p-6">
  <div className="flex items-center flex-no-shrink text-white mr-6">
  <div className={style.headerLeft}>
        <Image
          className={style.facebookLogo}
          src={logo}
          alt=''
          height={30}
          width={30}
        />
        <div className={style.searchContainer}>
        
          <input
            type='text'
            className={style.searchInput}
            placeholder='Search here'
          />
        </div>
      </div>
      
  </div>

  <div className="contents lg:hidden">
    <button id="nav-toggle" data-collapse-toggle="navbar-sticky" aria-controls="navbar-sticky" aria-expanded="false" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="nav-content">
   
    <div className="text-sm lg:flex-grow"  style={{textAlign:'center'}}>
      
      <a className="block mt-4 lg:inline-flex lg:mt-0 text-teal-lighter hover:text-white mr-4">
          <div className={style.centerNavIconContainer} style={{justifyContent:'center'}}>
            <AiFillHome className={style.centerNavIcon} />
            <p style={{color:'white',paddingLeft:'5px'}}>Home</p>  
          </div>
          
      {/* asd */}
      </a>
      <a  className="block mt-4 lg:inline-flex lg:mt-0 text-teal-lighter hover:text-white mr-4">
          <div className={style.centerNavIconContainer} style={{justifyContent:'center'}}>
          <BsDisplay className={style.centerNavIcon}></BsDisplay>
          <p style={{color:'white',paddingLeft:'5px'}}>Videos</p>
          </div>

      </a>
      
      <a className="block mt-4 lg:inline-flex lg:mt-0 text-teal-lighter hover:text-white mr-4">  
          <div className={style.centerNavIconContainer} style={{justifyContent:'center'}}>
          <RiGroup2Line className={style.centerNavIcon} />
          <p style={{color:'white',paddingLeft:'5px'}}>Groups</p>
          </div>
      </a>
      <a className="block mt-4 lg:inline-flex lg:mt-0 text-teal-lighter hover:text-white mr-4">
          <div className={style.centerNavIconContainer} style={{justifyContent:'center'}}>
          <SiFacebookgaming className={style.centerNavIcon} />
          <p style={{color:'white',paddingLeft:'5px'}}>Gaming </p>
          </div> 
      </a>
    </div>
    
    <div style={{display:'flex',justifyContent:'center'}}>
    
      <a  className="inline-block text-sm px-4 py-2 leading-none  mt-2 lg:mt-0">
      <div className={style.headerRight}>
        <WalletMultiButton/>
      </div>
      </a>
      
  
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    
    <a >
    <div className={style.headerRight}>
      
      <div className={`${style.balanceContainer} ${style.headerRightButton}`} 
      style={{padding:'12px 28px 15px 28px'}}>
        <Image
          className={style.balanceIcon}
          src={solanaLogo}
          height={20}
          width={20}
          alt='solana logo'
        />
        <div className={style.balanceText}>{balance.toFixed(2)} SOL</div>
      </div>
    </div>
    </a>
    

  </div>
  </div>
</nav>

  )
}

export default Header
