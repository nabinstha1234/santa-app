import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

// Project imports
import { CurrentThemeContext } from 'providers/theme';
import { ToggleButtonComponent } from 'components/atoms';
import { Nav } from 'components/molecules';
import { MainWrapper, SantaFormWithHookForm } from 'components/organisms';
import { Theme } from 'constants/theme';
import SantaMessageService from './SantaMessageService';

type Props = {};

type InputData = {
  userid: string;
  wish: string;
};

export const Home = (props: Props) => {
  const { currentTheme, setCurrentTheme } = useContext(CurrentThemeContext);
  const [errors, setErrors] = useState(null);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const handleFormSubmit = (data: InputData) => {
    SantaMessageService.create(data)
      .then(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'Your message has been sent to Santa!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      })
      .catch((error) => {
        alert(
          'There was an error sending your message to Santa. Please try again later.',
        );
      });
  };

  return (
    <>
      <Nav>
        <ToggleButtonComponent
          currentTheme={currentTheme}
          onClick={handleThemeToggle}
        ></ToggleButtonComponent>
      </Nav>
      <MainWrapper>
        <SantaFormWithHookForm onSubmit={handleFormSubmit} />
      </MainWrapper>
    </>
  );
};

export default Home;
