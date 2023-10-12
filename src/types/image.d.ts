declare module '*.png' {
  import { StaticImageData } from 'next/image';
  const value: StaticImageData;
  export default value;
}
