import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-themed-yellow">
        {config.ps1_username}
      </span>
      <span className="text-themed-gray">@</span>
      <span className="text-themed-green">
        {config.ps1_hostname}
      </span>
      <span className="text-themed-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
