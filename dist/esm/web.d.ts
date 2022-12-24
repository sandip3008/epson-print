import { WebPlugin } from '@capacitor/core';
import type { epsonPlugin } from './definitions';
export declare class epsonWeb extends WebPlugin implements epsonPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
