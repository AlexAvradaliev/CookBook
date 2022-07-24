import Header from "../../../components/Headers/Header/Header";
import Nav from "../../../components/Nav/Nav";
import Login from "../../../components/Auth/Login/Login";
import {LoginProvider} from '../../../components/Auth/context/loginFormContext'


function SingIn() {
  return (
    <LoginProvider>
      <Header>
        <Nav />
      </Header>
        <Login />
    </LoginProvider>
  )
}

export default SingIn