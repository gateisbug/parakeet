import { css } from 'styled-components'

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --button-bc – bacground-color / default: inherit;
 * @cssvar --button-fc – color / default: inherit;
 * @cssvar --button-lc – border-color / default: inherit;
 */
const buttonStyle = css`
  font-family: inherit;

  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--button-bc, inherit);
  color: var(--button-fc, inherit);
  border-color: var(--button-lc, inherit);
`

export default buttonStyle

// import buttonStyle from '@bedrock/button.style'
// import styled from 'styled-components'
//
// const Button = styled.button`
//   ${buttonStyle};
//
//   --button-bc: #333;
//   --button-fc: white;
//   --button-lc: #999;
//
//   border-width: 1px;
//   border-style: solid;
//   padding: 8px 16px;
//   border-radius: 8px;
//
//   &:hover {
//     --button-bc: #222;
//     --button-lc: #666;
//   }
//   &:active {
//     --button-bc: #111;
//   }
// `
//
// export default Button
