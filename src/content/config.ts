// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      excerpt: z.string(),
      author: z.string(),
      image: image(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
