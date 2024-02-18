import { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from './Button'

export function ActionButtonRow({ ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
