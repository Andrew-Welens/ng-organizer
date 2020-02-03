const {app, BrowserWindow, Menu} = require('electron');

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    });

    Menu.setApplicationMenu(null);
    win.loadURL(`file://${__dirname}/dist/organizer/index.html`);

    // win.webContents.openDevTools();

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    })
}
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
});
