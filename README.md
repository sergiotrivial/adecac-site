# Site institucional da ADECAC

Site da **Associação de Cultura e Artes de Cajuru** — entidade civil sem fins
econômicos, fundada em 2011 em Cajuru/SP.

> Preservar, formar e celebrar a cultura de Cajuru.

## Como rodar

O projeto usa [Astro](https://astro.build). Requer Node 20 ou superior.

```sh
npm install
npm run dev     # servidor local em http://localhost:4321
npm run build   # gera o site em dist/
```

## Onde fica cada coisa

| Caminho | O que é |
|---|---|
| `src/dados.ts` | Fatos institucionais (CNPJ, endereço, governança, missão) |
| `src/content/projetos/` | Um arquivo Markdown por projeto realizado |
| `src/styles/global.css` | Paleta e tipografia do Manual de Identidade Visual |
| `src/layouts/` e `src/components/` | Estrutura comum das páginas |
| `public/logos/` | Símbolo e assinaturas da marca |

## Regras de conteúdo

O conteúdo deste site é regido pelo briefing do projeto (`CLAUDE.md`, v2.1) e pelo
Manual de Identidade Visual v2.0. Os pontos que mais geram erro:

- **A missão é literal.** "Preservar, formar e celebrar a cultura de Cajuru." Não
  inverter os verbos, não trocar sinônimo, não acrescentar um quarto verbo.
- **Os três eixos têm ordem fixa:** Memória → Formação → Celebração.
- **ADECAC é a marca-mãe.** Nenhum projeto pode aparecer com mais destaque que a
  instituição.
- **"Orquestra de Cordas de Cajuru"** — nunca "Sinfônica". A formação é de cordas.
- **Nenhum número sem lastro** no acervo documental. Estimativa vai marcada como tal.
- **Só projetos executados** entram no site. Proposta não executada não é projeto
  em andamento.
- **Sergio Tadeu Giglio** (Secretário Geral do Conselho) e **Sergio Tadeu Giglio
  Filho** (Diretor Executivo) são pessoas diferentes.

## Publicação

Hospedado na Vercel, conectado a este repositório: cada envio para `main` publica
o site automaticamente.
