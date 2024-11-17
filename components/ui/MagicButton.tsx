import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  href,
  target,
  handleClick,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  href?: string;
  target?: string;
}) => {
  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#2563eb,55%,#1e3a8a)] bg-[length:200%_100%] px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 md:w-50 md: mt-10"
      >
        <div className="flex items-center gap-2">
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </div>
      </a>
    );
  }

  // Otherwise, render a regular button
  return (
    <button
      onClick={handleClick}
      className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#2563eb,55%,#1e3a8a)] bg-[length:200%_100%] px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 md:w-60 md: mt-10"
    >
      <div className="flex items-center gap-2">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </div>
    </button>
  );
};

export default MagicButton;