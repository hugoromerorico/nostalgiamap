interface KVNamespace {
    get(key: string): Promise<string | null>;
    put(key: string, value: string): Promise<void>;
  }
  
  declare global {
    const MY_KV: KVNamespace;
}
