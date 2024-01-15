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
  largeDesktopSize: { width: number; height: number },
  smallDesktopSize: { width: number; height: number },
  largeLaptopSize: { width: number; height: number },
  smallLaptopSize: { width: number; height: number },
  padSize: { width: number; height: number },
  phoneSize: { width: number; height: number },
): { width: string; height: string } => {
  if (isLargeDesktop()) {
    return {
      width: `${largeDesktopSize.width}px`,
      height: `${largeDesktopSize?.height}px`,
    };
  }

  if (isSmallDesktop()) {
    return {
      width: `${smallDesktopSize.width}px`,
      height: `${smallDesktopSize.height}px`,
    };
  }

  if (isLargeLaptop()) {
    return {
      width: `${largeLaptopSize.width}px`,
      height: `${largeLaptopSize.height}px`,
    };
  }

  if (isSmallLaptop()) {
    return {
      width: `${smallLaptopSize.width}px`,
      height: `${smallLaptopSize.height}px`,
    };
  }

  if (isPad()) {
    return {
      width: `${padSize.width}px`,
      height: `${padSize.height}px`,
    };
  }

  if (isPhone()) {
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
