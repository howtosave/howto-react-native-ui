import React, { useEffect, useRef } from 'react';

export function useInterval(callback: () => boolean, delay: number) {
  const savedCallback = useRef<() => boolean>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(tick, delay);
    function tick() {
      if (savedCallback.current && !savedCallback.current()) {
        // stop interval
        clearInterval(id);
        console.log('>>> useInterval: stopped');
      }
    }
    return () => clearInterval(id);
  }, [delay]);
}
