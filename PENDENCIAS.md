# Pendências do site da ADECAC

Ordem sugerida, da maior para a menor relevância. Atualizado em 24/09/2026.

## Esperando você

- [x] ~~**Vídeo da entrevista com a Nana**~~ — no ar em 30/09/2026.
      A página já existe e o espaço do player está pronto: basta uma linha no arquivo
      `src/content/projetos/entrevista-maria-fernanda.md`.
- [ ] **Fotos das crianças com os instrumentos** — não existe nenhuma em pasta alguma do
      acervo. Procurei em todas. Sem elas, a galeria do curso mostra sala de aula, mas não
      mostra música acontecendo.
- [ ] **Revisão jurídica da política de privacidade** e indicação formal de um encarregado
      pelo tratamento de dados (art. 41 da LGPD).
- [ ] **Conferir os nomes das atrações.** Deduzi das pastas do acervo e posso ter errado
      grafia: Briltles, Dr. Rocha, Léo, Lesus, Mamutes, Max e Pedrão, Mingo, Old Youngs,
      Elton J, Hanna Trio, Karol Luz, Lobo Guaíra, Serenata, Tico, Domingos e Banda.
- [ ] **Prestações de contas em PDF** — o Estatuto já está publicado (30/09/2026).
      A página promete publicação e hoje só remete ao e-mail.
- [x] ~~**Domínio adecac.com.br**~~ — no ar com HTTPS em 30/09/2026. Registro.br, DNS do próprio registro.br, vence 19/09/2027. (histórico) onde está registrado e quem administra, para planejar
      a migração sem derrubar o site antigo.

### Ofício nº 1011/2026 do Ministério da Cultura — Processo 01400.034848/2025-59

O Ofício exige doze itens na página de transparência. Onze estão no ar. Falta:

- [ ] **Autor e modalidade da emenda parlamentar nº 42650011** — item (j). Está no painel
      gerencial do Transferegov.br, aba "Visão OSC". A página declara "em confirmação"
      enquanto isso.
- [ ] **Termo de Fomento na versão assinada** — o PDF publicado é o texto integral, mas
      impresso do SEI antes de assinar: não tem carimbo de assinatura eletrônica, código
      verificador nem CRC. Baixar do SEI a via com carimbo e me mandar; eu troco o arquivo
      no mesmo endereço, sem quebrar link.
- [ ] **PDF da Prorrogação de Ofício nº 00001/2025** — item (i) pede os aditivos. Hoje a
      página linka o extrato no DOU; o documento em si seria melhor.
- [ ] **Aplicação dos recursos** — item (l). A destinação prevista está publicada; conforme
      o projeto executar, a página precisa acompanhar o que foi efetivamente gasto.

A obrigação não acaba na entrega: o art. 80 do Decreto 8.726/2016 manda manter tudo no ar
e **atualizado** até 180 dias depois da prestação de contas final — ou seja, até cerca de
abril de 2028.

## Próximos passos meus

- [ ] **Imagens de header nas demais seções** — Início, Quem somos e o curso de História
      da Música já têm. Faltam Projetos, Transparência e Contato.
- [ ] **CMS visual** para você editar textos e trocar fotos sem mexer em código.
- [ ] **Página de doação** — o briefing registra que o botão do PayPal está solto,
      sem prestação de contas associada.
- [ ] **Galeria do projeto de música atualizada** com as fotos otimizadas de "Fotos aulas".

## Decidido e feito

- [x] Site em Astro publicado na Vercel, com publicação automática a cada alteração
- [x] Galerias: I Festival (70), II Festival (70), Ramal Mogyana (40), projeto de música (40)
- [x] Material de divulgação dos dois festivais
- [x] Páginas novas: curso de História da Música e entrevista com Maria Fernanda
- [x] Canal do YouTube e perfis corrigidos (@adecac_cajuru, não @adecacdecajuru)
- [x] Capa rotativa na home, com paisagens da região do Ramal Mogyana
- [x] Capa em cor cheia no curso de História da Música
- [x] Política de privacidade e proteção de dados
- [x] Fontes servidas pelo próprio site, sem pedido a terceiros

## Nunca publicar

Regras do `LEIA-ME` do acervo e do §6 do briefing, aplicadas no código:

- `01_INSTITUCIONAL` e `99_INTERNO_NAO_PUBLICAR` — contêm CPF, RG e endereços residenciais
- Áudios do acervo FEMEC — direito autoral de 1968–70 pendente
- Certificados, atas, contratos, notas fiscais, balanços e mapas de mesa
- Chaves e QR codes PIX dos eventos — risco de fraude
- Propostas não executadas apresentadas como projeto em andamento
