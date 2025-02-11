const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        title: "Raices Educativas",
        icon: "icon.ico", // Agrega un icono si lo deseas
        webPreferences: {
            nodeIntegration: false, // Para evitar riesgos de seguridad
            contextIsolation: true
        }
    });

    // Cargar una app web
    mainWindow.loadURL("http://localhost:5500/index.html");

    // Opcional: Quitar barra de herramientas si quieres una apariencia más nativa
    //mainWindow.setMenu(null);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
