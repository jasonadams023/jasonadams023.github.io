'use client';

import styles from './portfolio.module.scss';
import React, { useState } from 'react';
import ProjectSummary from './project-summary/project-summary';
import ExtendedDescription from './extended-description/extended-description';

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  repoLink: string;
  siteLink?: string;
}

const projects: Project[] = [
  {
    title: 'Guildlands',
    shortDescription: 'Browser based game',
    longDescription: 'Guildlands is a browser based web game. Uses a time based turn system and focuses on group management. Features a crafting system and live economy.',
    repoLink: 'https://github.com/jasonadams023/guildlands',
  },
  {
    title: 'Crazy Cab',
    shortDescription: 'Mobile game',
    longDescription: 'Mobile app built using Unity at the 2018 ThoughtWorks Game Jam.',
    repoLink: 'https://github.com/Cabby-Coders',
    siteLink: 'https://thoughtworks.itch.io/crazy-cab',
  },
  {
    title: 'Tic Tac Toe',
    shortDescription: 'Tic Tac Toe implemented with React',
    longDescription: 'Tic Tac Toe app created using React and Redux.',
    repoLink: 'https://github.com/jasonadams023/tic_tac_toe',
    siteLink: 'https://jasonadams023.github.io/tic_tac_toe/',
  },
  {
    title: 'Cookie Quest',
    shortDescription: 'Experimental game utilizing cookies',
    longDescription: 'Experimental project using cookies and a state machine to play a game.',
    repoLink: 'https://github.com/jasonadams023/cookie-quest-api',
  },
  {
    title: 'E-commerce',
    shortDescription: 'E-commerce template',
    longDescription: 'An e-commerce template. Has admin functionality for setting and managing inventory and orders. Uses Swipe for handling purchases.',
    repoLink: 'https://github.com/jasonadams023/e_commerce',
  },
  {
    title: 'Movie Reviews',
    shortDescription: 'Movie review site',
    longDescription: 'Movie database project. Uses omdb api to gather information. Stores user data and reviews in PostgreSQL database.',
    repoLink: 'https://github.com/jasonadams023/omdb-api-project',
  },
]

export default function Portfolio() {
  const [displayContent, setDisplayContent] = useState(false);
  const [longDescription, setLongDescription] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [siteLink, setSiteLink] = useState(null);

  function onClick(newDescription: string, newRepoLink: string, newSiteLink?: string): void {
    if (displayContent && newDescription === longDescription) {
      setDisplayContent(false);
    } else {
      setDisplayContent(true);
      setLongDescription(newDescription);
      setRepoLink(newRepoLink);
      setSiteLink(newSiteLink);
    }
  }

  const projectSummaries = projects.map((project) => {
    return (
      <ProjectSummary
        key={project.title}
        title={project.title}
        shortDescription={project.shortDescription}
        callback={() => onClick(project.longDescription, project.repoLink, project.siteLink)}
      />
    );
  });

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>

      <ul>
        {projectSummaries}
      </ul>

      { displayContent ? (<ExtendedDescription longDescription={longDescription} repoLink={repoLink} siteLink={siteLink} />) : null }
    </section>
  );
}
