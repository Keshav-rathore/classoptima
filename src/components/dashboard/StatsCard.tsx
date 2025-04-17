
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  linkTo: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count, icon: Icon, linkTo }) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-center mb-2">
          <Icon className="text-classoptima-blue w-5 h-5 mr-2" />
          <h3 className="text-gray-600">{title}</h3>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">{count}</p>
        <Link to={linkTo} className="text-sm text-classoptima-blue hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default StatsCard;
