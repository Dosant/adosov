import React from "react"

export const KibanaLogo = ({ size = 16 } = { size: 16 }) => {
  return (
    <svg
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="img"
      aria-hidden="true"
      title={"Kibana logo"}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#F04E98" d="M4 0v28.789L28.935.017z"></path>
        <path
          className="euiIcon__fillNegative"
          d="M4 12v16.789l11.906-13.738A24.721 24.721 0 004 12"
        ></path>
        <path
          fill="#00BFB3"
          d="M18.479 16.664L6.268 30.754l-1.073 1.237h23.191c-1.252-6.292-4.883-11.719-9.908-15.327"
        ></path>
      </g>
    </svg>
  )
}
