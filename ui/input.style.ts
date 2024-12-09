import { css } from 'styled-components'

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --input-bc – bacground-color / default: inherit;
 * @cssvar --input-fc – color / default: inherit;
 * @cssvar --input-lc – border-color / default: inherit;
 * @readonly min-width: 0
 */
const inputStyle = css`
  font-family: inherit;
  font-size: inherit;

  display: inline-block;
  box-sizing: border-box;
  transition:
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;

  background-color: var(--input-bc, inherit);
  color: var(--input-fc, inherit);
  border-color: var(--input-lc, inherit);
`

export default inputStyle

// import inputStyle from '@bedrock/input.style'
// import styled from 'styled-components'
//
// const Input = styled.input`
//   ${inputStyle};
//
//   --input-bc: #333;
//   --input-fc: white;
//   --input-lc: #999;
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
