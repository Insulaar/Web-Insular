import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    // Loader optimizado para buscar en las carpetas de proyectos
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    
    schema: ({ image }) => z.object({
        title: z.string(),
        // Astro procesa y optimiza la imagen de portada automáticamente
        image: image(), 
        visual: z.enum(['cuadrado', 'horizontal']),
        category: z.array(z.string()),
        // Control de orden y grilla en la Home
        order: z.number().optional(),
        column: z.number().optional(),
        row: z.number().optional(),
        // Agregamos el campo para las portadas repetidas que redirigen
        redirect: z.string().optional(),
        // Agregamos un campo opcional para descripciones cortas en la Home si lo necesitás
        description: z.string().optional(),
    }),
});

export const collections = { projects };