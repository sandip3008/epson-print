import { WebPlugin } from '@capacitor/core';

import type { epsonPlugin } from './definitions';

export class epsonWeb extends WebPlugin implements epsonPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
