
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  BookOpen, 
  Building2, 
  Settings 
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/"
  },
  {
    title: "Timetable",
    icon: Calendar,
    path: "/timetable"
  },
  {
    title: "Faculty",
    icon: Users,
    path: "/faculty"
  },
  {
    title: "Subjects",
    icon: BookOpen,
    path: "/subjects"
  },
  {
    title: "Rooms & Labs",
    icon: Building2,
    path: "/rooms-labs"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      {sidebarItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-4 ${
              isActive
                ? "bg-classoptima-blue text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-white" : "text-classoptima-gray-dark"}`} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
