const esbuild = require('esbuild');

const production = process.env.NODE_ENV === 'production';

async function getMetafileAnalyze(metafile) {
  const result = await esbuild.analyzeMetafile(metafile, {
    color: true,
    verbose: true,
  });

  return result;
}

esbuild
  .build({
    color: true,
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    platform: 'node',
    sourcemap: !production,
    minify: true,
    target: ['esnext'],
    metafile: true,
    drop: ['console', 'debugger'],
    watch: production
      ? false
      : {
          onRebuild(error, result) {
            if (error) {
              console.log(`Build failed with error: ${error}`);
              process.exit(1);
            }

            getMetafileAnalyze(result.metafile).then((text) => {
              console.log('Rebuild completed successfully');
              console.log(text);
            });
          },
        },
  })
  .then((result) => {
    getMetafileAnalyze(result.metafile).then((text) => {
      console.log('\nBuild completed successfully');
      console.log(text);
    });
  })
  .catch((error) => {
    console.log(`Build failed with error: ${error}`);
    process.exit(1);
  });
