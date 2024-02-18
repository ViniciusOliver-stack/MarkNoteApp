import { ActionButton, ActionButtonProps } from './ActionButton'
import { LuFileSignature } from 'react-icons/lu'

export function NewNoteButton({ ...props }: ActionButtonProps) {
  return (
    <ActionButton {...props} className="hover:bg-blue-500/50">
      <LuFileSignature className="text-zinc-300" size={20} />
    </ActionButton>
  )
}
