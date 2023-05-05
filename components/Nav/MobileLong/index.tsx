import React from "react";

interface Props {}

const Arrow: React.FC<Props> = () => {
  return (
    <svg
      width="auto"
      height="180"
      viewBox="0 0 30 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6017 482.398C14.3736 483.17 15.6252 483.17 16.3972 482.398L28.9771 469.818C29.7491 469.046 29.7491 467.794 28.9771 467.022C28.2052 466.25 26.9536 466.25 26.1816 467.022L14.9994 478.204L3.81729 467.022C3.04532 466.25 1.79372 466.25 1.02175 467.022C0.249783 467.794 0.249781 469.046 1.02175 469.818L13.6017 482.398ZM13.0233 -2.43644e-06L13.0227 481L16.9762 481L16.9768 2.43644e-06L13.0233 -2.43644e-06Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const MobileLong = (Props) => {
  return <Arrow />;
};

export default MobileLong;
