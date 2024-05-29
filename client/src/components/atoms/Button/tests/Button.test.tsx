// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from '../Button';

describe('Button Component', () => {
  test('renders primary button with correct styles', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByText('Primary Button');

    expect(button).toBeInTheDocument();
    // expect(button).toHaveStyle({ backgroundColor: '#007bff' });
    expect(button).toHaveStyle({ color: 'white' });
  });

  test('renders secondary button with correct styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');

    expect(button).toBeInTheDocument();
    // expect(button).toHaveStyle({ backgroundColor: '#6c757d' });
    expect(button).toHaveStyle({ color: 'white' });
  });

  test('renders disabled button with correct styles and is not clickable', () => {
    render(<Button variant="disabled">Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: '#d6d8db' });
    expect(button).toHaveStyle({ color: '#6c757d' });
    expect(button).toBeDisabled();
  });

  test('calls onClick when primary button is clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="primary" onClick={handleClick}>
        Primary Button
      </Button>,
    );
    const button = screen.getByText('Primary Button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick when secondary button is clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="secondary" onClick={handleClick}>
        Secondary Button
      </Button>,
    );
    const button = screen.getByText('Secondary Button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled button is clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="disabled" onClick={handleClick}>
        Disabled Button
      </Button>,
    );
    const button = screen.getByText('Disabled Button');

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
