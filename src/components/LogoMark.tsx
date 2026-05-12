type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className, title = "Meerzeit Studio Logo" }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 230"
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 174c26 12 50 12 74 0 23-11 48-11 73 0 27 12 54 12 83-1"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M72 144c22-20 43-28 64-22 15 4 27 14 42 17 22 4 44-9 68-28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M91 113c-2 20-1 40 5 60m39-68c-4 23-3 47 4 70m48-73c3 25 2 49-5 72m47-71c7 23 7 45-1 66"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M96 110c13 12 28 17 45 14m35 7c19 1 36-5 52-20"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="91" cy="82" r="19" stroke="currentColor" strokeWidth="6" />
      <circle cx="139" cy="75" r="20" stroke="currentColor" strokeWidth="6" />
      <circle cx="186" cy="76" r="20" stroke="currentColor" strokeWidth="6" />
      <circle cx="232" cy="82" r="19" stroke="currentColor" strokeWidth="6" />
      <path
        d="M41 193c35 13 70 13 104 0 30-11 62-11 93 0 17 6 31 7 42 2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}