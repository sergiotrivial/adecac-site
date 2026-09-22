/* Fonte única de verdade dos fatos institucionais.
   Todos os valores vêm do briefing CLAUDE.md v2.1 §2, §3 e §4 — confirmados no acervo.
   Regra do §6.3: nunca afirmar número sem lastro. Não editar sem checar o briefing. */

export const ORG = {
  razaoSocial: 'Associação de Cultura e Artes de Cajuru',
  sigla: 'ADECAC',
  cnpj: '14.100.715/0001-20',
  fundacao: '23 de abril de 2011',
  registroEstatuto: '22/06/2011 — Cartório de Registro de Imóveis e Anexos de Cajuru/SP',
  natureza: 'Entidade civil de direito privado, sem fins econômicos',
  endereco: 'Rua Sampaio Moreira, 1018 — Centro — Cajuru/SP',
  cep: 'CEP 14240-017',
  email: 'contato@adecac.com.br',
  telefone: '(16) 3667-3503',
  telefoneLink: '+551636673503',
  // Corrigido em 22/09/2026: o §2 do briefing traz '@adecacdecajuru', que não existe.
  // O perfil real é @adecac_cajuru ("Adecac Cajuru"). Divergência a registrar no §7.
  instagram: 'https://www.instagram.com/adecac_cajuru/',
  instagramNome: '@adecac_cajuru',
  facebook: 'https://facebook.com/adecaccajuru',
  // Perfil do projeto de música. A marca-mãe vem sempre primeiro (briefing §1).
  instagramProjeto: 'https://www.instagram.com/orquestrandocomarte/',
  instagramProjetoNome: '@orquestrandocomarte',
  instagramProjetoTitulo: 'Orquestrando a vida',
  // Missão aprovada em 03/08/2026. Usar literal — briefing §3: não inverter os verbos,
  // não trocar sinônimo, não acrescentar um quarto verbo, sem exclamação.
  missao: 'Preservar, formar e celebrar a cultura de Cajuru.',
  missaoLonga:
    'A ADECAC preserva a memória de Cajuru, forma novos artistas e celebra quem faz cultura na cidade.',
  slogan: 'Cultura que Conecta. Arte que Transforma.',
} as const;

/* Os três eixos do briefing §3 — nesta ordem, sempre. */
export const EIXOS = [
  {
    nome: 'Memória',
    resumo: 'Preservar e dar acesso ao passado de Cajuru.',
    detalhe:
      'O Memorial Cajuru e o evento dos 100 Anos do Ramal Mogyana nasceram da mesma convicção: uma cidade que não guarda a própria história perde a chance de entendê-la.',
  },
  {
    nome: 'Formação',
    resumo: 'Ensinar, capacitar, abrir caminhos.',
    detalhe:
      'A Música Transformando Pessoas oferece aulas gratuitas de cordas com instrumento incluso. Foi dele que nasceu a Orquestra de Cordas de Cajuru.',
  },
  {
    nome: 'Celebração',
    resumo: 'Reunir a comunidade e dar palco ao artista local.',
    detalhe:
      'Duas edições do Festival da Diversidade Cultural reuniram cerca de 550 pessoas e 61 artistas da região em praça pública.',
  },
] as const;

/* Governança confirmada — briefing §2. Atenção: Sergio Tadeu Giglio (Secretário Geral
   do Conselho) e Sergio Tadeu Giglio Filho (Diretor Executivo) são pessoas diferentes. */
export const GOVERNANCA = {
  conselhoAdministracao: [
    { nome: 'Pedro Pereira Benvenuto', cargo: 'Presidente do Conselho (fundador)' },
    { nome: 'Sergio Tadeu Giglio', cargo: 'Secretário Geral do Conselho' },
    { nome: 'Maria do Carmo Arena', cargo: 'Conselheira' },
    { nome: 'Betânia Beleboni', cargo: 'Conselheira' },
  ],
  conselhoFiscal: [
    { nome: 'Vera Ferreira', cargo: 'Presidente' },
    { nome: 'José Eduardo de Carvalho', cargo: 'Vice-Presidente' },
    { nome: 'Tiago Berzoti', cargo: 'Conselheiro' },
  ],
  diretoriaExecutiva: [
    { nome: 'Sergio Tadeu Giglio Filho', cargo: 'Diretor Executivo' },
    { nome: 'Lucas Pereira Elias Benvenuto', cargo: 'Diretor Administrativo e Financeiro' },
  ],
} as const;
