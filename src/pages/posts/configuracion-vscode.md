---
layout: ../../layouts/MarkdownLayout.astro
title: 'Configuración de Visual Studio Code'
author: FuSoraS
description: 'Configuración de Visual Studio Code'
---
## Abrir el archivo de configuración
1. Precionar `Ctrl + Shift + p`
2. Escribir: `Open User Settings (JSON)`
3. Lo elegimos con las flechas del teclado y precionamos enter
### Archivo de configuración actual 2024-11-23
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