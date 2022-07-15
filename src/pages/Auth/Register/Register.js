import Register from "../../../components/Auth/Register/Register";
import Main from "../../../components/Common/Main/Main";
import Header from "../../../components/Headers/Header/Header";
import Nav from "../../../components/Nav/Nav";

function SingUp() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Register />
      </Main>
    </>
  )
};

export default SingUp;