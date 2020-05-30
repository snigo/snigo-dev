import { AggregateRating } from "./rating.interface";
import { ImageCtx } from "./image.ctx";

export interface PageCtx {
  /**
   * Unique ID of the page
   * Used as a publish key for fetching additional data
   */
  id: string;


  /**
   * Title of the page
   * Used to generate <title> tag for the page
   */
  title: string;


  /**
   * Description of the page
   * Used for generation of meta tags
   */
  description: string;


  /**
   * Type of the page
   * Determines default fallback view in case of network interruptions
   * Enum string type
   */
  type: PageType;


  /**
   * Keywords associated with the page
   * Used for generation of meta tags
   */
  keywords: string[];


  /**
   * Path part of the URL of the page retative to the index
   * e.g. /blog/p/post-title
   */
  path: string;


  /**
   * Fatured Image of the page
   * Used for meta tag / open graph generation
   */
  featuredImage: ImageCtx;


  /**
   * Accessibility descriptor of the page
   * Used for JSON-LD script generation
   */
  accessibility: PageAccessibility;


  /**
   * List of page sections
   * Used to draw default fallback view in case of network interruptions
   * As well as to feed navigation ctx to the Outline component
   */
  contentIndex: PageSection[];


  /**
   * Standart content rating of the page
   * Used for possible block or alert messages prior to displaying the content
   */
  contentRating: AggregateRating;


  /**
   * Content language of the page
   * Used for meta data generation
   */
  contentLanguage: string;


  /**
   * If page is part of PageSeries
   * index of the page in a series
   */
  keyIndex: number;


  /**
   * Parent page of the current page
   * Used for building breadcrumbs navigation
   */
  parent: PageCtx;


  /**
   * Page host
   */
  host: string;


  /**
   * Page name
   */
  name: string;


  /**
   * Full url of the page
   */
  url: string;
}

export enum PageType {
  slides = 'slides',
  article = 'article',
  profile = 'profile',
}

export interface PageAccessibility {
  feature: string[];
  hazard: string[];
  api: string[];
  control: string[];
  mode: string;
  modeSufficient: string[];
  summary: string;
}

export interface PageSection {
  id: string;
  label: string;
  nestingIndex: number;
  parent: PageSection;
  children: PageSection[];
}
