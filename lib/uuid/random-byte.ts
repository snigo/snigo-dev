import { random } from '../mathx';

export default function randomByte(): string {
  return random([0, 35], 0).toString(36);
}
