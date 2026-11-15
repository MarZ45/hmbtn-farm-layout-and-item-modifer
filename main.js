const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const w = new BrowserWindow({ width: 1200, height: 860, title: "Farm Layout & Item Modifier by Maru",
    webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, "www", "index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
