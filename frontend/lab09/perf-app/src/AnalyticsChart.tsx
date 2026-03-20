import { useMemo } from "react";

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics...");
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  return result + items.length;
}

export function AnalyticsChart({ items }: { items: string[] }) {
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");
  return (
    <div className="chart">
      <h3>Analytics (Value: {analytics.toFixed(2)})</h3>
    </div>
  );
}