export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

export function generateItems(count: number): Item[] {
  const categories = ["Tech", "Science", "Business", "Sports", "Entertainment"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}.`,
    category: categories[Math.floor(Math.random() * categories.length)],
  }));
}