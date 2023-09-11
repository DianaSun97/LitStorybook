import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/_lib.js'),
            name: 'GoERPLib',
            fileName: 'goerp-lib',
        },
    },
})