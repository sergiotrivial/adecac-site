// Confere se cada entrada do índice tem os dois arquivos no disco, e se não há
// arquivo no disco fora do índice. Nasceu de um erro real: um script apagou a
// pasta de destino antes de mover as artes, e o site ficou com sete entradas
// apontando para imagens que não existiam mais.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname;
const indice = JSON.parse(readFileSync(join(RAIZ, 'src/galerias.json'), 'utf8'));

let faltando = 0;
let orfaos = 0;

for (const [galeria, fotos] of Object.entries(indice)) {
  const pasta = join(RAIZ, 'public/galeria', galeria);
  const esperados = new Set();

  for (const foto of fotos) {
    for (const sufixo of ['', '-mini']) {
      const arquivo = `${foto.arquivo}${sufixo}.webp`;
      esperados.add(arquivo);
      if (!existsSync(join(pasta, arquivo))) {
        console.error(`  FALTA  ${galeria}/${arquivo}`);
        faltando++;
      }
    }
  }

  if (existsSync(pasta)) {
    for (const arquivo of readdirSync(pasta)) {
      if (arquivo.endsWith('.webp') && !esperados.has(arquivo)) {
        console.error(`  ÓRFÃO  ${galeria}/${arquivo}`);
        orfaos++;
      }
    }
  }

  console.log(`  ${String(fotos.length).padStart(4)}  ${galeria}`);
}

if (faltando || orfaos) {
  console.error(`\n${faltando} arquivo(s) faltando, ${orfaos} órfão(s).`);
  process.exit(1);
}
console.log('\nÍndice e disco batem.');
