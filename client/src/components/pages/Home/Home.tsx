import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

// Project imports
import { CurrentThemeContext } from 'providers/theme';
import { ToggleButtonComponent } from 'components/atoms';
import { Nav, ErrorList } from 'components/molecules';
import { MainWrapper, SantaFormWithHookForm } from 'components/organisms';
import { Theme } from 'constants/theme';
import SantaMessageService from './SantaMessageService';

type Props = {};

type InputData = {
  username: string;
  message: string;
};

export const Home = (props: Props) => {
  const { currentTheme, setCurrentTheme } = useContext(CurrentThemeContext);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const handleFormSubmit = (data: InputData) => {
    setIsSubmitting(true);
    setErrors([]);
    SantaMessageService.create(data)
      .then((response) => {
        Swal.fire({
          title: 'Good job!',
          text: 'Your message has been sent to Santa!',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        const { data } = error;
        const { details } = data;

        if (details) {
          setErrors(details);
          return;
        }

        if (!details && data.message) {
          setErrors([data.message]);
          return;
        }

        Swal.fire({
          title: 'Oops...',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
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
        {errors && <ErrorList errors={errors} />}
        <SantaFormWithHookForm
          isLoading={isSubmitting}
          onSubmit={handleFormSubmit}
        />
      </MainWrapper>
    </>
  );
};

export default Home;
