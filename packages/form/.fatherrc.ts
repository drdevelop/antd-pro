import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    transformer: 'babel',
    input: 'src',
    output: 'es',
  },
  cjs: {
    transformer: 'babel',
    input: 'src',
    output: 'lib',
  },
})
