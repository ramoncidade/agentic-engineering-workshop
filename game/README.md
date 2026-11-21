# Agentic Engineering Workshop Game

Primeiro protótipo educativo point-and-click, construído com Phaser 3 e TypeScript.

## Requisitos

- Node.js 20 ou superior
- npm

## Executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Protótipo atual

- Cena de laboratório com três hotspots: armário, bancada e computador.
- Claudinho em pixel art, com spritesheet SVG de 8 frames.
- Animação idle (frames 0–3) e caminhada (frames 4–7).
- Movimento horizontal com setas ou teclas A/D.
- Diálogos contextuais com botão para fechar ou tecla Escape.
- Destaque visual dos objetos ao passar o ponteiro.

## Personagem

O spritesheet está em `public/assets/characters/claudinho-spritesheet.svg`.
Cada frame mede 96×96 pixels. A primeira linha lógica de frames representa idle e a segunda, caminhada (quatro frames por animação).

O sprite é uma primeira interpretação em pixel art do Claudinho. A arte vetorial original da apresentação permanece intacta.
