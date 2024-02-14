export interface IJWT {
    generate(payload: string): Promise<string>
    verify(token: string): Promise<string>
}
