import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('closed', () => {
    mainWindow.close()
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') return
  app.quit()
})

app.whenReady().then(createWindow).catch(console.log)

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})