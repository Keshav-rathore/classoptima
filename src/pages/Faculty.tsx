
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Upload, PenSquare, Trash2, Search } from "lucide-react";

interface FacultyMember {
  id: string;
  name: string;
  department: string;
  expertise: string[];
  email: string;
}

const facultyData: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. John Smith",
    department: "Computer Science",
    expertise: ["Data Structures", "Algorithms"],
    email: "smith@example.com",
  },
  {
    id: "2",
    name: "Dr. Robert Johnson",
    department: "Computer Science",
    expertise: ["Database", "Software Engineering"],
    email: "johnson@example.com",
  },
  {
    id: "3",
    name: "Prof. Sarah Williams",
    department: "Information Technology",
    expertise: ["Web Development", "Cloud Computing"],
    email: "williams@example.com",
  },
  {
    id: "4",
    name: "Dr. Emily Brown",
    department: "Computer Science",
    expertise: ["Operating Systems", "Computer Architecture"],
    email: "brown@example.com",
  },
  {
    id: "5",
    name: "Prof. Michael Davis",
    department: "Information Technology",
    expertise: ["AI", "Machine Learning"],
    email: "davis@example.com",
  },
];

const Faculty: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");

  const filteredFaculty = facultyData.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-classoptima-blue" />
            <h1 className="text-2xl font-bold text-gray-800">Faculty Management</h1>
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

        <p className="text-gray-600">Manage faculty members, their subjects, and availability</p>

        <div className="flex space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search faculty..."
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
          {filteredFaculty.map((faculty) => (
            <div 
              key={faculty.id} 
              className="bg-white rounded-md shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faculty.name}</h3>
              <p className="text-gray-600 mb-2">{faculty.department}</p>
              
              <div className="mb-2">
                <span className="text-gray-600 font-medium">Expertise:</span>{" "}
                <span className="text-gray-600">{faculty.expertise.join(", ")}</span>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 font-medium">Email:</span>{" "}
                <span className="text-gray-600">{faculty.email}</span>
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

export default Faculty;
