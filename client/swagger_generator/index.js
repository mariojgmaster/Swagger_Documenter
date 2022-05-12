/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/05/2022 - 12:34:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)