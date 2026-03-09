# QIM Volume Explorer

The QIM Volume Explorer is a data exploration tool for 3D image analysis developed by the [QIM Center](https://qim.dk/).

It is implemented on top of the [vole-core library](https://github.com/allen-cell-animated/vole-core), made by the [Allen Institute for Cell Science](https://www.allencell.org/).

## Installation

The tool can be used by cloning the repository and ran using npm.

`git clone git@github.com:qim-center/vole-core.git`

`npm install`

`npm run dev`

## Features
- Volumetric data exploration
- Load OME-Zarr, OME-Tiff files from URL
- Intensity histogram, opacity
- Colour pickers
- Area of interest cropping
- OME-Zarr scale level selection

![Landing](https://github.com/qim-center/vole-core/blob/mvp/docs/screenshots/qim-ve-landing.png)
![High def](https://github.com/qim-center/vole-core/blob/mvp/docs/screenshots/qim-ve-high-def.png)
   
### Advanced

There are two hidden menus for advanced users, accessible by pressing `Ctrl + Alt + 1` and `Ctrl + Alt + 2`.

Advanced menus
![Advanced menus](https://github.com/qim-center/vole-core/blob/mvp/docs/screenshots/qim-ve-advanced-menus.png)
