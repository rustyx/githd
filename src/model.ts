'use strict'

import { Uri } from 'vscode';

import { ScmViewProvider } from './scmViewProvider';
import { ExplorerViewProvider } from './explorerViewProvider';

export interface FileProvider {
    ref: string;
    update(ref: string, relativePath?: Uri): void;
    clear(): void;
    dispose(): void;
}

export function createFileProvider(inExplorer?: boolean, withFolder?: boolean): FileProvider {
    if (inExplorer) {
        return new ExplorerViewProvider(withFolder);
    }
    return new ScmViewProvider();
}
