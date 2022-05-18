/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 02/05/2022 - 02:13:49
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/05/2022
 * - Author          : mario
 * - Modification    :
 **/

// const { remote } = require("electron");
// const win = remote.getCurrentWindow();
// console.log('__dirname')
// console.log(__dirname)
// const win = require(`./electron/index`)
// require('dotenv').config()

// const env = process.env

// const win = require('./createWindow')

// document.querySelector('#quit-btn').addEventListener('click', () => {
//     alert('Fechando...')
//     window.close()
// })

// (() => console.log(document.querySelector('#close')))()

// document.querySelector('#close').addEventListener('click', () => {
//     console.log('Close')
//     window.close();
// })

// document.querySelector('#maximize').addEventListener('click', () => {
//     console.log('Maximize')
//     !win.isMaximized() ? win.maximize() : win.unmaximize();
// })

// document.querySelector('#minimize').addEventListener('click', () => {
//     console.log('Minimize')
//     win.minimize();
// })

// document.querySelector('#uname').addEventListener('load', () => {
//     console.log('Value Change')
//     document.querySelector('#uname').value = env.SF_USERNAMEs
// })

// let minimizeWindow = () => {
// 	console.log("Minimize");
// 	window.minimize();
// };

// let maximizeWindow = () => {
// 	console.log("Maximize");
// 	!window.isMaximized() ? window.maximize() : window.unmaximize();
// };

let closeWindow = () => {
	console.log("Close");
	win.close();
};

// const uname = () => env.SF_USERNAME
// const pword = () => env.SF_PASSWORD
