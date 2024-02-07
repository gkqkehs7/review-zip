const responsiveMapSize = (
  device: string,
  DesktopSize: { width: number; height: number | string },
  LaptopSize: { width: number; height: number | string },
  SmallLaptopSize: { width: number; height: number | string },
  padSize: { width: number; height: number | string },
): { width: string; height: string } => {
  if (device === 'Desktop') {
    return {
      width: `${DesktopSize.width}px`,
      height:
        DesktopSize.height === '100%'
          ? '100%'
          : typeof DesktopSize.height === 'string'
            ? '100%'
            : `${DesktopSize.height}px`,
    };
  }

  if (device === 'Laptop') {
    return {
      width: `${LaptopSize.width}px`,
      height:
        typeof LaptopSize.height === 'string'
          ? '100%'
          : `${LaptopSize.height}px`,
    };
  }

  if (device === 'SmallLaptop') {
    return {
      width: `${SmallLaptopSize.width}px`,
      height:
        typeof SmallLaptopSize.height === 'string'
          ? '100%'
          : `${SmallLaptopSize.height}px`,
    };
  }

  if (device === 'Pad') {
    return {
      width: `${padSize.width}px`,
      height:
        typeof padSize.height === 'string' ? '100%' : `${padSize.height}px`,
    };
  }

  return {
    width: `${padSize.width}px`,
    height: typeof padSize.height === 'string' ? '100%' : `${padSize.height}px`,
  };
};

export { responsiveMapSize };
