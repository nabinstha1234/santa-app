// NPM packages imports
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export type SpinnerProps = {
  size?: number;
  color?: string;
  loading?: boolean;
  cssOverride?: CSSProperties;
  ariaLabel?: string;
  dataTestId?: string;
};

/**
 * Renders a spinner component.
 *
 * @param {SpinnerProps} props - The spinner component props.
 * @returns {JSX.Element} The spinner component.
 *
 * Example use:
 *
 * <Spinner
 *   color="#FF0000"
 *   loading={true}
 *   size={50}
 *   cssOverride={override}
 *   ariaLabel="Loading..."
 *   dataTestId="spinner"
 * />
 */
export const Spinner = ({
  color = '#000000',
  loading = true,
  size = 35,
  cssOverride = override,
  ariaLabel = 'Loading...',
  dataTestId = 'spinner',
}: SpinnerProps): JSX.Element => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={cssOverride}
      size={size}
      aria-label={ariaLabel}
      data-testid={dataTestId}
    />
  );
};
