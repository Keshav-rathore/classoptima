
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Upload, PenSquare, Trash2, Search } from "lucide-react";

interface Room {
  id: string;
  name: string;
  type: "Classroom" | "Lab";
  capacity: number;
  department: string;
  features: string[];
}

const roomsData: Room[] = [
  {
    id: "1",
    name: "R201",
    type: "Classroom",
    capacity: 60,
    department: "Computer Science",
    features: ["Projector", "AC"],
  },
  {
    id: "2",
    name: "R202",
    type: "Classroom",
    capacity: 45,
    department: "Computer Science",
    features: ["Projector", "AC"],
  },
  {
    id: "3",
    name: "L101",
    type: "Lab",
    capacity: 30,
    department: "Computer Science",
    features: ["Computers", "Projector", "AC"],
  },
  {
    id: "4",
    name: "L102",
    type: "Lab",
    capacity: 30,
    department: "Computer Science",
    features: ["Computers", "Projector", "AC"],
  },
  {
    id: "5",
    name: "R301",
    type: "Classroom",
    capacity: 50,
    department: "Information Technology",
    features: ["Projector", "AC"],
  },
];

const RoomsLabs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");

  const filteredRooms = roomsData.filter((room) =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-classoptima-blue" />
            <h1 className="text-2xl font-bold text-gray-800">Rooms & Labs Management</h1>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-classoptima-blue hover:bg-blue-700 flex items-center gap-2">
              + Add New
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Excel
            </Button>
          </div>
        </div>

        <p className="text-gray-600">Manage classrooms, labs, and their availability</p>

        <div className="flex space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search infrastructure..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="list" onValueChange={setViewMode}>
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div 
              key={room.id} 
              className="bg-white rounded-md shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{room.name}</h3>
              <p className="text-gray-500 mb-4">{room.type} • Capacity: {room.capacity}</p>
              
              <div className="mb-2">
                <span className="text-gray-600 font-medium">Department:</span>{" "}
                <span className="text-gray-600">{room.department}</span>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 font-medium">Features:</span>{" "}
                <span className="text-gray-600">{room.features.join(", ")}</span>
              </div>
              
              <div className="mt-auto flex justify-end space-x-3">
                <Button variant="outline" size="sm" className="flex items-center">
                  <PenSquare className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RoomsLabs;
