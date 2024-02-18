import { ActionButton, ActionButtonProps } from './ActionButton'
import { FaRegTrashCan } from 'react-icons/fa6'

export function DeleteNoteButton({ ...props }: ActionButtonProps) {
  return (
    <ActionButton {...props} className="bg-red-500/50">
      <FaRegTrashCan className="text-zinc-300" />
    </ActionButton>
  )
}
