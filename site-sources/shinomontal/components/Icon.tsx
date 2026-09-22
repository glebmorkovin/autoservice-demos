export type IconName =
  | "arrow"
  | "chevron"
  | "clock"
  | "close"
  | "map"
  | "menu"
  | "phone";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    phone: (
      <path d="M8.1 4.4 6.7 3a1.6 1.6 0 0 0-2.3 0l-.7.7c-1.5 1.5.5 6.4 4.4 10.3s8.8 5.9 10.3 4.4l.7-.7a1.6 1.6 0 0 0 0-2.3L17.7 14a1.6 1.6 0 0 0-2.1-.1l-1.1.9a13.7 13.7 0 0 1-5.3-5.3l.9-1.1a1.6 1.6 0 0 0-.1-2.1L8.1 4.4Z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}
