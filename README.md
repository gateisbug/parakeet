# parakeet
This repository is a submodule repository for inclusion in react.js-based projects. Be sure to refer to Installation and Usage.

## Installation
```shell
git submodule add https://github.com/gateisbug/parakeet.git path/to/submodule
git submodule update --init --recursive
git submodule status
git add .gitmodules path/to/submodule
git commit -m "Add submodule"
```

## Commit
```shell
cd path/to/submodule
git add .
git commit -m "commit message"
git push origin branch-name
```

## Peer Dependencies
```json
{
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@types/styled-components": "^5.1.34",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "styled-components": "^6.1.13",
  "typescript": "^5.5.2"
}
```