import { app, BrowserWindow } from 'electron';
import path from 'path';

const WINDOW_INITIAL_WIDTH = 1100;
const WINDOW_INITIAL_HEIGHT = 700;

const ASSETS_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');
const ICON_PATH = path.join(ASSETS_PATH, 'icon.png');
const URL =
  process.env.NODE_ENV !== 'development'
    ? `file://${path.join(__dirname, '..', 'react', 'index.html')}`
    : 'http://localhost:8080';

let main: BrowserWindow | null = null;

const createWindow = () => {
  main = new BrowserWindow({
    width: WINDOW_INITIAL_WIDTH,
    height: WINDOW_INITIAL_HEIGHT,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
    icon: ICON_PATH,
  });

  main.loadURL(URL);

  main.on('closed', () => {
    main = null;
  });

  main.once('ready-to-show', () => {
    if (main) {
      main.show();
    }
  });
};

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (main === null) {
    createWindow();
  }
});
