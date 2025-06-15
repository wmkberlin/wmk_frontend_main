import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      extract: true, // Extract CSS to a separate file
      modules: true, // Enable CSS modules (optional)
    }),
  ],
};