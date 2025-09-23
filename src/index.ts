#!/usr/bin/env -S ags run

import app from 'ags/gtk4/app'

import tokens from '@styles/tokens.css'
import { Config } from '@constants/config'
import { Bar, BarStyles } from '@modules'

app.start({
  icons: Config.paths.assets,
  instanceName: Config.apps.desktop,
  css: tokens.concat(BarStyles),
  main() {
    app.get_monitors().map(Bar)
  }
})
