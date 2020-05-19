import { FunctionComponent } from 'react';

import css from './pulsing-heart.module.scss';

const PulsingHeart: FunctionComponent = () => (
  <span className={css['pulsing-heart']}>&hearts;</span>
);

export default PulsingHeart;
