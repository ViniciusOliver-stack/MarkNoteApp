import { ActionButtonRow, Content, RootLayout, Sidebar } from './components'
import NotePreviewList from './components/NotePreviewList'

export default function App() {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" />
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
    </RootLayout>
  )
}
