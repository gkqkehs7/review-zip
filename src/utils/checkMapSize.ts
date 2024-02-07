import { useMediaQuery } from 'react-responsive';

const checkWidthSize = (): string => {
  // 가로 1920px
  const isDesktop = useMediaQuery({
    query: '(min-width:1921px)',
  });

  // 가로 1680px ~ 1919px
  const isLaptop = useMediaQuery({
    query: '(min-width: 1680px) and (max-width: 1920px)',
  });

  // 가로 1440px ~ 1679px
  const isSmallLaptop = useMediaQuery({
    query: '(min-width: 1440px) and (max-width: 1679px)',
  });

  // 가로 1024px ~ 1439px
  const isPad = useMediaQuery({
    query: '(max-width: 1439px)',
  });

  // 가로 ~1023px

  if (isDesktop) {
    return 'Desktop';
  }

  if (isLaptop) {
    return 'Laptop';
  }

  if (isSmallLaptop) {
    return 'SmallLaptop';
  }

  if (isPad) {
    return 'Pad';
  }

  return 'Pad';
};

export { checkWidthSize };
