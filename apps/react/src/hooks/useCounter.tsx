import { useCallback, useState } from 'react';

interface UseCounterProps {
  count: number;
  onIncrement: () => void;
}

export function useCounter(): UseCounterProps {
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return { count, onIncrement };
}
