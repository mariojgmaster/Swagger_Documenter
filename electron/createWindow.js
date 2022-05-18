/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 02/05/2022 - 01:57:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const { BrowserWindow, Menu } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 700,
        minWidth: 1200,
        minHeight: 700,
        frame: true,
        resizable: true,
        movable: true,
        fullscreenable: true,
        center: true,
        autoHideMenuBar: true
    });
    
    win.setBackgroundColor('#111')
    // win.setMenu(null)

    // win.loadURL('http://localhost:3002/login?uname=mjribeiro%40triscal.com.br&pword=%406991oiraM')
    // win.loadURL('http://localhost:3002/login')
    win.loadFile(`${__dirname}/src/index.html`);
    // win.loadURL('http://localhost:3000')

    return win
}

module.exports = createWindow()