export interface ChangelogEntry {
  version: string;
  date: string;
  url: string;
  log: {
    [key: string]: string[];
  };
}

export interface DayTask {
  date: string;
  version: string;
  featuredImage: string;
  description: string;
  taskType?: string;
  userStories?: string[];
  changelog?: ChangelogEntry[];
  technologies: string[];
  release?: string;
  liveDemo?: string;
  sourceCode?: string;
}