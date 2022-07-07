const esbuild = require('@prantlf/esbuild');

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        outdir: 'lib',
        bundle: true,
        sourcemap: true,
        minify: true,
        format: 'umd',
        target: ['esnext']
    })
    .catch(() => process.exit(1));