import { css } from 'styled-components'

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --badge-bc – bacground-color / default: inherit;
 */
const badgeStyle = css`
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--badge-bc, inherit);
`

export default badgeStyle
