import { css } from 'styled-components'

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --textarea-bc – background-color / default: unset;
 * @cssvar --textarea-fc – color / default: inherit;
 * @cssvar --textarea-lc – border-color / default: inherit;
 * @readonly width: 100%
 * @readonly resize: none
 * @readonly min-width: 0
 * @readonly outline: none – &:focus
 */
const textareaStyle = css`
  font-family: inherit;
  font-size: inherit;

  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  resize: none;
  transition:
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;

  background-color: var(--textarea-bc, inherit);
  color: var(--textarea-fc, inherit);
  border-color: var(--textarea-lc, inherit);

  &:focus {
    outline: none;
  }
`

export default textareaStyle
