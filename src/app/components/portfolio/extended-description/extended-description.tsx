import React from 'react';

interface ExtendedDescriptionProps {
  longDescription: string;
  repoLink: string;
  siteLink: string;
}

export default function ExtendedDescription({ longDescription, repoLink, siteLink }: ExtendedDescriptionProps) {
  return (
    <div>
      <p>{longDescription}</p>
      <a href={repoLink}>GitHub</a>
      { siteLink ? (<a href={siteLink}>Site</a>) : null }
    </div>
  )
}
