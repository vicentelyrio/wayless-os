#!/usr/bin/env -S ags run

import app from 'ags/gtk4/app'

import { Bar } from './Bar'

import tokens from '@styles/tokens.css'
import style from './styles.css'

app.start({
  css: tokens.concat(style),
  instanceName: 'WaylessOS-Bar',
  main() {
    app.get_monitors().map(Bar)
  }
})
