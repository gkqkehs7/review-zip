// 기기 사이즈별 width, height 조절 함수
const responsiveBackgroundImageSize = (
  device: string,
  largeDesktopSize: { imageUrl: string },
  smallDesktopSize: { imageUrl: string },
  largeLaptopSize: { imageUrl: string },
  smallLaptopSize: { imageUrl: string },
  padSize: { imageUrl: string },
  phoneSize: { imageUrl: string },
): { backgroundImage: string } => {
  if (device === 'LargeDesktop') {
    return {
      backgroundImage: `url(${largeDesktopSize.imageUrl})`,
    };
  }

  if (device === 'SmallDesktop') {
    return {
      backgroundImage: `url(${smallDesktopSize.imageUrl})`,
    };
  }

  if (device === 'LargeLaptop') {
    return {
      backgroundImage: `url(${largeLaptopSize.imageUrl})`,
    };
  }

  if (device === 'SmallLaptop') {
    return {
      backgroundImage: `url(${smallLaptopSize.imageUrl})`,
    };
  }

  if (device === 'Pad') {
    return {
      backgroundImage: `url(${padSize.imageUrl})`,
    };
  }

  if (device === 'Phone') {
    return {
      backgroundImage: `url(${phoneSize.imageUrl})`,
    };
  }

  return {
    backgroundImage: `url(${phoneSize.imageUrl})`,
  };
};

export { responsiveBackgroundImageSize };
