import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number | string; // Define the expected type for `rating`
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <Badge className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      <span className="text-white-500">{rating}</span>
    </Badge>
  );
};

export default Rating;
