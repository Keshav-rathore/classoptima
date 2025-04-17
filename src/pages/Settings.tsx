
import React from "react";
import Layout from "@/components/layout/Layout";
import { Settings as SettingsIcon } from "lucide-react";

const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <SettingsIcon className="h-6 w-6 text-classoptima-blue" />
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        </div>

        <div className="bg-white rounded-md shadow-sm p-8 flex items-center justify-center">
          <p className="text-lg text-gray-600">Settings page coming soon!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
