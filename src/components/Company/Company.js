import React from 'react';
import './Company.css';

const Company = ({ name, logo, selectCompany, getLogo }) => {
  const handleChange = e => {
    selectCompany(e);
    getLogo(logo);
  };

  return (
    <label>
      <div className="company_select">
        <input
          type="radio"
          name="company"
          value={name}
          onChange={handleChange}
        />
        <img
          src={logo}
          alt={`${name} logo`}
          onError={e => {
            e.target.setAttribute(
              'src',
              'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/office-building_1f3e2.png'
            );
          }}
        />
        <p>{name}</p>
      </div>
    </label>
  );
};

export default Company;
