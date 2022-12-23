import { useState } from 'react'
import Image from 'next/image'
import { MdAddComment, MdInsertEmoticon } from 'react-icons/md'
import { TiCameraOutline } from 'react-icons/ti'
import { RiFileGifLine } from 'react-icons/ri'
import { BiSticker } from 'react-icons/bi'

const CreateComment = ({ createCommentForPost, name, url }) => {
  const [input, setInput] = useState('')

  const style = {
    wrapper: `flex items-center`,
    profileImage: `rounded-full`,
    inputContainer: `flex flex-1 h-10 bg-[#3a3b3c] rounded-full px-[1rem]`,
    form: `flex flex-1 items-center`,
    input: `w-full bg-transparent outline-none`,
    inputIcons: `flex items-center gap-[0.4rem]`,
    icon: `cursor-pointer text-[#a6a9ae]`,
  }

  function create_comment() {
    if (input == '') {
        console.log("comment shold not be empty")
    } else {
      postComment();
    }
  }


  const postComment = async event => {
    // event.preventDefault()

    await createCommentForPost(input)
    setInput('')
  }

  return (
    <div className={style.wrapper}>
      <div>
        <Image
          className={style.profileImage}
          src={url}
          height={34}
          width={34}
          alt='profile image'
        />
      </div>
      <div className={style.inputContainer} style={{ marginLeft: '6px' }}>
        <div className={style.form}>
          <input
            type='text'
            placeholder='Write a comment...'
            className={style.input}
            required
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className={style.inputIcons}>
          <MdAddComment fontSize={20} className={style.icon} onClick={create_comment}/>
          <MdInsertEmoticon fontSize={20} className={style.icon} />
          <TiCameraOutline fontSize={20} className={style.icon} />
          {/* <RiFileGifLine fontSize={20} className={style.icon} /> */}
          <BiSticker fontSize={20} className={style.icon} />
        </div>
      </div>
    </div>
  )
}

export default CreateComment
