import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    eixo: z.enum(['Memória', 'Formação', 'Celebração']),
    periodo: z.string(),
    situacao: z.enum(['Ativo', 'Realizado', 'Descontinuado']),
    // Em rascunho o projeto não gera página nem aparece em lista alguma.
    // Serve para segurar no repositório o que ainda não está pronto para o ar.
    rascunho: z.boolean().default(false),
    // Em construção o projeto continua na lista e mantém página própria, mas
    // nada do conteúdo vai ao ar: no lugar aparece o aviso de que a parte está
    // sendo montada. O que já está escrito fica guardado aqui até haver material.
    emConstrucao: z.boolean().default(false),
    resumo: z.string(),
    // Data de início, usada só para ordenar. A precisão é a que o acervo
    // permite: dia exato quando conhecido, 1º de janeiro quando só há o ano.
    // O que aparece na tela é o campo `periodo`.
    inicio: z.coerce.date(),
    // Projeto encerrado que segue na home por peso institucional. Os que
    // estão em andamento aparecem lá de qualquer forma, sem precisar disto.
    destaque: z.boolean().default(false),
    // Números só entram aqui com lastro no acervo — briefing §6.3.
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).default([]),
    creditos: z.array(z.object({ papel: z.string(), quem: z.string() })).default([]),
    instagram: z.object({ url: z.string().url(), nome: z.string(), titulo: z.string() }).optional(),
    // id do vídeo no YouTube; quando presente, a página incorpora o player
    video: z.object({ youtube: z.string(), titulo: z.string() }).optional(),
    // capa em cor cheia, para projetos com arte própria
    capa: z.object({ arquivo: z.string(), alt: z.string() }).optional(),
  }),
});

export const collections = { projetos };
