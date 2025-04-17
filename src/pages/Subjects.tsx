
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Upload, PenSquare, Trash2, Search } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  code: string;
  semester: number;
  department: string;
  faculty: string;
}

const subjectsData: Subject[] = [
  {
    id: "1",
    name: "Data Structures",
    code: "CS201",
    semester: 3,
    department: "Computer Science",
    faculty: "Dr. John Smith",
  },
  {
    id: "2",
    name: "Algorithms",
    code: "CS202",
    semester: 3,
    department: "Computer Science",
    faculty: "Dr. Robert Johnson",
  },
  {
    id: "3",
    name: "Database Systems",
    code: "CS301",
    semester: 5,
    department: "Computer Science",
    faculty: "Prof. Sarah Williams",
  },
  {
    id: "4",
    name: "Operating Systems",
    code: "CS302",
    semester: 5,
    department: "Computer Science",
    faculty: "Dr. Emily Brown",
  },
  {
    id: "5",
    name: "Artificial Intelligence",
    code: "CS401",
    semester: 7,
    department: "Computer Science",
    faculty: "Prof. Michael Davis",
  },
];

const Subjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");

  const filteredSubjects = subjectsData.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-classoptima-blue" />
            <h1 className="text-2xl font-bold text-gray-800">Subject Management</h1>
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

        <p className="text-gray-600">Manage subjects, faculty assignments, and constraints</p>

        <div className="flex space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search subjects..."
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
          {filteredSubjects.map((subject) => (
            <div 
              key={subject.id} 
              className="bg-white rounded-md shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{subject.name}</h3>
              <p className="text-gray-500 mb-4">{subject.code} • Semester {subject.semester}</p>
              
              <div className="mb-2">
                <span className="text-gray-600 font-medium">Department:</span>{" "}
                <span className="text-gray-600">{subject.department}</span>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 font-medium">Faculty:</span>{" "}
                <span className="text-gray-600">{subject.faculty}</span>
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

export default Subjects;
