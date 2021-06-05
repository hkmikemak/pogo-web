import { terser } from 'rollup-plugin-terser';
import { writeFileSync } from 'fs';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

/** @type { import("rollup-plugin-terser").Options } */
const terserOptions = {
  ecma: 2020,
  format: {
    comments: false,
    ecma: 2020
  }
};

const replaceOption = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  preventAssignment: true
};

const isProduction = process.env.NODE_ENV === 'production';

/** @type { Array<import("rollup").RollupOptions> }  */
const config = [
  {
    input: './src/js/index.ts',
    output: {
      file: 'dist/js/index.js',
      format: 'iife',
      name: 'app',
      sourcemap: !isProduction
    },
    plugins: [
      replace(replaceOption),
      svelte({
        preprocess: sveltePreprocess(),
        compilerOptions: {
          dev: !isProduction
        }
      }),
      css({
        output: (styles, styleNodes) => {
          writeFileSync(path.resolve(process.cwd(), 'src/css/component.css'), styles);
        }
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      typescript({
        sourceMap: !isProduction,
        inlineSourceMap: !isProduction
      }),
      isProduction && terser(terserOptions)
    ]
  },
  {
    input: './src/service-worker.ts',
    output: {
      file: 'dist/service-worker.js',
      format: 'cjs',
      sourcemap: !isProduction
    },
    plugins: [replace(replaceOption), resolve(), commonjs(), typescript(), isProduction && terser(terserOptions)]
  }
];

export default config;
