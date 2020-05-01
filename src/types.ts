export type Option = {
    text: string;
    id: number;
}

export type Scene = {
    id: number;
    action: string;
    options: Option[]
}
