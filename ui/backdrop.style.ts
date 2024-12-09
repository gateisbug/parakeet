import { css } from 'styled-components'

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --backdrop-bc – bacground-color / default: inherit;
 * @cssvar --backdrop-z – z-index / default: 1000;
 */
export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--backdrop-bc, inherit);
  z-index: var(--backdrop-z, 1000);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

export default backdrop
