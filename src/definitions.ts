export interface epsonPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
