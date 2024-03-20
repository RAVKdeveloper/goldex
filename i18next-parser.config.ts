export default {
  defaultNamespace: 'translation',
  lexers: {
    jsx: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['ru', 'en'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/*.tsx', 'src/*.jsx'],
}
