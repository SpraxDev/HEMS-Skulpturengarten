export interface IEjsData {
    readonly RES_DIR: string;

    readonly url: {
        readonly root: string;
    }

    readonly mediaList: {
        readonly coords: {
            readonly x: number;
            readonly y: number;
        };

        readonly media: IMedia[];

        readonly pdfFile?: string;
    }[]

    readonly contributorTypeName: Record<keyof IMediaContributor, string>;

    readonly getUriFile: (path: string | unknown) => string;
}

export interface IMedia {
    readonly title: string;
    readonly type: 'video' | 'audio';
    readonly contributors: IMediaContributor;

    readonly mediaFile: string;
    readonly pdfFile?: string;
}

export interface IMediaContributor {
    readonly textAuthor?: IContributor;
    readonly voice?: IContributor;

    readonly imgAuthor?: IContributor;

    readonly videoAuthor?: IContributor;
    readonly videoEdit?: IContributor;
}

export interface IContributor {
    readonly name: string;
    readonly instagram?: string;
}