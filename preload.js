// 预加载脚本 - 在渲染进程中暴露有限的 API
const { contextBridge, ipcRenderer } = require('electron');

// 安全地暴露 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 示例：如果需要主进程通信，可以在此暴露方法
  // 例如：saveData: (data) => ipcRenderer.invoke('save-data', data)
});