import randomByte from './random-byte';

/**
 * Generates unique ID with provided size
 */
export default function uuid(size: number = 12): string {
  let hash = '';
  let i = size;

  while (i > 1) {
    hash += randomByte();
    i -= 1;
  }

  return hash;
}
