import { useForm } from 'react-hook-form';

import {
  SantaContainer,
  SantaForm,
  SantaInput,
  SantaTitle,
  InputContainer,
  InputLabel,
  FormError,
  WishTextarea,
  SubmitButton,
} from './styles';

type SantaFormProps = {
  onSubmit: (data: { userid: string; wish: string }) => void;
};

type InputData = {
  userid: string;
  wish: string;
};

export const SantaFormWithHookForm = ({ onSubmit }: SantaFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: InputData) => {
    onSubmit(data);
  };

  return (
    <SantaContainer>
      <SantaTitle>Ho ho ho, what you want for Christmas?</SantaTitle>
      <SantaForm onSubmit={handleSubmit(onSubmitHandler)}>
        <InputContainer>
          <InputLabel>Who are you?</InputLabel>
          <SantaInput
            {...register('userid', {
              required: 'Please enter your name.',
            })}
            placeholder="charlie.brown"
          />
          {errors.userid?.message &&
            typeof errors.userid?.message === 'string' && (
              <FormError>{errors.userid.message}</FormError>
            )}
        </InputContainer>
        <InputContainer>
          <InputLabel>What do you want for christmas?</InputLabel>
          <WishTextarea
            {...register('wish', {
              required: 'Please tell Santa your wish!',
              maxLength: 100,
            })}
            placeholder="Gifts!"
          />
          {errors.wish?.message && typeof errors.wish?.message === 'string' && (
            <FormError>{errors.wish.message}</FormError>
          )}
        </InputContainer>
        <SubmitButton type="submit">Send</SubmitButton>
      </SantaForm>
    </SantaContainer>
  );
};
