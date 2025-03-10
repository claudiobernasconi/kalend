import { dequal } from 'dequal';
import { useEffect, useLayoutEffect, useRef } from 'react';

export const useDeepCompareEffect: typeof useEffect = (
  callback,
  dependencies
) => {
  const ref = useRef<React.DependencyList>(undefined);
  useEffect(() => {
    if (!dequal(dependencies, ref.current)) {
      ref.current = dependencies;
      callback();
    }
  }, [callback, dependencies]);
};

export const useDeepCompareLayoutEffect: typeof useLayoutEffect = (
  callback,
  dependencies
) => {
  const ref = useRef<React.DependencyList>(undefined);
  useLayoutEffect(() => {
    if (!dequal(dependencies, ref.current)) {
      ref.current = dependencies;
      callback();
    }
  }, [callback, dependencies]);
};
