import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    eixo: z.enum(['Memória', 'Formação', 'Celebração']),
    periodo: z.string(),
    situacao: z.enum(['Ativo', 'Realizado', 'Descontinuado']),
    resumo: z.string(),
    ordem: z.number(),
    destaque: z.boolean().default(false),
    // Números só entram aqui com lastro no acervo — briefing §6.3.
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).default([]),
    creditos: z.array(z.object({ papel: z.string(), quem: z.string() })).default([]),
    instagram: z.object({ url: z.string().url(), nome: z.string(), titulo: z.string() }).optional(),
  }),
});

export const collections = { projetos };
