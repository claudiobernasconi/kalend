# Kalend - A Simple Calendar Component for React

- multiple views (day, three days, week, month, agenda)
- events
- drag and drop (only mouse events)
- mobile friendly

![Alt text](screenshot.png?raw=true 'Title')

### React support
- Kalend supports React 19

### Versioning & History
- [Changelog](/CHANGELOG.md) & [Changelog Archive](/CHANGELOG_ARCHIVE.md)
- This project was originally developed by nibdo and forked after it was abandoned for over 2 years.
- The original package is available as [kalend](https://www.npmjs.com/package/kalend) (v.0.1.3 - v.0.17.6) while current versions are published as [kalend-evo](https://www.npmjs.com/package/kalend-evo) (starting with v.0.20.1).
- Until stable version 1 updates might include breaking changes. 
    
### Documentation
The documentation was rescued from the abandoned project and updated as best effort. Keep in mind that the package name changed from [kalend](https://www.npmjs.com/package/kalend) to [kalend-evo](https://www.npmjs.com/package/kalend-evo).

Please open an issue/pull request if you find anything wrong/outdated in the documentation.

https://kalend-docs.azurewebsites.net

### LIVE demo
https://kalend-demo.azurewebsites.net

# Install
```bash
npm install kalend-evo
```
# Example

```js
import Kalend, { CalendarView } from 'kalend-evo' // import component
import 'kalend-evo/dist/styles/index.css'; // import styles

function App() {
  return (
    <>
      <Kalend
        onEventClick={onEventClick}
        onNewEventClick={onNewEventClick}
        events={[]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        onSelectView={onSelectView}
        selectedView={selectedView}
        onPageChange={onPageChange}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'en'}
      />
    </>
  );
}

export default App;
```

### Events

Before passing events to calendar, adjust data to this format:
```js
const events = [
    {
        id: 1,
        startAt: '2024-11-21T18:00:00.000Z',
        endAt: '2024-11-21T19:00:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'test',
        color: 'blue',
        calendarID: 'work'
    },
    {
        id: 2,
        startAt: '2024-11-21T18:00:00.000Z',
        endAt: '2024-11-21T19:00:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'test',
        color: 'blue'
    }
]
```
According to your needs, you can set the timezone for each event and also set the default timezone with the "timezone" prop in IANA format.
If you don't provide a timezone prop, your system's default timezone will be used.

You can keep other event properties; those will be ignored.

### Troubleshooting

#### The Calendar Does Not Show a Timetable

Your parent element has to have some height, so Kalend will inherit it and fit accordingly.
