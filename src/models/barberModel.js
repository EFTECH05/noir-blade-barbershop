export function createBarber(data) {
  return {
    id: data.id,
    name: data.name,
    bio: data.bio,
    active: data.active,
    createdAt: data.created_at,
  };
}
