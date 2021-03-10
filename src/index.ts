import { render as renderEjs } from 'ejs';
import fs from 'fs';
import {
    basename as getBaseName,
    extname as getFileExt,
    join as joinPath,
    relative as getRelativePath,
    resolve as resolvePath
} from 'path';

import { cfg, ejsData } from './config';

buildPage();

/* Functions */

function buildPage(): void {
    // Delete OUT_DIR
    fs.rmSync(cfg.OUT_DIR, {recursive: true, force: true});

    // Create OUT_DIR
    fs.mkdirSync(cfg.OUT_DIR);

    // Populate OUT_DIR using RES_DIR
    populateOutDir(cfg.RES_DIR);

    // Populate OUT_DIR with additional included files
    for (const includedFile of cfg.includedFiles) {
        populateOutDir(includedFile.file, includedFile.targetFile);
    }
}

function populateOutDir(path: string, relativePath?: string): void {
    const outFile = resolvePath(cfg.OUT_DIR, relativePath || getRelativePath(cfg.RES_DIR, path));

    if (outFile.startsWith(cfg.OUT_DIR)) {
        if (!cfg.skipHiddenResources || getBaseName(path).charAt(0) != '.') {
            const lstat = fs.lstatSync(path);

            if (lstat.isFile()) {
                if (['.html', '.xml', '.txt'].includes(getFileExt(path))) {
                    fs.writeFileSync(outFile, renderEjs(fs.readFileSync(path, 'utf-8'), ejsData));
                } else {
                    fs.copyFileSync(path, outFile);
                }
            } else if (lstat.isDirectory()) {
                const dir = fs.opendirSync(path);

                if (!fs.existsSync(outFile)) {
                    fs.mkdirSync(outFile);
                }

                let file;
                while (file = dir.readSync()) {
                    populateOutDir(joinPath(dir.path, file.name));
                }
            } else {
                console.error('Unsupported resource:', path);
            }
        }
    } else {
        throw new Error(`Tried writing '${path}' outside of the target directory (to '${outFile}')`);
    }
}