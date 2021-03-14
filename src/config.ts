import { basename as getBaseName, join as joinPath, resolve as resolvePath } from 'path';
import { IContributor, IEjsData } from './global';

const isProduction = !process.argv.includes('--dev');

export const cfg = Object.freeze({
    RES_DIR: resolvePath(joinPath(__dirname, '..', 'resources')),
    OUT_DIR: resolvePath(joinPath(__dirname, '..', 'dist')),

    includedFiles: [{
        file: resolvePath(joinPath(__dirname, '..', 'LICENSE')),
        targetFile: './LICENSE'
    }],

    skipHiddenResources: true
});

const contributors: { [key: string]: IContributor } = Object.freeze({
    ali: {
        name: 'Ali'
    },
    anwar: {
        name: 'Anwar'
    },
    ariana: {
        name: 'Ariana'
    },
    arik: {
        name: 'Arik'
    },
    jakob: {
        name: 'Jakob'
    },
    lea: {
        name: 'Lea'
    },
    lukas: {
        name: 'Lukas',
        instagram: 'lukkir_'
    },
    madeleine: {
        name: 'Madeleine'
    },
    niki: {
        name: 'Niki'
    },
    sara: {
        name: 'Sara'
    },
    victoria: {
        name: 'Victoria'
    }
});

export const ejsData: IEjsData = Object.freeze({
    RES_DIR: cfg.RES_DIR,

    pageTitle: 'HEMS-Skulpturengarten 2020/2021',

    url: {
        root: isProduction ? 'https://hems.sprax2013.de/skulpturengarten' : cfg.OUT_DIR
    },

    mediaList: [
        {
            offset: {
                x: '35%',
                y: '82%'
            },
            media: [
                {
                    title: 'Das Höllentor',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('anwar')],
                        voice: [getContributor('ali')],

                        imgAuthor: [getContributor('lukas')],
                        videoEdit: [getContributor('ali')]
                    },

                    mediaFile: 'media/das_hoellentor/video.mp4',
                    pdfFile: 'media/das_hoellentor/Das%20Höllentor.pdf'
                },
                {
                    // TODO: Audio still needs fire-sounds in the background
                    title: '11.000 Menschen',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('arik')],
                        voice: [getContributor('jakob')],

                        videoAuthor: [getContributor('madeleine')]
                    },

                    mediaFile: 'media/11_000_menschen/video.mp4',
                    pdfFile: 'media/11_000_menschen/11.000%20Menschen.pdf'
                }
            ]
        },
        {
            offset: {
                x: '28%',
                y: '78%'
            },
            media: [
                {
                    title: '18 Atemzüge',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('anwar')],
                        voice: [getContributor('lea')],

                        soundEffects: [getContributor('ariana'), getContributor('niki')]
                    },

                    mediaFile: 'media/18_atemzuege/video.mp4',
                    pdfFile: 'media/18_atemzuege/18%20Atemzüge.pdf'
                }
            ]
        },
        {
            offset: {
                x: '30.5%',
                y: '14%'
            },
            media: [
                {
                    title: 'Wie ein kleiner Vogel mutig wurde',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('victoria')],
                        voice: [getContributor('sara')],

                        imgAuthor: [getContributor('lea')]
                    },

                    mediaFile: 'media/kleiner_vogel/video.mp4',
                    pdfFile: 'media/kleiner_vogel/Wie%20ein%20kleiner%20Vogel%20mutig%20wurde.pdf'
                }
            ]
        },
        {
            offset: {
                x: '90%',
                y: '48%'
            },
            media: [
                {
                    title: 'Schuh (Lukas)',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('lukas')],
                        voice: [getContributor('lukas')],

                        imgAuthor: [getContributor('lukas')]
                    },

                    mediaFile: 'media/schuh/video_lukas.mp4'
                },
                {
                    title: 'Schuh (Jakob)',
                    type: 'video',
                    contributors: {
                        textAuthor: [getContributor('jakob')],
                        voice: [getContributor('jakob')],

                        imgAuthor: [getContributor('lukas')]
                    },

                    mediaFile: 'media/schuh/video_jakob.mp4'
                }
            ],

            pdfFile: 'media/schuh/Schuh%20(Lukas%20und%20Jakob).pdf'
        }
    ],

    contributorTypeName: {
        textAuthor: 'Text',
        voice: 'Eingesprochen',

        imgAuthor: 'Bild',

        videoAuthor: 'Video',
        videoEdit: 'Videobearbeitung',

        soundEffects: 'Soundeffekte'
    },

    getUriFile: (path: string | unknown): string => {
        if (typeof path != 'string') throw new Error('Path must be a string');

        return decodeURIComponent(getBaseName(path));
    }
});

function getContributor(name: string): IContributor {
    const result = contributors[name];

    if (!result) {
        throw new Error('Contributor does not exist');
    }

    return result;
}