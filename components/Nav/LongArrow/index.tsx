import React from "react";

interface Props {
  size: number;
}

const Arrow: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height="15px"
      viewBox="0 0 477 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M476.061 13.0606C476.646 12.4748 476.646 11.5251 476.061 10.9393L466.515 1.39336C465.929 0.807571 464.979 0.807571 464.393 1.39336C463.808 1.97914 463.808 2.92889 464.393 3.51468L472.879 12L464.393 20.4852C463.808 21.071 463.808 22.0208 464.393 22.6066C464.979 23.1923 465.929 23.1923 466.515 22.6066L476.061 13.0606ZM1.31134e-07 13.5L475 13.5L475 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const LongArrow = ({ size }: Props) => {
  return <Arrow size={size} />;
};

export default LongArrow;
