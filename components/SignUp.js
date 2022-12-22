import Image from 'next/image'
import logo from '../assets/decentlogo.png'
import { useWallet } from '@solana/wallet-adapter-react'
import Swal from 'sweetalert2'

const SignUp = ({ setRegistered, name, setName, url, setUrl }) => {
  const style = {
    wrapper: `flex flex-col p-4 justify-center items-center h-full w-full bg-[#252526] w-min h-min rounded-2xl`,
    title: `text-[#afb3b8] font-semibold text-lg pb-6`,
    form: `flex flex-col items-center`,
    fieldContainer: `my-4 `,
    inputTitle: `text-[#afb3b8] font-semibold mb-2 ml-3`,
    inputContainer: `flex items-center w-[20rem] bg-[#3a3b3d] rounded-full`,
    inputField: `bg-transparent flex-1 m-2 outline-none text-white px-2`,
    randomUrl: `h-full bg-[#2d2d2d] hover:bg-[#252626] text-white px-2 py-1 mx-1 hover:px-3 rounded-full cursor-pointer duration-[0.2s] ease-in-out`,
    submitButton: `bg-[#3a3b3d] text-white font-semibold px-4 py-2 hover:px-6 rounded-full cursor-pointer duration-[0.2s] ease-in-out`,
  }


  const wallet = useWallet()
  function checkWallet() {
   
    if (!wallet.connected) {
      console.log("Wallet not connected")
      setRegistered(false)

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Please connect phantom wallet from navigation menu'
      })
    }else{
       createUser()
    }
  }


  const createUser = async event => {

    setRegistered(true)
    const resp = await window.solana.connect()
    const walletAddress = resp.publicKey.toString()

    try {
      await fetch(`/api/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userWalletAddress: walletAddress,
          name: name,
          profileImage: event.target.url.value,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }


const generateRandomProfileImageUrl = () =>
  setUrl(
    `https://avatars.dicebear.com/api/pixel-art-neutral/${Math.floor(
      Math.random() * 100,
    )}.svg`,
  )

return (
  <div className={style.wrapper}>
    <div className={style.logoContainer}>
      <Image
        src={logo}
        height={70}
        width={70}
        alt='solana logo'
      />
    </div>
    <div className={style.title}>Please sign up to use Decent</div>
    {/* <form onSubmit={createUser} className={style.form}> */}
    <div className={style.fieldContainer}>
      <div className={style.inputTitle}>Name</div>
      <div className={style.inputContainer}>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          required
          className={style.inputField}
        />
      </div>
    </div>
    <div className={style.fieldContainer}>
      <div className={style.inputTitle}>Profile Image URL</div>
      <div className={style.inputContainer}>
        <input
          value={url}
          onChange={event => setUrl(event.target.value)}
          required
          className={style.inputField}
        />
        <div
          className={style.randomUrl}
          onClick={() => generateRandomProfileImageUrl()}
        >
          Random
        </div>
      </div>
    </div>
    <button className={style.submitButton} type='submit' onClick={checkWallet}>
      Sign Up
    </button>

  </div>
)
}

export default SignUp
