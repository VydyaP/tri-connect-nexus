
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Filter, X } from "lucide-react";

interface FilterDialogProps {
  type: "developer" | "doctor" | "founder";
  onFiltersChange: (filters: string[]) => void;
}

const filterOptions = {
  developer: [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", 
    "Mobile Developer", "DevOps Engineer", "Data Engineer", 
    "Machine Learning Engineer", "UI/UX Developer", "Game Developer", 
    "Blockchain Developer", "Cloud Engineer", "Security Engineer"
  ],
  doctor: [
    "Cardiologist", "Neurologist", "Pediatrician", "Dermatologist", 
    "Orthopedic Surgeon", "Emergency Medicine", "Psychiatrist", 
    "Radiologist", "Anesthesiologist", "Oncologist", "Gynecologist", 
    "General Practitioner"
  ],
  founder: [
    "Tech Startup", "FinTech", "HealthTech", "EdTech", "E-commerce", 
    "SaaS", "AI/ML Startup", "Blockchain", "Green Tech", "Food Tech", 
    "Social Impact", "B2B Services"
  ]
};

const FilterDialog = ({ type, onFiltersChange }: FilterDialogProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const options = filterOptions[type];

  const toggleFilter = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(f => f !== filter)
      : [...selectedFilters, filter];
    
    setSelectedFilters(newFilters);
  };

  const applyFilters = () => {
    onFiltersChange(selectedFilters);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFiltersChange([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Filter {type}s</DialogTitle>
        </DialogHeader>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              {type === "developer" && "Developer Types"}
              {type === "doctor" && "Medical Specialties"}
              {type === "founder" && "Startup Categories"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <Badge
                  key={option}
                  variant={selectedFilters.includes(option) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => toggleFilter(option)}
                >
                  {option}
                  {selectedFilters.includes(option) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between space-x-2">
              <Button variant="outline" onClick={clearFilters} className="flex-1">
                Clear All
              </Button>
              <Button onClick={applyFilters} className="flex-1">
                Apply ({selectedFilters.length})
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
