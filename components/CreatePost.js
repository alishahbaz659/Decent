import React, { useState } from 'react'
import Image from 'next/image'
import { BsFileImageFill, BsFillCameraVideoFill } from 'react-icons/bs'
import { FiRefreshCw } from 'react-icons/fi'
import 'react-simple-hook-modal/dist/styles.css'
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast'

const CreatePost = ({ savePost, getAllPosts, name, url }) => {
  const [input, setInput] = useState('')

  const style = {
    wrapper: `w-[100%] flex mt-[1rem] flex-col rounded-[0.6rem] bg-[#252526] p-2 pt-4 pb-0 shadow-[0px 5px 7px -7px rgba(0, 0, 0, 0.75)]`,
    formContainer: `flex pb-2`,
    buttonContainer: 'pb-2 mb-2 border-b border-[#404041]',
    profileImage: `rounded-full object-cover`,
    form: `flex-1 flex items-center`,
    input: `flex-1 py-[0.6rem] px-[1rem] mx-[0.6rem] rounded-full bg-[#3a3b3d] outline-none border-none text-white`,
    hiddenSubmit: `visible`,
    actionsContainer: `flex justify-evenly pb-2`,
    actionButton: `flex flex-1 items-center justify-center p-2 text-[#555] cursor-pointer hover:bg-[#404041] rounded-[0.5rem] transition-all duration-300 ease-in-out`,
    actionButtonTitle: `font-semibold ml-[0.6rem] text-lg text-[#afb3b8]`,
    videoCamIcon: `text-red-500`,
    photoIcon: `text-green-500`,
    refreshIcon: `text-blue-500`,
    spinner: `h-full w-full flex justify-center items-center`,
    submitButton: `bg-[#3a3b3d] text-white font-semibold px-4 py-2 hover:px-6 rounded-full cursor-pointer duration-[0.2s] ease-in-out`,
  }

  function create_post() {
    if (input == '') {
      console.log('Post should not be empty')
      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: 'bottom-end',
      //   showConfirmButton: false,
      //   timer: 3000,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener('mouseenter', Swal.stopTimer)
      //     toast.addEventListener('mouseleave', Swal.resumeTimer)
      //   }
      // })

      // Toast.fire({
      //   icon: 'warning',
      //   title: 'What\'s on your mind'
      // })
      toast('What\'s on your mind!', {
        icon: '🤔',
        style: {
          borderRadius: '10px',
          background: '#252526',
          color: '#fffcf9',
        },
      })


    } else {
      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: 'bottom-end',
      //   showConfirmButton: false,
      //   timer: 3000,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener('mouseenter', Swal.stopTimer)
      //     toast.addEventListener('mouseleave', Swal.resumeTimer)
      //   }
      // })

      // Toast.fire({
      //   icon: 'success',
      //   title: 'Posted successfully, will update on network shortly'
      // })
      handleSubmit();
    }
  }

  const handleSubmit = async event => {
    // event.preventDefault()
    setInput('')

    await savePost(input)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.formContainer}>
        <Image
          src={url}
          alt='profile image'
          className={style.profileImage}
          height={40}
          width={40}
        />
        <div className={style.form}>
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            required
            className={style.input}
            placeholder={`What's on your mind, ${name}?`}
          />
        </div>

      </div>

      <div className={style.buttonContainer}>
        <button
          style={{ float: 'right', marginRight: '2.4%' }}
          className={style.submitButton}
          type='submit'
          onClick={create_post}
        >POST</button>
      </div>

      <div className={style.actionsContainer}>
        <div className={style.actionButton}>
          <BsFillCameraVideoFill className={style.videoCamIcon} />
          <div className={style.actionButtonTitle}>Live Video</div>
        </div>
        <div className={style.actionButton}>
          <BsFileImageFill className={style.photoIcon} />
          <div className={style.actionButtonTitle}>Photo/Video</div>
        </div>
        <div className={style.actionButton} onClick={() => getAllPosts()}>
          <FiRefreshCw className={style.refreshIcon} />
          <div className={style.actionButtonTitle}>Refresh Posts</div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
