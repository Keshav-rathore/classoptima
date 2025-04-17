
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar, Filter } from "lucide-react";

interface ClassSession {
  id: string;
  title: string;
  instructor: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
  color?: string;
}

const timeSlots = [
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
];

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const classSessions: ClassSession[] = [
  {
    id: "1",
    title: "Programming Basics",
    instructor: "Dr. Smith",
    room: "Room 101",
    day: "Monday",
    startTime: "10:00 - 11:00",
    endTime: "11:00",
    color: "border-blue-500",
  },
  {
    id: "2",
    title: "Calculus",
    instructor: "Dr. Brown",
    room: "Room 201",
    day: "Tuesday",
    startTime: "10:00 - 11:00",
    endTime: "11:00",
    color: "border-blue-500",
  },
  {
    id: "3",
    title: "Discrete Math",
    instructor: "Dr. Johnson",
    room: "Room 105",
    day: "Monday",
    startTime: "11:00 - 12:00",
    endTime: "12:00",
    color: "border-blue-500",
  },
  {
    id: "4",
    title: "Physics",
    instructor: "Dr. Davis",
    room: "Room 102",
    day: "Tuesday",
    startTime: "12:00 - 01:00",
    endTime: "13:00",
    color: "border-blue-500",
  },
  {
    id: "5",
    title: "Digital Logic",
    instructor: "Prof. Williams",
    room: "Room 203",
    day: "Monday",
    startTime: "01:00 - 02:00",
    endTime: "14:00",
    color: "border-blue-500",
  },
  {
    id: "6",
    title: "Physics Lab",
    instructor: "Dr. Davis",
    room: "Lab 1",
    day: "Tuesday",
    startTime: "02:00 - 03:00",
    endTime: "15:00",
    color: "border-green-500",
  },
];

const Timetable: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("1st Year");
  const [selectedClass, setSelectedClass] = useState("CSE-1A");
  const [selectedWeek, setSelectedWeek] = useState("Current Week");

  const getSessionsByTimeAndDay = (time: string, day: string) => {
    return classSessions.filter(
      (session) => session.startTime === time && session.day === day
    );
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-classoptima-blue" />
            <h1 className="text-2xl font-bold text-gray-800">Class Timetable</h1>
          </div>
          <div className="flex space-x-3">
            <Button variant="default" className="bg-classoptima-blue hover:bg-blue-700">
              Generate Timetable
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Year:</label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1st Year">1st Year</SelectItem>
                <SelectItem value="2nd Year">2nd Year</SelectItem>
                <SelectItem value="3rd Year">3rd Year</SelectItem>
                <SelectItem value="4th Year">4th Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Class:</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CSE-1A">CSE-1A</SelectItem>
                <SelectItem value="CSE-1B">CSE-1B</SelectItem>
                <SelectItem value="CSE-2A">CSE-2A</SelectItem>
                <SelectItem value="CSE-2B">CSE-2B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-2 flex items-end space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Current Week">Current Week</SelectItem>
                <SelectItem value="Next Week">Next Week</SelectItem>
                <SelectItem value="Week of April 10">Week of April 10</SelectItem>
                <SelectItem value="Week of April 17">Week of April 17</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="col-span-1 flex justify-end items-end">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="grid grid-cols-6 border-b">
            <div className="p-4 font-medium text-gray-500 bg-gray-50 border-r"></div>
            {weekDays.map((day) => (
              <div key={day} className="p-4 font-medium text-center border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          {timeSlots.map((timeSlot) => (
            <div key={timeSlot} className="grid grid-cols-6 border-b last:border-b-0">
              <div className="p-4 font-medium text-gray-600 bg-gray-50 border-r">
                {timeSlot}
              </div>
              
              {weekDays.map((day) => {
                const sessions = getSessionsByTimeAndDay(timeSlot, day);
                return (
                  <div key={`${day}-${timeSlot}`} className="p-2 border-r last:border-r-0 bg-gray-50">
                    {sessions.map((session) => (
                      <div 
                        key={session.id}
                        className={`p-2 bg-white rounded border-l-4 ${session.color} h-full`}
                      >
                        <h4 className="font-medium text-gray-800">{session.title}</h4>
                        <p className="text-sm text-gray-600">{session.instructor}</p>
                        <p className="text-sm text-gray-500">{session.room}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Timetable;
