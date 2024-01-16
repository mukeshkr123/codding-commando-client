import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Assume there's an API utility function for making requests
// Replace 'apiUpdateRole' with the actual function you use to make the API call

export function SelectRole() {
  const [selectedRole, setSelectedRole] = React.useState(null);

  const handleAssignClick = async () => {
    if (selectedRole) {
      try {
        console.log("Role  updated");
      } catch (error) {
        console.error("Error updating role:", error);
      }
    } else {
      console.warn("Please select a role before assigning");
    }
  };

  return (
    <div className="bg-slate-100 mt-6 p-4 flex flex-col gap-4">
      <h2 className="font-medium">Role </h2>
      <div className="flex items-center gap-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder="Select a Role"
              onChange={(value) => setSelectedRole(value)}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Role</SelectLabel>
              <SelectItem value="mentor">Mentor</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={handleAssignClick}>Assign</Button>
      </div>
    </div>
  );
}
