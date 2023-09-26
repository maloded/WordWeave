import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * The hook that allows canceling the previous function call until the delay expires.
 * @param delay
 * @param callback
 */
export function useDebounce(
  delay: number,
  callback: (...args: Array<any>) => void,
) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: Array<any>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
