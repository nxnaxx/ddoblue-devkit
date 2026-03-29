'use client';

import { Button } from '@/components/Button';
import { useCounter } from '@/hooks/useCounter';

import styles from './page.module.css';

export default function Home() {
  const { count, onIncrement } = useCounter();

  return (
    <div className={styles.page}>
      <p>{count}</p>
      <Button label="Increment" onClick={onIncrement} />
    </div>
  );
}
