module.exports = {
    'parser': 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    'extends': [
        'eslint:recommended', // eslint规则里打对勾的都会默认开启
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended'
    ],
    'plugins': [
        'react',
        'jsx-control-statements'
    ],
    "settings": {
        "react": {                  
            "version": "999.999.999"
        }
    },
    'globals': {
        //配置全局变量
        '_': true,
        'moment': true
    },
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'jsx-control-statements/jsx-control-statements': true
    },
    'rules': {
        'no-unused-vars': 0,//未使用过的变量0:关闭规则，1:开启规则
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'eqeqeq': ['warn', 'always'],
        'max-len': ['warn', 120],
        'no-extra-semi': 'error',//禁止不必要的分号
        'no-multi-spaces': 'error',//不允许重复使用分隔空格
        'no-multiple-empty-lines': 'error',//禁止出现多行空行（最多两行）
        'quotes': [2, 'single'],// js中使用单引号


        // React相关校验规则
        'react/jsx-indent': [2, 4],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-no-undef': [2, { allowGlobals: true }],

        // 'react/sort-comp': 0,
        // 'react/jsx-indent': [2, 4],
        // 'react/display-name': 'warn',
        // 'react/no-children-prop': 0,
        // 'react/prop-types': ['warn', {ignore: ['className', 'children', 'style', 't']}],
        // 'react/jsx-no-undef': ['warn', {allowGlobals: true}],
        // 'react/no-deprecated': 'warn',
        // 'react/no-string-refs': 'warn',
        // 'react/forbid-prop-types': 0,
        // 'react/jsx-filename-extension': 0,
        // 'react/jsx-indent-props': 0,
        // 'react/jsx-closing-bracket-location': 0,
        // 'react/jsx-first-prop-new-line': 0,
        // 'react/jsx-boolean-value': ['warn', 'always'],
        // 'react/no-array-index-key':0,
        // 'react/no-multi-comp': 0,
        // 'react/prefer-stateless-function': 0,
        // 'react/no-find-dom-node': 'warn',
        // 'import/extensions': 0,
        // 'import/no-unresolved': 0,
        // 'import/no-extraneous-dependencies': 0,
        // 'import/no-dynamic-require': 0,
    },
};
