/** @jsx jsx */
import { Editor } from 'slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>
      two
      <inline>
        three
        <inline>four</inline>
      </inline>
      <inline>five</inline>
    </block>
    <block>six</block>
  </editor>
)
export const test = editor => {
  return Array.from(
    Editor.positions(editor, {
      at: [],
      reverse: true,
      unit: 'word',
    })
  )
}
export const output = [
  { path: [2, 0], offset: 3 },
  { path: [2, 0], offset: 0 },
  { path: [1, 2, 0], offset: 4 },
  { path: [1, 0], offset: 0 },
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 0 },
]
