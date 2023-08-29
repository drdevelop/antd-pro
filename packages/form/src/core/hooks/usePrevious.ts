import { useEffect, useRef } from 'react';

function usePrevious<T = any>(prevValue: any): T {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = prevValue;
  }, [prevValue]);

  return ref.current;
}

export default usePrevious;
