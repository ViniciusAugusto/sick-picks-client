import React from 'react';
import { Card } from './common'
import { scrapedData } from '../data/scrapedData';
import './SickPicks.scss';

export const SickPicks = () => {
  const filteredData = scrapedData.filter(item => Object.entries(item).length !== 0);
  const epiData = Object.values(filteredData);
  const mappedEpisodeData = epiData.map(epi => {
    const epiTitle = Object.keys(epi)[0];
    const epiContent = epi[epiTitle];
    const epiDate = epi[epiTitle][0].date;

    return (
      <div>
        <Card
          epiContent={epiContent}
          epiDate={epiDate}
          epiTitle={epiTitle}
        />
      </div>
    );
  });

  return (
    <div className="grid">
      {mappedEpisodeData}
    </div>
  );
};
