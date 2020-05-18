import { FunctionComponent } from 'react';

import { ChangelogEntry } from '../../types/daytask.interface';
import css from './changelog-entry.module.scss';
import uuid from '../../lib/uuid';
import StoryList from './story-list';

interface ChangelogProps {
  entry: ChangelogEntry;
}

const Changelog: FunctionComponent<ChangelogProps> = ({ entry }) => {
  const _date = new Date(entry.date);
  return (
    <div className={css['changelog-entry']}>
      <div className={css['changelog-entry-version']} key={entry.version}>
        <a href={entry.url} className="fancy-link" target="_blank" rel="noreferrer noopener">
          {`v${entry.version}`}
        </a>
        <span>
          [
          <time dateTime={_date.toISOString()}>{entry.date}</time>
          ]
        </span>
      </div>
      <ul className={css['changelog-entry-change-list']}>
        {
          Object.keys(entry.log).map((key) => (
            <li className={css['changelog-entry-change-list']} key={`${key}-${uuid(9)}`}>
              <h4>{`${key}:`}</h4>
              <StoryList stories={entry.log[key]} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Changelog;
