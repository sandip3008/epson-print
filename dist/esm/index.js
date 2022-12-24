import { registerPlugin } from '@capacitor/core';
const epson = registerPlugin('epson', {
    web: () => import('./web').then(m => new m.epsonWeb()),
});
export * from './definitions';
export { epson };
//# sourceMappingURL=index.js.map