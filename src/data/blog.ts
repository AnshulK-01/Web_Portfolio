export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    description: string;
  };
}

export function getBlogPosts(): BlogPost[] {
  // For now, returning an empty array
  // You can add your blog posts here later
  return [];
} 