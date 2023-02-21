module.exports = {
  extends: [
     
       'plugin:vue/recommended' 
  ],
  rules: {
      
  }
}
module.exports = { 
  parser: '@typescript-eslint/parser', 
  extends: [ 
    'plugin:vue3/recommended', 
    'plugin:@typescript-eslint/recommended', 
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: { 
    ecmaVersion: 2018, 
    sourceType: 'module', 
    ecmaFeatures: { 
      jsx: true, 
      tsx: true, 
    },
  },
  rules: { 
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
  },
}