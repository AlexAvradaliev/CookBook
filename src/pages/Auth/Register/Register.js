import Register from '../../../components/Auth/Register/Register';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import {RegisterProvider} from '../../../components/Auth/context/registerFormContext'; 


function SingUp() {
  return (
    <RegisterProvider>
      <Header>
        <Nav />
      </Header>
        <Register />
    </RegisterProvider>
  );
};

export default SingUp;