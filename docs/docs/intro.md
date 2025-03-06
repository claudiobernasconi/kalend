---
sidebar_position: 1
---

# Intro

Kalend - A Simple Calendar Component for React

- multiple views (day, three days, week, month, agenda)
- events
- drag and drop (only mouse events)
- mobile friendly

### Versioning
Until stable version 1 updates might include breaking changes.

**Breaking changes**:
- 0.6.5 -> 0.7.0 - Kalend now accepts only array of events, you don't need to format them to dates like before

### LIVE DEMO: https://demo.kalend.org

## Getting Started

### Install

    npm i kalend-evo

### Usage

    import Kalend, { CalendarView } from 'kalend-evo' // import component
    import 'kalend-evo/dist/styles/index.css'; // import styles

        <Kalend
          onEventClick={onEventClick}
          onNewEventClick={onNewEventClick}
          events={{}}
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

