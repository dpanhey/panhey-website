import { defineCollection, z } from 'astro:content';

const services = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['heizung', 'sanitaer', 'gastechnik']),
        cover: image().optional(),
        date: z.date().default(() => new Date()),
        order: z.number().optional(),
    }),
});

export const collections = { services };
