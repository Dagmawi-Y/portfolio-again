export const load = async () => {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  
  const posts = Object.entries(paths).map(([path, file]) => {
    const slug = path.split('/').pop()?.replace('.md', '');
    return {
      slug,
      ...(file as any).metadata
    };
  });
  
  return {
    posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  };
};
