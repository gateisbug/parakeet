import { ChangeEvent, useCallback, useRef } from 'react'

const useAutoResize = (
  autoResize?: boolean,
  maxHeight?: number,
  changeHandler?: (e: ChangeEvent) => void,
) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current

      if (autoResize && textarea) {
        textarea.style.height = 'auto'

        const newHeight = maxHeight
          ? Math.min(textarea.scrollHeight, maxHeight)
          : textarea.scrollHeight

        textarea.style.height = `${newHeight}px`

        if (maxHeight === undefined) {
          textarea.style.overflowY = 'hidden'
        } else {
          textarea.style.overflowY =
            e.target.value.length > 0 && textarea.scrollHeight > maxHeight
              ? 'auto'
              : 'hidden'
        }
      }

      if (changeHandler) changeHandler(e)
    },
    [autoResize, maxHeight, changeHandler],
  )

  return {
    textareaRef,
    onChange,
  }
}

export default useAutoResize
