---
title: 'Configuración de Visual Studio Code'
author: FuSoraS
description: 'Configuración de Visual Studio Code'
date: 2025-02-27
cover: 'image-vscode.png'
---
## Abrir el archivo de configuración
1. Presionar `Ctrl + Shift + p`
2. Escribimos: `Open User Settings (JSON)`
3. Lo elegimos con las flechas del teclado y presionamos enter
## Archivo de configuración completo
```json
{
	"editor.minimap.enabled": false,
	"editor.cursorBlinking":"expand",
	"editor.renderLineHighlight": "all",
	"editor.smoothScrolling": true,
	"workbench.colorTheme": "One Dark Pro Darker",
	"workbench.editor.enablePreview": false,
	"github.copilot.enable": {
		"*": true,
		"plaintext": false,
		"markdown": true,
		"scminput": false
	},
	"telemetry.telemetryLevel": "off",
	"intelephense.telemetry.enabled": false,
	"workbench.sideBar.location": "right",
	"workbench.activityBar.location": "top",
	"editor.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",
	"editor.fontLigatures": true,
	"editor.guides.bracketPairs": true,
	"editor.linkedEditing": true,
	"workbench.iconTheme": "symbols",
	"terminal.integrated.env.linux": {}
}
```
## Explicación
Desactivamos la telemetría de Microsoft
```json
{
	"telemetry.telemetryLevel": "off",
	"intelephense.telemetry.enabled": false,
}
```
### Otros
Guardar automáticamente el archivo con un delay de `3000` ms que es igual a 3 segundos
```json
{
	"files.autoSave": "afterDelay",
	"files.autoSaveDelay": 3000
}
```