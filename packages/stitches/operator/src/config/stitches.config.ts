import { createStitches } from '@stitches/react';

import { BRONZE, INDIGO } from '../tokens/colors';

export const { css, keyframes, styled, createTheme, globalCss, config, theme } =
  createStitches({
    theme: {
      colors: {
        ...BRONZE.LIGHT,
        ...INDIGO.LIGHT,
      },
    },
    utils: {},
    media: {
      bP1: `@media (min-width: 520px)`,
      bP2: `@media (min-width: 900px)`,
      bP3: `@media (min-width: 1200px)`,
      bP4: `@media (min-width: 1800px)`,
      preferReduceMotion: `@media (prefers-reduced-motion)`,
      useDarkTheme: `@media (prefers-color-scheme: dark)`,
      useLightTheme: `@media (prefers-color-scheme: light)`,
    },
  });

export const darkTheme = createTheme('dark', {
  colors: {
    ...BRONZE.LIGHT,
    ...INDIGO.DARK,
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': { boxSizing: 'border-box' },
  'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
    margin: '0',
  },
  'ul, ol': {
    margin: 0,
    padding: 0,
  },
  'ul[role="list"], ol[role="list"]': { listStyle: 'none' },
  body: {
    backgroundColor: '$background',
    fontSize: '$base',
    lineHeight: 'normal',
    fontFamily: '$inter',
    textRendering: 'auto',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'img, picture': { display: 'block', maxWidth: '100%' },
  'input, button, textarea, select': { font: 'inherit' },
});
