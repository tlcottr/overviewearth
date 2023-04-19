import React from "react";

interface Props {
  size: number;
}

const Arrow: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width="20px"
      height={size}
      viewBox="0 0 24 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 293.061C11.5251 293.646 12.4749 293.646 13.0606 293.061L22.6066 283.515C23.1924 282.929 23.1924 281.979 22.6066 281.393C22.0208 280.808 21.0711 280.808 20.4853 281.393L12 289.879L3.51471 281.393C2.92892 280.808 1.97917 280.808 1.39339 281.393C0.807599 281.979 0.807599 282.929 1.39339 283.515L10.9393 293.061ZM10.5 -6.55671e-08L10.5 292L13.5 292L13.5 6.55671e-08L10.5 -6.55671e-08Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const ShortArrow = ({ size }: Props) => {
  return <Arrow size={size} />;
};

export default ShortArrow;
