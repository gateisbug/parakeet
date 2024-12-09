import { css } from 'styled-components'

/**
 * @readonly padding: 6px
 * @readonly width: 32px
 * @readonly height: 32px
 */
export const modalClose = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
`

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --modal-shadow – box-shadow / default: unset;
 * @cssvar --modal-bc – bacground-color / default: inherit;
 * @readonly padding: 32px
 * @readonly border-radius: 4px
 */
export const modalContainer = css`
  padding: 32px;
  border-radius: 4px;
  box-sizing: border-box;

  //box-shadow: var(--shadow, 0 8px 32px 0 rgba(0, 0, 51, 0.08));
  box-shadow: var(--modal-shadow, unset);
  background-color: var(--modal-bc, inherit);
`
