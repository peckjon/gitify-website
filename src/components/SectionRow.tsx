import React from 'react';

export const SectionRow = ({
  main,
  extras,
  screenshotPath,
  screenshotAlt,
  largeSide,
  isDark = false,
}: {
  main: React.ReactNode;
  extras?: React.ReactNode;
  screenshotPath?: string;
  screenshotAlt?: string;
  largeSide: 'left' | 'right';
  isDark?: boolean;
}) => {
  const mainClassName = 'flex-1';

  return (
    <div
      className={`flex px-12 py-16 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-100'
      }`}
    >
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {largeSide === 'left' ? (
          <div className={`${mainClassName} md:mr-12`}>{main}</div>
        ) : null}

        {screenshotPath && screenshotAlt && (
          <div className="px-2">
            <img
              className={`block w-full max-w-sm mx-auto h-auto shadow-lg transform -rotate-6 rounded-xl md:${
                largeSide === 'left' ? 'ml-16' : 'mr-16'
              } ${largeSide === 'left' ? 'mt-16 mb-8' : 'mt-8 mb-16'} md:my-16`}
              src={screenshotPath}
              alt={screenshotAlt}
            />
          </div>
        )}

        {extras && <div className="max-w-sm my-8">{extras}</div>}

        {largeSide === 'right' ? (
          <div className={`${mainClassName} md:ml-12`}>{main}</div>
        ) : null}
      </div>
    </div>
  );
};
