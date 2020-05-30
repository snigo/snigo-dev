export interface ImageCtx {
  title: string;
  url: string;
  width: number;
  height: number;
  type: ImageMimeType;
}

export enum ImageMimeType {
  apng = 'apng',
  bmp = 'bmp',
  gif = 'gif',
  ico = 'ico',
  jpeg = 'jpeg',
  png = 'png',
  svg = 'svg',
  webp = 'webp',
}

export interface ThemedImageCtx {
  light: ImageCtx;
  dark: ImageCtx;
}

export interface TouchIconSpecification {
  favicon: FaviconSpecification;
  icon: TouchIconSet;
  maskable: TouchIconSet;
  msTileBackground: string;
  iconBackground: string;
}

export interface FaviconSpecification {
  svg: ThemedImageCtx;
  16: ThemedImageCtx;
  32: ThemedImageCtx;
  48: ThemedImageCtx;
  64: ThemedImageCtx;
}

export interface TouchIconSet {
  svg: ImageCtx;
  72: ImageCtx;
  96: ImageCtx;
  120: ImageCtx;
  128: ImageCtx;
  144: ImageCtx;
  152: ImageCtx;
  180: ImageCtx;
  192: ImageCtx;
  256: ImageCtx;
  384: ImageCtx;
  512: ImageCtx;
}