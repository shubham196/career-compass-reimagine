import React from "react";
import { Building, MapPin, Users, TrendingUp, Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BranchData {
  name: string;
  ranks: {
    year: string;
    rank: string;
  }[];
}

interface CollegeInfo {
  name: string;
  location: string;
  state: string;
  totalBranches: number;
  topBranches: BranchData[];
  logo?: string;
  establishedYear?: number;
  type?: string;
}

interface CollegeInfoCardProps {
  college: CollegeInfo;
  onViewMore?: () => void;
}

const CollegeInfoCard: React.FC<CollegeInfoCardProps> = ({ college, onViewMore }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg leading-tight mb-1">{college.name}</h3>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{college.location}</span>
              </div>
              {college.establishedYear && (
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>Est. {college.establishedYear}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-white/80">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200/50">
          <div className="text-xs font-medium text-blue-700 mb-1">State</div>
          <div className="font-semibold text-blue-900">{college.state}</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 rounded-lg border border-emerald-200/50">
          <div className="text-xs font-medium text-emerald-700 mb-1">Total Branches</div>
          <div className="font-semibold text-emerald-900 flex items-center gap-1">
            <Users className="w-4 h-4" />
            {college.totalBranches}
          </div>
        </div>
      </div>

      {/* Top Branches Section */}
      <div className="p-4 pt-0">
        <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200/60">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              Top Branches (Closing Ranks)
            </h4>
          </div>
          
          <div className="space-y-0">
            {college.topBranches.map((branch, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <div className="p-4">
                  <div className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    {branch.name}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {branch.ranks.map((rankData, rankIndex) => (
                      <div key={rankIndex} className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-md border border-purple-200/50">
                        <div className="text-xs font-medium text-purple-700 mb-1">{rankData.year}</div>
                        <div className="font-bold text-purple-900">{rankData.rank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 pt-0">
        <button
          onClick={onViewMore}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2.5 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <span>View More Details</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
};

export default CollegeInfoCard;