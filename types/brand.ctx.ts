import { ImageCtx, ThemedImageCtx, TouchIconSpecification } from './image.ctx';
import { AggregateRating } from './rating.interface';

export interface BrandCtx {
  /**
   * Unique Brand ID
   */
  id: string;


  /**
   * Preferred brand name
   */
  name: string;


  /**
   * Title name, name that will be visible on the webpage
   */
  title: string;


  /**
   * Short description of the brand
   * Used for generating meta data
   */
  description: string;


  /**
   * Home page of the brand
   */
  host: string;


  /**
   * Activity of the brand
   */
  activity: BrandActivity[];


  /**
   * Featured image of the brand
   */
  featuredImage: ImageCtx;


  /**
   * Optional text line to be displayed under the logo
   * Could be used for slogans or mission statements
   */
  subtitle: string;


  /**
   * Aggregate rating of the brand
   */
  aggregateRating: AggregateRating;


  /**
   * Brand icon used for apple touch, WPA icons etc.
   */
  brandIcon: TouchIconSpecification;


  /**
   * Brand logo
   */
  logo: BrandLogoSpecification;


  /**
   * Brand origin country
   * Counrty code
   */
  origin: string;


  /**
   * Brand type
   */
  type: BrandType;
}

export interface BrandActivity {
  code: string;
  label: string;
  sector: string;
  subsector: string;
  industry: string;
  entry: string;
}

export enum BrandType {
  /**
   * Brand consisting of one person
   * Author, influencer, musician etc.
   */
  person = 'person',

  /**
   * Used to organized multiple brands
   * under one umbrella brand
   */
  group = 'group',

  /**
   * Organization, service brand
   * Bank, firms, corporations etc.
   */
  organization = 'organization',

  /**
   * Creative work as a brand
   * Movie, book, music album etc.
   */
  creativeWork = 'creativeWork',

  /**
   * Event as a brand
   * Conference, concert, festival, rocket launch etc.
   */
  event = 'event',

  /**
   * Product brand or brand selling products
   */
  product = 'product',

  /**
   * Local business
   */
  local = 'local',

  /**
   * Place as a brand
   * Grand Canyon, Eiffel Tower etc.
   */
  place = 'place',
}

export interface BrandLogoSpecification {
  composite: ThemedImageCtx;
  glyphIcon: ThemedImageCtx;
  silhouette: ThemedImageCtx;
  wordMark: ThemedImageCtx; 
}