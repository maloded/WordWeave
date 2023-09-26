import { useCallback, useRef } from 'react';

export function useThrottle(
  delay: number,
  callback: (...args: Array<any>) => void,
) {
  const throttleRef = useRef(false);
  return useCallback(
    (...args: Array<any>) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;
      }
      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    },
    [callback, delay],
  );
}
