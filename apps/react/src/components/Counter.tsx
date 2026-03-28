import { useCounter } from '@/hooks/useCounter';

export function Counter() {
  const { count, onIncrement } = useCounter();

  return (
    <button className="counter" onClick={onIncrement}>
      Count is {count}
    </button>
  );
}
