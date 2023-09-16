import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(delay: number, callback: (...args: Array<any>) => void) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: Array<any>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
