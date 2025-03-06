import { DateTime } from 'luxon';
import timezoneSoft from 'timezone-soft';

interface DateZoneData {
    zone: string;
}

class Datez {
    static fromFormat(baseDate: string, format: string, data: DateZoneData): DateTime {
        const { zone } = data;
        const date = DateTime.fromFormat(baseDate, format, {
            zone,
        });

        if (date.invalidReason === 'unsupported zone') {
            const softedTimezone = getSoftTimezone(zone);
            if (!softedTimezone) {
                return date;
            }
            return DateTime.fromFormat(baseDate, format, {
                zone: softedTimezone,
            });
        }

        return date;
    }

    static fromDate(baseDate: Date, data: DateZoneData): DateTime {
        const { zone } = data;
        const date = DateTime.fromJSDate(baseDate, {
            zone,
        });

        if (date.invalidReason === 'unsupported zone') {
            const softedTimezone = getSoftTimezone(zone);
            if (!softedTimezone) {
                return date;
            }
            return DateTime.fromJSDate(baseDate, {
                zone: softedTimezone,
            });
        }

        return date;
    }

    static fromISO(baseDate: string, data: DateZoneData): DateTime {
        const { zone } = data;
        const date = DateTime.fromISO(baseDate, {
            zone,
        });

        if (date.invalidReason === 'unsupported zone') {
            const softedTimezone = getSoftTimezone(zone);
            if (!softedTimezone) {
                return date;
            }
            return DateTime.fromISO(baseDate, {
                zone: softedTimezone,
            });
        }

        return date;
    }

    static setZone(date: DateTime, zone: string): DateTime {
        const result = date.setZone(zone);

        if (result.invalidReason === 'unsupported zone') {
            const softedTimezone = getSoftTimezone(zone);
            if (!softedTimezone) {
                return date;
            }
            return date.setZone(softedTimezone);
        }

        return result;
    }
}

// Helper functions to handle timezone conversion
function getCorrectTimezone(timezone: string): string {
    switch (timezone) {
        case 'Central Europe Standard Time':
            return 'Central European Standard Time';
        case 'Central Europe Time':
            return 'Central European Time';
        default:
            return timezone;
    }
}

function getSoftTimezone(timezone: string): string | undefined {
    const result = timezoneSoft(getCorrectTimezone(timezone));
    return result?.[0]?.iana;
}

export default Datez;
