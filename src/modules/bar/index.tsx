#!/usr/bin/env -S ags run

import app from 'ags/gtk4/app'

import { Bar } from './Bar'

import style from './style.scss'

app.start({
  css: style,
  instanceName: 'WaylessOS-Bar',
  main() {
    app.get_monitors().map(Bar)
  }
})
