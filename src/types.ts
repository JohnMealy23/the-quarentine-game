export type Option = {
    text: string;
    id: number;
}

export type Scene = {
    id: number;
    action: string;
    options: Option[];
    image: string;
    editing?: boolean;
        //okay if scene has editing or not. But if it does, it has to be boolean. 
}
