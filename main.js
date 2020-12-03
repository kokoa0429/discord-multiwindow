const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const clipboard = electron.clipboard;

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // alwaysOnTop: true,
    icon: __dirname + "/icon.png"
  });
  mainWindow.loadURL("https://discord.com")
});

// ElectronのMenuの設定
const templateMenu = [
    {
        label:"sushi",
        click(item,window) {
            console.log(window.webContents.getURL());
            const win = new BrowserWindow({
              height: 800,
              width: 1280
            });
            win.loadURL(window.webContents.getURL());
        }
    }
];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);
