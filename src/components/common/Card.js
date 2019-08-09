/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Card.scss';
import uniqid from 'uniqid';

export const Card = props => {
  const { epiEntries, epiDate, epiTitle } = props;

  const getOwnerClassName = owner => {
    let itemOwner = 'other';
    if (owner.includes('Wes')) {
      itemOwner = 'wes';
    } else if (owner.includes('Scott')) {
      itemOwner = 'scott';
    }
    return `owner ${itemOwner}`;
  };

  return (
    <div className="card-container">
      <div className="card-content">
        {epiEntries.map(entry => (
          <div className="card-entry" key={uniqid()}>
            {entry.owner && <span className={getOwnerClassName(entry.owner)}>{entry.owner}: </span>}
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
              {entry.text}
            </a>
            <br />
          </div>
        ))}
        <div className="card-header">
          <p className="title">{epiTitle}</p>
          <p className="date">{epiDate}</p>
        </div>
      </div>
    </div>
  );
};
