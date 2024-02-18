import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import NotesPreview from './NotesPreview'

export default function NotePreviewList({ className, ...props }: ComponentProps<'ul'>) {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)}>
        <span>Ops, não há notas1</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notesMock.map((note) => (
        <NotesPreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
