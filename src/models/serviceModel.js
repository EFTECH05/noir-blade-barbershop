export function createService(data) {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: Number(data.price),
    durationMinutes: data.duration_minutes,
    category: data.category,
    active: data.active,
    createdAt: data.created_at,
  };
}
