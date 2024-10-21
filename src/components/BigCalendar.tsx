"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";

import { calendarEvents } from "@/lib/data";
import { FC, useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar: FC = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="startDate"
      endAccessor="endDate"
      titleAccessor="title"
      allDayAccessor="allDay"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={new Date(2027, 1, 0, 8, 0, 0)}
      max={new Date(2027, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
