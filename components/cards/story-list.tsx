import { FunctionComponent } from 'react';

import uuid from '../../lib/uuid';
import css from './story-list.module.scss';

interface StoryListProps {
  stories: string[];
}

const StoryList: FunctionComponent<StoryListProps> = ({ stories }) => (
  <ul className={css['story-list']}>
    {
      stories.map((s, i) => (
        <li className={css['story-list-item']} key={`story-${uuid(9)}`}>{s}</li>
      ))
    }
  </ul>
);

export default StoryList;
