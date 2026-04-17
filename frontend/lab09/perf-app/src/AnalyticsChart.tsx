import { useMemo } from "react";

interface AnalyticsChartProps {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.time("Expensive Calculation");
  console.log("Calculating analytics...");
  let result = 0;
  // Имитация тяжелых вычислений [cite: 148]
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  console.timeEnd("Expensive Calculation");
  return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  // Вычисления сработают только если изменится массив items [cite: 162]
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");
  return (
    <div className="chart" style={{ background: '#f0f0f0', padding: '10px' }}>
      <h3>Analytics</h3>
      <p>Calculated value: {analytics}</p>
      <p>Items count: {items.length}</p>
    </div>
  );
}