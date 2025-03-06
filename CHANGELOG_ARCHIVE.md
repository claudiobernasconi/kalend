# Changelog Archive

This changelog contains the versions originally published by nibdo. Refer to the current [changelog](/CHANGELOG.md) for up-to-date information.

## 0.17.6
- added transition to calendar header
- fixed NaN bug when dragging new event
- added missing translation for "No events" in agenda view

## 0.17.5
- fixed bugs with timezones
- added Italian translation, thanks to @Tond28

## 0.17.4
- added support for more timezones

## 0.17.3
- fixed text layout in event

## 0.17.2
- fixed task icon position

## 0.17.0
- added task event type (https://docs.kalend.org/docs/basics/events)
- added option to disable resizing event with prop ```resizeDisabledConditions```
- fixed wrong result when dragging event with floating timezone 

## 0.16.3
- fixed clicking on custom event

## 0.16.2
- fixed wrong event position on day when DST happens

## 0.16.1
- fixed padding for event time

## 0.16.0
- changed timezone handling
- added layout functions to main repository

## 0.15.8
- fixed scrolling agenda view with custom header

## 0.15.7
- fixed scrolling to top in agenda view navigation

## 0.15.5
- fixed agenda view scrolling to date
- fixed changing selected date when switching views

## 0.15.3
- bug fixes
- added translations
- added custom new event text

## 0.15.2
- current timeline will update position in intervals
- added no events text to agenda view
- optimization for hooks by @yss14

## 0.15.1
- fix timezone problems when creating event 

## 0.15.0
- you can now replace event components with your own

## 0.14.18
- fixed overnight events in month view

## 0.14.17
- fixed event stacking

## 0.14.16
- fixed text position in event

## 0.14.15
- fixed stacking events in days view, adjust font size based on event height

## 0.14.14
- added props flag "testMode" to disable style validation for testing 

## 0.14.13
- fixed multi day events in header for day view
- add missing prop for mapped elements

## 0.14.12
- fixed all day event in day view

## 0.14.11
- fixed positioning for overnight events (thanks to @cazfletch)
- fixed onSelectView callback

## 0.14.10
- Fixed navigating to day view

## 0.14.9
- Fixed parsing event summary

## 0.14.8
- Fixed problems in agenda view layout

## 0.14.7
- Updated React peer dependency to 18
- Fixed minor bugs

## 0.14.5
- Fixed missing vertical lines in some browsers 

## 0.14.4
- You can now overwrite each event style by adding style object to event

## 0.14.3
- Added resetting func for dragging callback
- Added option to disable dragging and resizing

## 0.14.2
- Fixed layout and style issues
- Added click on day in days view

## 0.14.1
- Optimization for better contrast between event color and text

## 0.14.0
- Add dark theme support with prop ```isDark```

## 0.13.1
- Make auto scrolling to current time optional with prop autoScroll

## 0.13.0
- Added option to resize event in days view
- Added reverse dragging new event
- Added dragging for overflowing month events
- Fixed delay when dragging new event

## 0.12.1
- Fixed multi day events in agenda view
- Fixed all day text layout
- Fixed wrong calendar days in agenda view

## 0.12.0
- Refactored agenda view
- Added week numbers to month and day views
- Fix initialDate prop not working

## 0.11.2
- Fixed bug with wrong layout in 12-hour format

## 0.11.1
- Polished header with events

## 0.11.0
- Added timeline for current hour (prop ```showTimeLine```)
- Added auto-scroll to current time
- Added prop ```focusHour``` for scrolling to selected hour

## 0.10.5
- Added selected view to onNewEventClick callback

## 0.10.4
- Added option to define rules for disabling dragging events

## 0.10.3
- Added new event click in month view (on empty space in header)

## 0.10.2
- Fixed German translation, thanks to @aliesenli

## 0.10.1
- Fix floating all day header events

## 0.10.0
- Added dragging to create new event
- Added prop isNewEventOpen to control new event dragging element visibility

## 0.9.10
- Fixed event layout after switching views

## 0.9.9
- Fixed bug with not working disabled views and related problems in config, thanks to @vyamashiro

## 0.9.8
- Added navigation to day view from month view
- Keep selected date state when switching views

## 0.9.7
- Updated event click callbacks

## 0.9.6
- Fixed resizing events on hour height change

## 0.9.5
- Update kalend-layout package - fixed wrong entry

## 0.9.4
- Fixed loading month view

## 0.9.3
- Refactored initial layout and resizing events

## 0.9.2
- Fixed another index import, remove JSX type from main Kalend func

## 0.9.1
- Fixed index imports

## 0.9.0
- Added support to change primary colors

## 0.8.0
- Added support to replace built in header with custom components

## 0.7.5
- Fixed changing date in header after switching views

## 0.7.4
- Fixed error on resize
- Fixed recalculating event positions after resize event

## 0.7.3
- Fixed loading events with kalend-layout

## 0.7.2
- Better detection for touch devices
- Refactored overflowing events modal in month view

## 0.7.1
- Fix for overflowing events in month view
- Removed i18next from dependencies

## 0.7.0
- performance improvements
- support for server side calculations
- breaking change: events prop accepts simple array of events now

## 0.6.5
- added possible fix for missing height after init
- added russian translation

## 0.6.4
- fixed width layout issue in days view

## 0.6.3
- fixed date range in callback onPageChange

## 0.6.2
- fixed event propagation after dragging calendar events
- added original event to callback for dragging finish

## 0.6.0
- refactor month events, fixed displaying multi day events
- add modal for overflowing month events
- add localizations
- disabled dragging for touch events

## 0.5.0
- add option to change time format to 12 hours (AM/PM) or 24 hours
- add filtering events by calendarID
- fix calculating event after dragging when hourHeight wasn't default value

## 0.4.0
- add option to set Sunday as start of the week

## 0.3.0
- add dragging events in month view

## 0.2.2
- fix missing and flickering lines in week view
- events styling improvements
- fix hidden time in events

## 0.2.1
- fix all day events positions
- fix shrinking not overlapping events

## 0.2.0
- support for dragging events in week/days view
- re-rendering event changes should be smoother
- bug fixes

## 0.1.3
- fix style for initial month view
- sort agenda events

## 0.1.2
- fix calendar days calculations
- fix dropdown hover style

## 0.1.1
- add parcel integration

## 0.1.0
- new agenda list view

## 0.0.4
- hide dropdown icon when no options are available
- add validation to check if css file is imported

## 0.0.3
- add prefix to all classnames to prevent conflicts
- fix bug with timezone in events
- fix resetting view with today button
- add default system timezone and option for timezone prop

## 0.0.2
- move node-sass to dev dependancy
- move all styles to one css file
- support for Next.js
