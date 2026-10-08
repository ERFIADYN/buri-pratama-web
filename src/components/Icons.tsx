type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export const IconChat = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
    <path d="M9 9.5c.4 2 2.5 4 5.5 5l1.5-1.5-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2L9 9.5Z" />
  </svg>
);
export const IconList = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
export const IconMenu = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const IconClose = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconPlus = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IconMinus = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 12h14" />
  </svg>
);
export const IconTrash = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </svg>
);
export const IconMail = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const IconPin = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const IconClock = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconCheck = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);
