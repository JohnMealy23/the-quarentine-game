export type Option = {
    text: string;
    id: number;
}

export type Frame = {
    id: number;
    action: string;
    options: Option[]
}
