import React, { useEffect, useRef } from 'react';
import styles from './style';

interface ClosePostProps {
  postIsClicked?: boolean;
  setPostIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const ClosePostComponent: React.FC<ClosePostProps> = ({
  postIsClicked,
  setPostIsClicked,
  children,
}) => {
  const postComponentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      postComponentRef &&
      postComponentRef.current &&
      !postComponentRef.current.contains(event.target as Node)
    ) {
      setPostIsClicked(false);
    } else {
      setPostIsClicked(true);
    }
  };

  return <styles.Overlay ref={postComponentRef}>{children}</styles.Overlay>;
};

export default ClosePostComponent;
