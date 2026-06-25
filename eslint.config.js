import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: {
      tsconfigPath: false,
    },
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    ignores: ['dist*', 'unpackage/**', 'output', 'cache', 'static', 'public', '**/node_modules/', '**/*.d.ts', '**/*.md', 'src/uni_modules'],
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'import/first': 'off',
    },
  }
)
