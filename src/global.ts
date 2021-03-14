export interface IEjsData {
    readonly RES_DIR: string;

    readonly pageTitle: string;

    readonly url: {
        readonly root: string;
    }

    readonly mediaList: {
        readonly offset: {
            readonly x: string;
            readonly y: string;
        };

        readonly customColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

        readonly media: IMedia[];

        readonly pdfFile?: string;
    }[]

    readonly contributorTypeName: Record<keyof IMediaContributor, string>;

    readonly getUriFile: (path: string | unknown) => string;
}

export interface IMedia {
    readonly title: string;
    readonly type: 'video' | 'audio' | 'image';
    readonly contributors: IMediaContributor;

    readonly mediaFile: string;
    readonly pdfFile?: string;
}

export interface IMediaContributor {
    readonly textAuthor?: IContributor[];
    readonly voice?: IContributor[];

    readonly imgAuthor?: IContributor[];

    readonly videoAuthor?: IContributor[];
    readonly videoEdit?: IContributor[];

    readonly soundEffects?: IContributor[];
}

export interface IContributor {
    readonly name: string;

    readonly instagram?: string;
    readonly twitter?: string;
}