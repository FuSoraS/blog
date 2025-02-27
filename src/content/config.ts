import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        date: z.date(),
        cover: z.string(),
    })
})
export const collections = { posts };