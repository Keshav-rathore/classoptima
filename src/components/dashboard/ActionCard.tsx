
import React from "react";
import { Button } from "@/components/ui/button";

interface ActionCardProps {
  title: string;
  description: string;
  subDescription?: string;
  actionLabel: string;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  subDescription,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {subDescription && <p className="text-gray-500 text-sm mb-4">{subDescription}</p>}
      <Button 
        onClick={onAction}
        className="bg-classoptima-blue hover:bg-blue-700 text-white w-full"
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default ActionCard;
