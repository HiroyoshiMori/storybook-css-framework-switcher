
export type frameworkOptions<T extends string = string> = {
  id: T;
  title?: string;
  srcPath: string;
  description?: string;
};
