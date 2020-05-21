import { FunctionComponent, useState } from 'react';

import css from './task-card.module.scss';
import { DayTask } from '../../types/daytask.interface';
import StoryList from './story-list';
import Changelog from './changelog-entry';

interface TaskCardProps {
  task: DayTask,
}

const TaskCard: FunctionComponent<TaskCardProps> = ({ task }) => {
  const {
    date,
    featuredImage,
    description,
    taskType,
    userStories,
    changelog,
    technologies,
    release,
    liveDemo,
    sourceCode,
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
        { featuredImage && <img src={featuredImage} alt={description} /> }
      </div>
      <div className={css["task-card-body"]}>
        <div className={css["task-card-body-timestamp"]}>
          <time dateTime={_date.toISOString()}>{dateFormatted}</time>
        </div>
        <div className={css["task-card-body-header"]}>
          <div className={css["task-card-body-title"]}>
            <h3>{`${taskType.replace(/^\w/, (c) => c.toUpperCase())}:`}</h3>
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
          {description}
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
          {liveDemo && <a href={liveDemo} target="_blank" rel="noreferrer noopener" className={`${css["task-card-action-link"]} ${css["live-demo-button"]}`}>Live Demo</a>}
          {sourceCode && <a href={sourceCode} target="_blank" rel="noreferrer noopener" className={`${css["task-card-action-link"]} ${css["source-code-button"]}`}>Source Code</a>}
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
        <section className={`${css["task-card-expand-section"]} ${css[`task-card-expand-section-${expanded ? 'show' : 'hide'}`]}`}>
          {
            expanded && (
              <>
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
                          return <StoryList stories={userStories} />;
                        case 1:
                          return (
                            changelog.map((log) => (
                              <Changelog entry={log} key={log.version} />
                            ))
                          );
                        default:
                          return false;
                      }
                    })()
                  }
                </div>
              </>
            )
          }
        </section>
      </div>
    </div>
  );
};

export default TaskCard;
