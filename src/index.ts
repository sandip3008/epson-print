import { registerPlugin } from '@capacitor/core';

import type { epsonPlugin } from './definitions';

const epson = registerPlugin<epsonPlugin>('epson', {
  web: () => import('./web').then(m => new m.epsonWeb()),
});

export * from './definitions';
export { epson };
