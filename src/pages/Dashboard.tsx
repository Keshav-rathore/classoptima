
import React from "react";
import { Users, BookOpen, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/dashboard/StatsCard";
import ActionCard from "@/components/dashboard/ActionCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const handleGenerateNow = () => {
    toast({
      title: "Generating timetable",
      description: "This may take a few moments...",
    });
    // This would typically trigger the timetable generation process
  };

  const handleConfigure = () => {
    // Navigate to configuration page or open a configuration modal
  };

  const handleViewHistory = () => {
    // Navigate to timetable history page
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Timetable Coordinator Dashboard</h1>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center gap-2">
              Export
            </Button>
            <Button className="bg-classoptima-blue hover:bg-blue-700 text-white">
              View Timetable
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <StatsCard
            title="Faculty Members"
            count={24}
            icon={Users}
            linkTo="/faculty"
          />
          <StatsCard
            title="Subjects"
            count={18}
            icon={BookOpen}
            linkTo="/subjects"
          />
          <StatsCard
            title="Rooms & Labs"
            count={12}
            icon={Building2}
            linkTo="/rooms-labs"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ActionCard
            title="Generate Timetable"
            description="Create a new automated timetable"
            subDescription="The system will apply all configured constraints and generate an optimal timetable."
            actionLabel="Generate Now"
            onAction={handleGenerateNow}
          />
          <ActionCard
            title="Manage Scheduling"
            description="Configure timetable parameters"
            subDescription="Set constraints, working hours, and scheduling rules for timetable generation."
            actionLabel="Configure"
            onAction={handleConfigure}
          />
          <ActionCard
            title="Previous Timetables"
            description="Access past schedules"
            subDescription="View and download previously generated timetables for reference."
            actionLabel="View History"
            onAction={handleViewHistory}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
