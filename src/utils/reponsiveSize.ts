import {
  isLargeDesktop,
  isSmallDesktop,
  isLargeLaptop,
  isSmallLaptop,
  isPad,
  isPhone,
} from './deviceSize';

// 기기 사이즈별 width, height 조절 함수
const responsiveWidthHeight = (
  device: string,
  largeDesktopSize: { width: number; height: number },
  smallDesktopSize: { width: number; height: number },
  largeLaptopSize: { width: number; height: number },
  smallLaptopSize: { width: number; height: number },
  padSize: { width: number; height: number },
  phoneSize: { width: number; height: number },
): { width: string; height: string } => {
  if (device === 'LargeDesktop') {
    return {
      width: `${largeDesktopSize.width}px`,
      height: `${largeDesktopSize.height}px`,
    };
  }

  if (device === 'SmallDesktop') {
    return {
      width: `${smallDesktopSize.width}px`,
      height: `${smallDesktopSize.height}px`,
    };
  }

  if (device === 'LargeLaptop') {
    return {
      width: `${largeLaptopSize.width}px`,
      height: `${largeLaptopSize.height}px`,
    };
  }

  if (device === 'SmallLaptop') {
    return {
      width: `${smallLaptopSize.width}px`,
      height: `${smallLaptopSize.height}px`,
    };
  }

  if (device === 'Pad') {
    return {
      width: `${padSize.width}px`,
      height: `${padSize.height}px`,
    };
  }

  if (device === 'Phone') {
    return {
      width: `${phoneSize.width}px`,
      height: `${phoneSize.height}px`,
    };
  }

  return {
    width: `${phoneSize.width}px`,
    height: `${phoneSize.height}px`,
  };
};

export { responsiveWidthHeight };
