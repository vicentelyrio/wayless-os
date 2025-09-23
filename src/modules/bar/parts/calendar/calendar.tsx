import { Gtk } from 'ags/gtk4'
import { createPoll } from 'ags/time'
import { dayjs, DateFormats } from '@lib/date'

export function BarCalendar() {
  const counter = createPoll('', 1000, 'date', (time) => dayjs(time).format(DateFormats.datetime))

  return (
    <menubutton visible $type="start" hexpand halign={Gtk.Align.CENTER}>
      <box orientation={Gtk.Orientation.HORIZONTAL} spacing={4}>
        <image iconName="ws_calendar-symbolic" pixelSize={24} />
        <label label={counter} />
      </box>
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}
