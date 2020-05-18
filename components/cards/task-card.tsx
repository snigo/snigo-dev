import { FunctionComponent, useState } from 'react';

import css from './task-card.module.scss';
import { DayTask } from '../../types/daytask.interface';

interface TaskCardProps {
  task: DayTask,
}

const TaskCard: FunctionComponent<TaskCardProps> = ({ task }) => {
  const {
    date,
    featuredImage,
    job,
    userStories,
    changelog,
    technologies,
    release,
  } = task;

  const [expanded, _setExpanded] = useState(false);
  const [expandedActive, _setExpandedActive] = useState(0);

  const EXPANDED_TABS = ['User stories', 'Changelog'];

  const toggleExpanded = (): void => {
    _setExpanded(!expanded);
  };

  const dateFormatOpts = { month: "long", day: "numeric", year: "numeric" };
  const _date = new Date(date);
  const dateFormatted = new Intl.DateTimeFormat("en-US", dateFormatOpts).format(_date);

  return (
    <div className={css["task-card"]}>
      <div className={css["task-card-featured-image"]}>
        { featuredImage && <img src={featuredImage} alt={job} /> }
      </div>
      <div className={css["task-card-body"]}>
        <div className={css["task-card-body-timestamp"]}>
          <time dateTime={_date.toISOString()}>{dateFormatted}</time>
        </div>
        <div className={css["task-card-body-header"]}>
          <div className={css["task-card-body-title"]}>
            <h3>Task:</h3>
          </div>
          <div className={css["task-card-body-release-badge-container"]}>
            { release && (
              <div className={css["task-card-release-badge"]}>
                <a href={release} target="_blank" rel="noreferrer noopener">
                  <span className={css["task-card-release-badge-check-symbol"]}>✔</span>
                  Released
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={css["task-card-body-description"]}>
          {job}
        </div>
        <div className={css["task-card-body-technologies"]}>
          {
            technologies.map((t) => (
              <div
                className={css["task-card-tech-badge"]}
                key={`${date}-${t}`}
              >
                {t}
              </div>
            ))
          }
        </div>
        <div className={css["task-card-body-expand-control"]}>
          <button
            type="button"
            aria-pressed={expanded}
            onClick={toggleExpanded}
          >
            { expanded ? 'Hide details' : 'Show details' }
            <span className={expanded ? css["task-card-body-expand-arrow-hide"] : css["task-card-body-expand-arrow-show"]}>
              ❯
            </span>
          </button>
        </div>
        {
          expanded && (
            <section className={css["task-card-expand-section"]}>
              <ul className={css["task-card-expand-section-tabs"]}>
                {
                  EXPANDED_TABS.map((tab, i) => (
                    <li
                      className={css["task-card-expand-section-tab"]}
                      key={tab.trim().toLowerCase().replace(/\s+/g, '-')}
                    >
                      <button
                        type="button"
                        aria-pressed={i === expandedActive}
                        data-active={i === expandedActive}
                        onClick={() => _setExpandedActive(i)}
                      >
                        {tab}
                      </button>
                    </li>
                  ))
                }
              </ul>
              <div className={css["task-card-expand-section-body"]}>
                {
                  (() => {
                    switch (expandedActive) {
                      case 0:
                        return <span>User Stories</span>
                      case 1:
                        return <span>Changelog</span>
                      default:
                        return false;
                    }
                  })()
                }
              </div>
            </section>
          )
        }
      </div>
    </div>
  );
};

export default TaskCard;
