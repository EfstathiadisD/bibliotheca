import type * as Stitches from '@stitches/react';

/* UTILITIES Webkit */
export const appearence = (value: Stitches.PropertyValue<'appearance'>) => ({
  WebkitAppearance: value,
  appearance: value,
});

export const userSelect = (value: Stitches.PropertyValue<'userSelect'>) => ({
  WebkitUserSelect: value,
  userSelect: value,
});

/* UTILITIES: Paddings */
export const p = (value: Stitches.PropertyValue<'padding'>) => ({
  padding: value,
});

export const pL = (value: Stitches.PropertyValue<'paddingLeft'>) => ({
  padding: value,
});

export const pR = (value: Stitches.PropertyValue<'paddingRight'>) => ({
  padding: value,
});

export const pT = (value: Stitches.PropertyValue<'paddingTop'>) => ({
  padding: value,
});

export const pB = (value: Stitches.PropertyValue<'paddingBottom'>) => ({
  padding: value,
});

export const pX = (
  value: Stitches.PropertyValue<'paddingLeft' & 'paddingRight'>
) => ({
  padding: value,
});

export const pY = (
  value: Stitches.PropertyValue<'paddingTop' & 'paddingBottom'>
) => ({
  padding: value,
});
