/* Parcerias com a administração pública — divulgação obrigatória.

   A ADECAC declarou formalmente ao Ministério da Cultura (Declaração de
   Transparência, Proposta nº 029753/2025) que publicaria estas informações em
   https://www.adecac.com.br. A base é o art. 11 da Lei 13.019/2014, cujo
   parágrafo único exige, para cada instrumento celebrado:

     I   — data de assinatura, identificação do instrumento e órgão responsável;
     II  — nome da OSC e seu CNPJ;
     III — descrição do objeto;
     IV  — valor total e valores liberados;
     V   — situação da prestação de contas: data prevista para apresentação,
           data em que foi apresentada, prazo de análise e resultado conclusivo;
     VI  — remuneração da equipe de trabalho paga com recursos da parceria:
           valor total, funções e remuneração prevista.

   O art. 42, §4º, e o art. 80 do Decreto 8.726/2016 acrescentam o dever de dar
   ampla transparência aos valores de remuneração de equipe, individualizados.

   Regra ao editar: todo número aqui tem que sair de documento oficial. Nada
   de arredondar, estimar ou preencher por dedução. Quando um dado ainda não
   existe — uma prestação de contas que não venceu, por exemplo — o campo diz
   isso, em vez de ficar em branco. */

export interface Parceria {
  id: string;
  instrumento: string;
  orgao: string;
  // forma curta, para o cabeçalho do cartão; a completa fica no campo formal
  orgaoCurto: string;
  orgaoCnpj: string;
  assinatura: string;
  assinaturaNota?: string;
  vigencia: string;
  objeto: string;
  valorTotal: string;
  valorLiberado: string;
  identificacao: { rotulo: string; valor: string }[];
  // publicações no Diário Oficial da União, com link — permitem que qualquer
  // pessoa confira os dados desta página contra a fonte oficial
  publicacoes?: { rotulo: string; valor: string; url: string }[];
  prestacaoContas: { rotulo: string; valor: string }[];
  // plano de trabalho: toda rubrica, com marcação de quais são equipe
  planoTrabalho?: { item: string; valor: string; equipe?: boolean }[];
  equipeTotal?: string;
  observacao?: string;
}

export const PARCERIAS: Parceria[] = [
  {
    id: 'termo-fomento-986297-2025',
    instrumento: 'Termo de Fomento nº 986297/2025 — Plataforma Transferegov.br',
    orgao: 'União, por intermédio do Ministério da Cultura — Secretaria de Articulação Federativa e Comitês de Cultura (SAFCC)',
    orgaoCurto: 'Ministério da Cultura',
    orgaoCnpj: '01.264.142/0001-29',
    assinatura: '10 de dezembro de 2025',
    assinaturaNota: 'Conforme extrato publicado no Diário Oficial da União de 11/12/2025.',
    vigencia: '10/12/2025 a 06/07/2027, já considerada a Prorrogação de Ofício nº 00001/2025. A vigência original terminava em 30/06/2027.',
    objeto:
      'Realizar o projeto História da música, percepção rítmica e melódica: formação musical como prática cultural e cidadã, para alunos e alunas da rede pública de ensino da cidade de Cajuru, interior do estado de São Paulo, promovendo a formação musical teórica, com ênfase na diversidade cultural brasileira, utilizando metodologias acessíveis, participativas e inclusivas. O projeto visa introduzir conceitos fundamentais da teoria musical, além de desenvolver a percepção rítmica, melódica e harmônica, estimulando a criação musical coletiva, valorizando a identidade cultural dos territórios e formando multiplicadores musicais.',
    valorTotal: 'R$ 200.000,00',
    valorLiberado: 'Liberado integralmente em parcela única de R$ 200.000,00, creditada em dezembro de 2025 em conta específica da parceria no Banco do Brasil, aberta para este fim. Contrapartida: R$ 0,00.',
    identificacao: [
      { rotulo: 'Proposta', valor: 'nº 029753/2025' },
      { rotulo: 'Processo', valor: 'nº 01400.034848/2025-59' },
      { rotulo: 'Origem do recurso', valor: 'Emenda Parlamentar nº 42650011' },
      { rotulo: 'Ação orçamentária', valor: '20ZF — Promoção e Fomento à Cultura Brasileira' },
      { rotulo: 'Nota de empenho', valor: 'nº 2025NE000147' },
      { rotulo: 'Legislação', valor: 'Lei nº 13.019/2014 e Decreto nº 8.726/2016' },
      { rotulo: 'Prorrogação', valor: 'Prorrogação de Ofício nº 00001/2025, assinada em 28/01/2026, com fundamento no art. 30, VI, da Portaria Interministerial nº 127/2008. Estendeu a vigência até 06/07/2027.' },
    ],
    publicacoes: [
      {
        rotulo: 'Extrato do Termo de Fomento',
        valor: 'DOU de 11/12/2025, Seção 3',
        url: 'https://www.in.gov.br/en/web/dou/-/extrato-de-termo-de-fomento-674595138',
      },
      {
        rotulo: 'Extrato da Prorrogação de Ofício',
        valor: 'DOU de 11/08/2026, Seção 3',
        url: 'https://www.in.gov.br/en/web/dou/-/extrato-de-prorrogacao-de-oficio-724680697',
      },
    ],
    prestacaoContas: [
      {
        rotulo: 'Prestação de contas anual',
        valor: 'Relatório Parcial de Execução do Objeto, no Transferegov.br, em até 30 dias após o fim de cada exercício de 12 meses contado da primeira liberação de recursos.',
      },
      {
        rotulo: 'Prestação de contas final — prazo previsto',
        valor: 'Relatório Final de Execução do Objeto, no Transferegov.br, em até 90 dias após o término da vigência (prorrogáveis por mais 30 mediante justificativa). Com a vigência encerrando em 06/07/2027, o prazo se esgota em 04/10/2027.',
      },
      {
        rotulo: 'Data em que foi apresentada',
        valor: 'Ainda não apresentada. O prazo não venceu e a parceria está em execução.',
      },
      {
        rotulo: 'Prazo para análise',
        valor: '150 dias contados do recebimento do Relatório Final de Execução do Objeto, prorrogáveis por igual período, limitados a 300 dias.',
      },
      {
        rotulo: 'Resultado conclusivo',
        valor: 'Ainda não há. A análise é formalizada por parecer técnico conclusivo do gestor da parceria, inserido no Transferegov.br.',
      },
    ],
    planoTrabalho: [
      { item: 'Coordenação Pedagógica', valor: 'R$ 38.400,00', equipe: true },
      { item: 'Produção Executiva', valor: 'R$ 36.000,00', equipe: true },
      { item: 'Coordenação Administrativa', valor: 'R$ 18.000,00', equipe: true },
      { item: 'Assistência de Produção', valor: 'R$ 12.000,00', equipe: true },
      { item: 'Professor para as oficinas (1)', valor: 'R$ 22.000,00', equipe: true },
      { item: 'Professor para as oficinas (2)', valor: 'R$ 22.000,00', equipe: true },
      { item: 'Intérprete em Libras', valor: 'R$ 3.000,00', equipe: true },
      { item: 'Serviço de contabilidade', valor: 'R$ 15.600,00' },
      { item: 'Registro fotográfico e em vídeo', valor: 'R$ 8.000,00' },
      { item: 'Confecção de camisetas', valor: 'R$ 6.000,00' },
      { item: 'Projeto gráfico e peças de divulgação', valor: 'R$ 6.000,00' },
      { item: 'Pós-produção e confecção da prestação de contas', valor: 'R$ 5.000,00' },
      { item: 'Material de apoio', valor: 'R$ 3.600,00' },
      { item: 'Material de escritório', valor: 'R$ 2.400,00' },
      { item: 'Impulsionamento nas redes sociais', valor: 'R$ 2.000,00' },
    ],
    equipeTotal: 'R$ 151.400,00',
  },
  {
    id: 'acordo-cooperacao-43-2026',
    instrumento: 'Acordo de Cooperação nº 43/2026',
    orgao: 'Prefeitura Municipal de Cajuru — Secretaria Municipal de Educação e Secretaria de Esporte, Cultura e Turismo',
    orgaoCurto: 'Prefeitura Municipal de Cajuru',
    orgaoCnpj: '45.227.337/0001-74',
    assinatura: '5 de maio de 2026',
    assinaturaNota: 'Conforme extrato publicado no Diário Oficial da União de 07/05/2026. O instrumento foi lavrado em 24/04/2026.',
    vigencia: '05/05/2026 a 05/05/2027, prorrogável por termo aditivo',
    objeto:
      'Conjugação de esforços institucionais entre a Administração Pública e a Organização da Sociedade Civil para a execução do Projeto “História da Música, Percepção Rítmica e Melódica: formação musical como prática cultural e cidadã”, consistente na realização de atividades extracurriculares de formação musical teórica e prática, destinadas a alunos regularmente matriculados na rede pública municipal de ensino de Cajuru/SP.',
    valorTotal: 'Sem transferência de recursos financeiros',
    valorLiberado: 'Não há repasse. A cooperação se dá por conjugação de esforços institucionais.',
    identificacao: [
      { rotulo: 'Fundamento legal', valor: 'Arts. 84 e 85 da Lei nº 13.019/2014 (MROSC)' },
      { rotulo: 'Orientação', valor: 'Entendimento do Tribunal de Contas do Estado de São Paulo' },
    ],
    publicacoes: [
      {
        rotulo: 'Extrato do Acordo de Cooperação',
        valor: 'DOU de 07/05/2026, Seção 3 — Prefeitura Municipal de Cajuru',
        url: 'https://www.in.gov.br/en/web/dou/-/extrato-de-acordo-de-cooperacao-n-43/2026-704055939',
      },
    ],
    prestacaoContas: [
      {
        rotulo: 'Prestação de contas financeira',
        valor: 'Não se aplica. O acordo de cooperação não envolve transferência de recursos financeiros, nos termos do art. 84 da Lei nº 13.019/2014.',
      },
    ],
    observacao:
      'O acordo formaliza a cessão de estrutura e a articulação com as escolas municipais para a execução do mesmo projeto apoiado pelo Termo de Fomento nº 986297/2025.',
  },
];

/* Documentos publicados. Só entram aqui arquivos conferidos página a página:
   nenhum pode conter CPF, RG, endereço residencial, telefone pessoal ou dado
   bancário. Dois documentos da parceria ficaram de fora por esse motivo —
   o Extrato da Proposta e a ficha completa do projeto traziam dados pessoais
   do representante legal e da equipe. As informações que a lei exige deles
   estão acima, extraídas sem expor ninguém. */
export const DOCUMENTOS = [
  {
    arquivo: 'declaracao-transparencia.pdf',
    titulo: 'Declaração de Transparência',
    descricao:
      'Compromisso firmado perante o Ministério da Cultura de publicar nesta página as informações das parcerias, nos termos do art. 11 da Lei 13.019/2014.',
    tamanho: '140 KB',
  },
  {
    arquivo: 'acordo-cooperacao-43-2026.pdf',
    titulo: 'Acordo de Cooperação nº 43/2026',
    descricao: 'Instrumento celebrado com a Prefeitura Municipal de Cajuru, sem transferência de recursos.',
    tamanho: '469 KB',
  },
  {
    arquivo: 'plano-de-curso.pdf',
    titulo: 'Plano de Curso do projeto',
    descricao: 'Ementa, objetivos, conteúdo programático e metodologia de avaliação das aulas e oficinas.',
    tamanho: '373 KB',
  },
];
