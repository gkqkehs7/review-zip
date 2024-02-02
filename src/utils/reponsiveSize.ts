// 기기 사이즈별 width, height 조절 함수
const responsiveWidthHeight = (
  device: string,
  largeDesktopSize: { width: number; height: number | string },
  smallDesktopSize: { width: number; height: number | string },
  largeLaptopSize: { width: number; height: number | string },
  smallLaptopSize: { width: number; height: number | string },
  padSize: { width: number; height: number | string },
  phoneSize: { width: number; height: number | string },
): { width: string; height: string } => {
  if (device === 'LargeDesktop') {
    return {
      width: `${largeDesktopSize.width}px`,
      height:
        largeDesktopSize.height === '100%'
          ? '100%'
          : typeof largeDesktopSize.height === 'string'
            ? 'auto'
            : `${largeDesktopSize.height}px`,
    };
  }

  if (device === 'SmallDesktop') {
    return {
      width: `${smallDesktopSize.width}px`,
      height:
        smallDesktopSize.height === '100%'
          ? '100%'
          : typeof smallDesktopSize.height === 'string'
            ? 'auto'
            : `${smallDesktopSize.height}px`,
    };
  }

  if (device === 'LargeLaptop') {
    return {
      width: `${largeLaptopSize.width}px`,
      height:
        largeLaptopSize.height === '100%'
          ? '100%'
          : typeof largeLaptopSize.height === 'string'
            ? 'auto'
            : `${largeLaptopSize.height}px`,
    };
  }

  if (device === 'SmallLaptop') {
    return {
      width: `${smallLaptopSize.width}px`,
      height:
        smallLaptopSize.height === '100%'
          ? '100%'
          : typeof smallLaptopSize.height === 'string'
            ? 'auto'
            : `${smallLaptopSize.height}px`,
    };
  }

  if (device === 'Pad') {
    return {
      width: `${padSize.width}px`,
      height:
        padSize.height === '100%'
          ? '100%'
          : typeof padSize.height === 'string'
            ? 'auto'
            : `${padSize.height}px`,
    };
  }

  if (device === 'Phone') {
    return {
      width: `${phoneSize.width}px`,

      height:
        phoneSize.height === '100%'
          ? '100%'
          : typeof phoneSize.height === 'string'
            ? 'auto'
            : `${phoneSize.height}px`,
    };
  }

  return {
    width: `${phoneSize.width}px`,
    height:
      typeof phoneSize.height === 'string' ? 'auto' : `${phoneSize.height}px`,
  };
};

export { responsiveWidthHeight };
