import React, { useState, useMemo } from 'react';
import {
  addDays,
  format,
  startOfWeek,
  subWeeks,
  addWeeks,
} from 'date-fns';
import { de } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Project.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { MdCalendarMonth } from 'react-icons/md';

function ProjectSchedule() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentHourFormatted = String(currentHour).padStart(2, '0') + ':00';

  const [selectedWeekStart, setSelectedWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const hours = useMemo(() => {
    const list = [];
    for (let i = -3; i <= 3; i++) {
      let h = (currentHour + i + 24) % 24;
      list.push(String(h).padStart(2, '0') + ':00');
    }
    return list;
  }, [currentHour]);

  const weekDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(selectedWeekStart, i));
    }
    return days;
  }, [selectedWeekStart]);

  const toggleSlot = (day, hour) => {
    const dateStr = format(day, 'yyyy-MM-dd');
    const exists = selectedSlots.find(
      (slot) => slot.date === dateStr && slot.hour === hour
    );
    if (exists) {
      setSelectedSlots((prev) =>
        prev.filter((slot) => !(slot.date === dateStr && slot.hour === hour))
      );
    } else {
      setSelectedSlots((prev) => [...prev, { date: dateStr, hour }]);
    }
  };

  const isSelected = (day, hour) => {
    const dateStr = format(day, 'yyyy-MM-dd');
    return selectedSlots.some(
      (slot) => slot.date === dateStr && slot.hour === hour
    );
  };

  const goToPreviousWeek = () => {
    setSelectedWeekStart((prev) => subWeeks(prev, 1));
  };

  const goToNextWeek = () => {
    setSelectedWeekStart((prev) => addWeeks(prev, 1));
  };

  const goToToday = () => {
    setSelectedWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };

  const handleDateSelect = (date) => {
    setSelectedWeekStart(startOfWeek(date, { weekStartsOn: 1 }));
    setShowDatepicker(false);
  };

  const weekRangeFormatted = useMemo(() => {
  const start = format(selectedWeekStart, 'd. MMMM yyyy', { locale: de });
  const end = format(addDays(selectedWeekStart, 6), 'd. MMM yyyy', { locale: de });
  return `${start} – ${end}`;
}, [selectedWeekStart]);
  return (
    <div>
      <p className="projectText">
        Hier sieht ihr meinen Stream-Zeitplan und könnt so up to date bleiben.
      </p>

      <div className="projectSchedule">
        <h2>Streaming Kalenderansicht:</h2>
        <br></br>
        {/* Navigation Buttons */}
        <div className="calendarControls">
          <button className="btn" onClick={goToToday}>Heute</button>
          <button className="btn" onClick={goToPreviousWeek}>
            <RiArrowLeftSLine />
          </button>
          <button className="btn" onClick={goToNextWeek}>
            <RiArrowRightSLine />
          </button>
          <div className="datepicker-wrapper">
            <button className="btn" onClick={() => setShowDatepicker((prev) => !prev)}>
              <MdCalendarMonth />
            </button>
            {showDatepicker && (
              <div className="datepicker-popup">
                <DatePicker
                  selected={selectedWeekStart}
                  onChange={handleDateSelect}
                  inline
                />
              </div>
            )}
          </div>
          <span className="week-range-display">{weekRangeFormatted}</span>
        </div>

        {/* Datepicker */}


        {/* Zeitplan Tabelle */}
        <table className="calendarTable">
          <thead>
            <tr>
              <th className="cornerCell">GMT+2</th>
              {hours.map((hour) => (
                <th
                  key={hour}
                  className={`timeCell ${hour === currentHourFormatted ? 'currentHour' : ''}`}
                >
                  {hour}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekDays.map((day) => (
              <tr key={format(day, 'yyyy-MM-dd')}>
                <td className="dayCell">
                  <div>{format(day, 'EE', { locale: de })}</div> {/* Mo, Di, ... */}
                  <div>{format(day, 'd.M.')}</div>               {/* 29.7. */}
                </td>
                {hours.map((hour) => (
                  <td
                    key={hour}
                    className={`slotCell ${isSelected(day, hour) ? 'selected' : ''}`}
                    onClick={() => toggleSlot(day, hour)}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectSchedule;
