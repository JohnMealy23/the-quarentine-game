export type Option = {
    text: string;
    id: number | void;
}

export type LiInputs = {
    optionLi: HTMLInputElement; 
    optionLiIdNumber: HTMLInputElement;
}

export type Scene = {
    id: number;
    action: string;
    options: Option[];
    image?: string | HTMLInputElement;
    editing?: boolean;
        //okay if scene has editing or not. But if it does, it has to be boolean. 
}