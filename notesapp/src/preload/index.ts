import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //language system
    locale: navigator.language
  })
} catch (error) {
  console.error(error)
}
