import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
//라이브러리

// import backImg1 from './Img/LandingImg01.jpg'
// import backImg2 from './Img/LandingImg02.jpg'
// import backImg3 from './Img/LandingImg03.jpg'
// import backImg4 from './Img/LandingImg04.jpeg'
import logo from './Img/Puzzle_Logo_ Square.png'
//이미지

import { Back01 } from './background/Background01'
import { Back02 } from './background/Background02'
import { Back03 } from './background/Background03'
import { Back04 } from './background/Background04'
import { Login } from './user/Login'
import { SignUp } from './user/SignUp'
// import { FindEamilModal } from './user/FindEmailModal'
// import { FindPwModal } from './user/FindPwModal'
//컴포넌트

const Landing = () => {
  const history = useHistory()

  const [signUp, setSignUp] = useState(true)
  // const [showEmailModal, setShowEmailModal] = useState(false)
  // const [showPwModal, setShowPwModal] = useState(false)

  // const openEmailModal = () => {
  //   setShowEmailModal(perv => !perv)
  // }
  // const openPwModal = () => {
  //   setShowPwModal(perv => !perv)
  // }

  const onSignUp = () => {
    setSignUp(prev => !prev)
  }
  const onSubmit = async e => {
    e.preventDefault()
  } //새로고침 방지

  return (
    <form onSubmit={onSubmit}>
      <Back01>
        <Logo />
        <Guestbun onClick={() => history.push('./home')}>체험하기</Guestbun>
        {signUp ? (
          <>
            <Login setSignUp={setSignUp} />
            {/* <div>
              <UserInfoBox>
                <UserInfoInput type="email" placeholder="Email" />
                <UserInfoInput type="password" placeholder="Password" />
              </UserInfoBox>
              <LoginBox>
                <Loginbtn>로그인</Loginbtn>
                <FindUserInfobtn onClick={openEmailModal}>
                  ID찾기
                </FindUserInfobtn>
                <FindUserInfobtn onClick={openPwModal}>PW찾기</FindUserInfobtn>
                <SignUpbtn onClick={onSignUp}>회원가입</SignUpbtn>
              </LoginBox>
              <FindEamilModal
                showEmailModal={showEmailModal}
                setShowEmailModal={setShowEmailModal}
              />
              <FindPwModal
                showPwModal={showPwModal}
                setShowPwModal={setShowPwModal}
              />
            </div> */}
          </>
        ) : (
          <SignUp setSignUp={setSignUp} />
          // <SignUp>
          //   <UserSignUpBox>
          //     <UserInfoInput type="email" placeholder="Email" />
          //     <UserInfoInput type="password" placeholder="Password" />
          //     <UserInfoInput type="password" placeholder="Confirm Password" />
          //     <UserInfoInput type="text" placeholder="Name" />
          //     <UserInfoInput type="tel" placeholder="Phone" />
          //     <UserInfoInput type="text" placeholder="Usercode" />
          //   </UserSignUpBox>
          //   <SignUpBox>
          //     <SignUpbtn>회원가입</SignUpbtn>
          //     <Loginbtn onClick={onSignUp}>로그인</Loginbtn>
          //   </SignUpBox>
          // </SignUp>
        )}
      </Back01>
    </form>
  )
}

export default Landing

// <------------ Common ------------> //

const Guestbun = styled.button`
  position: absolute;
  top: 3vh;
  right: 90vw;
  border-radius: 15px;
  color: white;
  width: 5vw;
  height: 5vh;
  background-color: #fa991d;
  cursor: pointer;

  font-size: 1.4rem;

  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  outline: none;

  &:hover {
      color: #111;
  }
`

// const BackImg01 = styled.div`
//   background: linear-gradient(
//       271.76deg,
//       #000000 5.77%,
//       rgba(255, 255, 255, 0) 99.13%
//     ),
//     url(${backImg1}) no-repeat bottom fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100vh;
// `
// const BackImg02 = styled.div`
//   background: linear-gradient(
//       271.76deg,
//       #000000 5.77%,
//       rgba(255, 255, 255, 0) 99.13%
//     ),
//     url(${backImg2}) no-repeat center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100vh;
// `
// const BackImg03 = styled.div`
//   background: linear-gradient(
//       271.76deg,
//       #000000 5.77%,
//       rgba(255, 255, 255, 0) 99.13%
//     ),
//     url(${backImg3}) no-repeat center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100vh;
// `
// const BackImg04 = styled.div`
//   background: linear-gradient(
//       271.76deg,
//       #000000 5.77%,
//       rgba(255, 255, 255, 0) 99.13%
//     ),
//     url(${backImg4}) no-repeat center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100vh;
// `

// const Maincopy = styled.h1`
//   position: absolute;
//   height: 178px;
//   top: 10vh;
//   right: 40vw;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 60px;
//   line-height: 154px;
//   display: flex;
//   align-items: center;

//   color: #ffffff;
// `

// const MaunContents = styled.p`
//   position: absolute;
//   height: 178px;
//   top: 40vh;
//   right: 43vw;
//   font-style: normal;
//   text-align: center;
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 70px;
//   display: flex;
//   align-items: center;

//   color: #ffffff;
// `

// const ToggleBox = styled.div`
//   position: absolute;
//   display: flex;
//   width: 20vw;
//   top: 80%;
//   left: 35%;
//   justify-content: space-around;
// `

// const BackImgToggle01 = styled.div`
//   width: 1.5rem;
//   height: 1.5rem;
//   background: #fa991d;
//   border-radius: 50%;
//   cursor: pointer;
// `
// const BackImgToggle02 = styled.div`
//   width: 1.5rem;
//   height: 1.5rem;
//   background: #fa991d;
//   border-radius: 50%;
//   cursor: pointer;
// `
// const BackImgToggle03 = styled.div`
//   width: 1.5rem;
//   height: 1.5rem;
//   background: #fa991d;
//   border-radius: 50%;
//   cursor: pointer;
// `
// const BackImgToggle04 = styled.div`
//   width: 1.5rem;
//   height: 1.5rem;
//   background: #fa991d;
//   border-radius: 50%;
//   cursor: pointer;
// `

// <------------ Login zone ------------> //

const Logo = styled.div`
  background-image: url(${logo});
  width: 80px;
  height: 80px;
  background-size: cover;
  position: absolute;
  right: 12.8vw;
  top: 10vh;
`

const LoginBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  color: white;
  right: 10vw;
  top: 53vh;
  height: 20vh;
  width: 10vw;
  background-color: transparent;
`
const UserInfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  right: 10vw;
  top: 40vh;
  height: 8vh;
  background-color: transparent;
`

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? 'red' : 'purple')};
// `

// const Btn = styled.button`
//   border-radius: 8px;
//   color: white;
//   width: 12vw;
//   height: 4vh;
//   background-color: ${props => `#${props.test}`}
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
// `
const FindUserInfobtn = styled.button`
  border-radius: 8px;
  color: white;
  width: 12vw;
  height: 4vh;
  background-color: #1c7690;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
const Loginbtn = styled.button`
  border-radius: 8px;
  color: white;
  width: 12vw;
  height: 4vh;
  background-color: #afafaf;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
const SignUpbtn = styled.button`
  border-radius: 8px;
  color: balck;
  width: 12vw;
  height: 4vh;
  background-color: white;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
const UserInfoInput = styled.input`
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid #ef4d70;
  padding-bottom: 10px;
  color: white;
  width: 10vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  font-size: 1.1rem;
`

// <------------ SognUp zone ------------> //

const UserSignUpBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  right: 10vw;
  top: 30vh;
  height: 30vh;
  background-color: transparent;
`

const SignUpBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  color: white;
  right: 10vw;
  top: 63vh;
  height: 10vh;
  width: 10vw;
  background-color: transparent;
`
