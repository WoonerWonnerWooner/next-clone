declare module '@node-rs/argon2' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export function hash(password: string, options?: any): Promise<string>;
    export function verify(hashedPassword: string, plainPassword: string): Promise<boolean>;
  }