'use client';

import styles from './page.module.css';

import { Button } from '@/components/Button';
import { useCounter } from '@/hooks/useCounter';

export default function Home() {
  const { count, onIncrement } = useCounter();

  return (
    <div className={styles.page}>
      <p>{count}</p>
      <Button label="Increment" onClick={onIncrement} />
    </div>
  );
}
