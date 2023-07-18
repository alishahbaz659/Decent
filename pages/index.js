import { useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import SignUp from '../components/SignUp'
import Header from '../components/Header'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import blunt from '../assets/blunt.png'
import Blunt from '../components/Blunt'
import styled from 'styled-components';


const style = {
  wrapper: `bg-[#18191a] min-h-screen duration-[0.5s]`,
  homeWrapper: `flex`,
  center: `flex-1`,
  main: `flex-1 flex justify-center`,
  signupContainer: `flex items-center justify-center w-screen h-[60vh]`,
  floatingImage: `
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
`,
}

export default function Home() {
  const [registered, setRegistered] = useState(false)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    ;(async () => {
      await requestUsersData()
    })()
  }, [])

  // const wallet = useWallet()

  const requestUsersData = async activeAccount => {
    try {
      const response = await fetch(`/api/fetchUsers`)
      const data = await response.json()

      setUsers(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100vh;
`;


  const handleClick = () => {
    console.log('hello')
  }

  return (
    <div className={style.wrapper}  >
      <Header name={name} url={url}  />

      <CenteredContainer>
      <Blunt></Blunt>
      </CenteredContainer>
      {registered ? (
        <div className={style.homeWrapper} >
          {/* <Sidebar name={name} url={url} /> */}
          <div className={style.main}>
            <Feed name={name} url={url} setRegistered={setRegistered}
             setName={setName}
             setUrl={setUrl}
            />
          </div>
          {/* <RightSidebar
            getUsers={requestUsersData}
            users={users}
            setUsers={setUsers}
          /> */}
        </div>
      ) : (
        <div className={style.signupContainer}>
          <SignUp
            setRegistered={setRegistered}
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
          />
        </div>
      )}

{/* <div className={style.floatingImage} onClick={handleClick}>
  <div style={{marginLeft:'10px'}}>
  <Image
    src={blunt}
    alt=''
    height={30}
    width={30}
    style={{ marginLeft: '10px' }} // Add left padding here
  />
    <span style={{ color: 'white', marginLeft: '10px' }}>Buy me a blunt</span>
  </div> */}

{/* </div> */}

    </div>
  )
}

