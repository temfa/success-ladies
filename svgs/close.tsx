import React, { FC, MouseEventHandler } from "react";

type Props = {
  action: MouseEventHandler;
};

const Close: FC<Props> = ({ action }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={action}>
      <g clipPath="url(#clip0_686_6912)">
        <rect width="40" height="40" fill="#FCFCFC" />
        <g clipPath="url(#clip1_686_6912)">
          <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#605E5E" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_686_6912">
          <rect width="40" height="40" rx="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_686_6912">
          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;
