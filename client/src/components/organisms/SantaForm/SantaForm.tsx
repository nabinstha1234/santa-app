import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

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

type InputData = {
  username: string;
  message: string;
};

type SantaFormProps = {
  onSubmit: (data: InputData) => void;
  isLoading: boolean;
};

export const SantaFormWithHookForm = ({
  onSubmit,
  isLoading,
}: SantaFormProps) => {
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
      <SantaForm
        onSubmit={handleSubmit(onSubmitHandler as SubmitHandler<FieldValues>)}
      >
        <InputContainer>
          <InputLabel>Who are you?</InputLabel>
          <SantaInput
            {...register('username', {
              required: 'Please enter your name.',
            })}
            disabled={isLoading}
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
            {...register('message', {
              required: 'Please tell Santa your wish!',
              maxLength: 100,
            })}
            disabled={isLoading}
            placeholder="Gifts!"
          />
          {errors.wish?.message && typeof errors.wish?.message === 'string' && (
            <FormError>{errors.wish.message}</FormError>
          )}
        </InputContainer>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading
            ? 'Loading..., Email server is slow it takes time please wait'
            : 'Send'}
        </SubmitButton>
      </SantaForm>
    </SantaContainer>
  );
};
