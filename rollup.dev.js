export default {
  onwarn ( warning ) {
    // skip irrelevant warnings
    if ( warning.code === 'EMPTY_EXPORT' ) return;

    // console.warn everything else
    console.warn(warning.code, warning.message );
  },
  name: 'demo',
  input: 'lib/es6_global/src/demo.js',
  output: {
    format: 'iife',
    file: 'dist/demo-bundle.js'
  },
  plugins: [
  ]
};