import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // Esto permite procesar la imagen
      title: z.string(),
      vimeoId: z.string().optional(),
      credits: z.string(),
      cover: image() // Cambiamos de string a image()
    })
});

export const collections = { projects };
