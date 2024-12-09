import { LegacyRef } from 'react'
import styled from 'styled-components'

interface Props {
  $ref?: LegacyRef<HTMLInputElement>
  $id?: string
  $value?: string | number | readonly string[]
  $name?: string
  $disabled?: boolean
  $checked?: boolean
  $readonly?: boolean
  $defaultChecked?: boolean
  $multiple?: boolean
}

// noinspection CssUnresolvedCustomProperty,CssUnknownProperty
/**
 * @cssvar --check-size – width, height / default: 24px;
 * @cssvar --check-fc – color / default: inherit;
 * @param $ref {LegacyRef<HTMLInputElement>?} attr.ref
 * @param $id {string?} attr.id
 * @param $value {string | number | readonly string[]?} attr.value
 * @param $name {string?} attr.name
 * @param $disabled {boolean?} attr.disabled
 * @param $checked {boolean?} attr.checked
 * @param $readonly {boolean?} attr.readonly
 * @param $defaultChecked {boolean?} attr.defaultChecked
 * @param $multiple {boolean?} attr.multiple
 */
const Check = styled.span.attrs<Props>((props) => ({
  children: (
    <>
      <input
        ref={props.$ref}
        type='checkbox'
        id={props.$id}
        value={props.$value}
        name={props.$name}
        disabled={props.$disabled}
        checked={props.$checked}
        defaultChecked={props.$defaultChecked}
        multiple={props.$multiple}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />
      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path fill='currentColor' />
      </svg>
    </>
  ),
}))`
  display: inline-block;
  user-select: none;
  width: var(--check-size, 24px);
  height: var(--check-size, 24px);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  color: var(--check-fc, inherit);

  input + svg > path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + svg > path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + svg > path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`

export default Check
