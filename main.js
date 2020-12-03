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
  mainWindow.loadURL("https://discord.com");

  const xmenu = new Menu();
  xmenu.append(
    new MenuItem({
      type: "checkbox",
      label: "隠さない",
      click: function (e) {
        //checked = e.checked
      },
    })
  );
  xmenu.append(
    new MenuItem({
      type: "normal",
      label: "URLをコピー",
      click: function (e) {
        //clipboard.writeText(nowURL)
      },
    })
  );

});

// ElectronのMenuの設定
const templateMenu = [
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo',
            },
            {
                role: 'redo',
            },
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click(item, focusedWindow){
                    if(focusedWindow) focusedWindow.reload()
                },
            },
            {
                type: 'separator',
            },
            {
                role: 'resetzoom',
            },
            {
                role: 'zoomin',
            },
            {
                role: 'zoomout',
            },
            {
                type: 'separator',
            },
            {
                role: 'togglefullscreen',
            }
        ]
    },
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
