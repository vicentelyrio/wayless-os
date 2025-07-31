#!/usr/bin/env -S ags run

import app from 'ags/gtk4/app'

import tokens from '@styles/tokens.css'

import { Bar, BarStyles } from '@modules'

app.start({
  css: tokens.concat(BarStyles),
  instanceName: 'WaylessOS-Desktop',
  main() {
    app.get_monitors().map(Bar)
  }
})
