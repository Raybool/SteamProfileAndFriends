module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  importOrder: [
    '^dayjs/locale/(.*)$',
    '^src/utils/env$',
    '^(fs|path|http)$',
    '<THIRD_PARTY_MODULES>',
    '^package.json$',
    '^src/(?!assets)((?!\\.css$).)*$',
    '^(src/assets|assets)/(.*)$',
    '^(?!src)(.*)\\.css$',
    '^src/styles/(.*)\\.css$',
    '^src/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'lf',
};
