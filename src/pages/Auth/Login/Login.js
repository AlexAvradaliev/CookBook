import Main from "../../../components/Common/Main/Main"
import Header from "../../../components/Headers/Header/Header"
import Nav from "../../../components/Nav/Nav"
import Login from "../../../components/Auth/Login/Login"
import Footer from "../../../components/Footer/Footer"


function SingIn() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Login />
      </Main>
    </>
  )
}

export default SingIn