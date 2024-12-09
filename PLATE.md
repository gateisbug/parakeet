# CSS
## reset.css
```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1em;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input[type='submit'] {
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
}

input {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
}
```

## typo.css
```css
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: cover 99.5%
*/

.fcw {
  color: var(--fg-w);
}
.fc {
  color: var(--fg);
}
.fcs {
  color: var(--fg-s);
}
.fcl {
  color: var(--fg-link);
}

.e1,
.e2,
.e3,
.e4,
.t1,
.t2,
.t3,
.t4,
.s1,
.s2,
.s3,
.b1,
.b2,
.caption,
.overline {
  /*letter-spacing: -0.02em;*/
}

.e1 {
  font-size: 96px;
  line-height: 120px;
}

.e2 {
  font-size: 60px;
  line-height: 80px;
}

.e3 {
  font-size: 48px;
  line-height: 64px;
}

.e4 {
  font-size: 34px;
  line-height: 48px;
}

.t1 {
  font-size: 32px;
  line-height: 44px;
}

.t2 {
  font-size: 28px;
  line-height: 40px;
}

.t3 {
  font-size: 26px;
  line-height: 38px;
}

.t4 {
  font-size: 24px;
  line-height: 32px;
}

.s1 {
  font-size: 20px;
  line-height: 28px;
}

.s2,
.s3 {
  font-size: 18px;
  line-height: 26px;
}

.b1 {
  font-size: 16px;
  line-height: 24px;
}

.b2 {
  font-size: 14px;
  line-height: 22px;
}

.caption {
  font-size: 12px;
  line-height: 18px;
}

.overline {
  font-size: 10px;
  line-height: 16px;
}

.fwb {
  font-weight: 700;
}

.fws {
  font-weight: 600;
}

.fwm {
  font-weight: 500;
}

.fwr {
  font-weight: 400;
}

.lh {
  line-height: 1em;
}

.word-break {
  word-break: keep-all;
  white-space: normal;
  overflow-wrap: break-word;
}

.ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  word-break: break-all;
}

.el-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
```

## theme.css
```css
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

:root {
  --primary: #ffb74d;
  --on-primary: #1c2025;
  --primary-hover: #b28035;

  --warn: #ffc107;
  --warn-hover: #e6ac00;
  --safe: #43a047;
  --safe-hover: #388e3c;
  --info: #42a5f5;
  --info-hover: #1e88e5;
  --danger: #e53935;
  --danger-hover: #c62828;

  --scroll: #686868;
  --loader-color: var(--primary);

  --fg: #d1d7e0; /* Default Font Color */
  --fg-s: #fff; /* Strong Font Color */
  --fg-w: #9198a1; /* Weak Font Color */
  --fg-link: #4493f8; /* Link Font Color */
  --fg-muted: #9198a1;

  --bg-null: #000; /* Null Background Color */
  --bg-body: #0d1117; /* Body Background Color */
  --bg-default: #151b23; /* Layout Background Color */
  --bg-inset: #010409; /* Top Layout Background Color */
  --bg-muted: #151b23;

  --lc: #3d444d; /* border color normal */
  --lc-w: #656c76; /* border color weak */
  --lc-s: #f0f6fc; /* border color strong */
  --lc-muted: #3d444db3;

  /*@media (prefers-color-scheme: light) {*/
  /*  --fg: #1f2328; !* Default Font Color *!*/
  /*  --fg-s: #25292e; !* Strong Font Color *!*/
  /*  --fg-w: #59636e; !* Weak Font Color *!*/
  /*  --fg-link: #0969da; !* Link Font Color *!*/
  /*  --fg-muted: #59636e;*/

  /*  --bg-null: #fff; !* Null Background Color *!*/
  /*  --bg-body: #f1f1f2; !* Body Background Color *!*/
  /*  --bg-default: #f3f3f4; !* Layout Background Color *!*/
  /*  --bg-inset: #101010; !* Top Layout Background Color *!*/
  /*  --bg-muted: #f6f8fa;*/

  /*  --lc-w: #818b98; !* border color weak *!*/
  /*  --lc: #d1d9e0; !* border color normal *!*/
  /*  --lc-s: #f6f8fa; !* border color strong *!*/
  /*  --lc-muted: #d1d9e0b3;*/
  /*}*/
  /*@media (prefers-color-scheme: dark) {*/
  /*  --fg: #d1d7e0; !* Default Font Color *!*/
  /*  --fg-s: #fff; !* Strong Font Color *!*/
  /*  --fg-w: #9198a1; !* Weak Font Color *!*/
  /*  --fg-link: #4493f8; !* Link Font Color *!*/
  /*  --fg-muted: #9198a1;*/

  /*  --bg-null: #000; !* Null Background Color *!*/
  /*  --bg-body: #0d1117; !* Body Background Color *!*/
  /*  --bg-default: #151b23; !* Layout Background Color *!*/
  /*  --bg-inset: #010409; !* Top Layout Background Color *!*/
  /*  --bg-muted: #151b23;*/

  /*  --lc: #3d444d; !* border color normal *!*/
  /*  --lc-w: #656c76; !* border color weak *!*/
  /*  --lc-s: #f0f6fc; !* border color strong *!*/
  /*  --lc-muted: #3d444db3;*/
  /*}*/
}
```

## global.css
```css
:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
    'Pretendard Variable', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 1rem;

  color: var(--fg);
  background-color: var(--bg-null);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

#root {
  background-color: var(--bg-body);
}

.ov-a {
  overflow: auto;
}
.ov-a::-webkit-scrollbar {
  /*width: 4px;*/
  width: 0;
  height: 4px;
}
.ov-a::-webkit-scrollbar-thumb {
  background-color: var(--scroll);
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.ov-a::-webkit-scrollbar-track {
  background-color: transparent;
}
```

# code quality
## .eslintrc.json
```json
{
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "prettier"
  ],
  "parserOptions": {
    "project": [
      "./tsconfig.json",
      "./tsconfig.app.json",
      "./tsconfig.node.json"
    ]
  },
  "rules": {
    "sort-imports": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "pathGroups": [
          {
            "pattern": "@xui/**",
            "group": "external"
          },
          {
            "pattern": "@xutil/**",
            "group": "external"
          },
          {
            "pattern": "@app/**",
            "group": "internal"
          },
          {
            "pattern": "@assets/**",
            "group": "internal"
          },
          {
            "pattern": "@components/**",
            "group": "internal"
          },
          {
            "pattern": "@util/**",
            "group": "internal"
          },
          {
            "pattern": "@views/**",
            "group": "internal"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "react",
          "react-dom",
          "styled-components",
          "lodash-es",
          "recoil",
          "react-router-dom"
        ]
      }
    ],
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 1,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/button-has-type": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/class-literal-property-style": 1,
    "@typescript-eslint/no-unused-expressions": 1,
    "@typescript-eslint/explicit-function-return-type": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "no-nested-ternary": 1
  }
}
```

## .eslintignore
```text
node_modules
dist
out
.gitignore
```

## .prettierrc
```json
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSameLine": false
}
```

## .prettierignore
```text
out
dist
pnpm-lock.yaml
LICENSE.md
tsconfig.json
tsconfig.*.json
```

# 