"use client";
import { useState, useRef } from "react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
const DatePicker = ({ label, value, onChange }) => {
  const ref = useRef();

  const [date, setDate] = useState(value || new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onChange(newDate);
    ref.current.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  };

  return (
    <Popover>
      <Label className="text-md p-1" htmlFor="date">
        {label || "Date"}
      </Label>
      <PopoverTrigger asChild ref={ref}>
        <Button
          id="date"
          type="button"
          variant={"outline"}
          className="text-md h-12 py-4 px-3 justify-start text-left"
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
export default DatePicker;
