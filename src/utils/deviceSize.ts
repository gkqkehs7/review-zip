import { useMediaQuery } from 'react-responsive';

// 가로 2560px~
const isLargeDesktop = (): boolean => {
  return useMediaQuery({
    query: '(min-width:2560px)',
  });
};

// 가로 1920px ~ 2559px
const isSmallDesktop = (): boolean => {
  return useMediaQuery({
    query: '(min-width:1920px) and (max-width: 2559px)',
  });
};

// 가로 1680px ~ 1919px
const isLargeLaptop = (): boolean => {
  return useMediaQuery({
    query: '(min-width: 1680px) and (max-width: 1919px)',
  });
};

// 가로 1440px ~ 1679px
const isSmallLaptop = (): boolean => {
  return useMediaQuery({
    query: '(min-width: 1440px) and (max-width: 1679px)',
  });
};

// 가로 1024px ~ 1439px
const isPad = (): boolean => {
  return useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1439px)',
  });
};

// 가로 ~1023px
const isPhone = (): boolean => {
  return useMediaQuery({
    query: '(max-width: 1023px)',
  });
};

export {
  isLargeDesktop,
  isSmallDesktop,
  isLargeLaptop,
  isSmallLaptop,
  isPad,
  isPhone,
};
