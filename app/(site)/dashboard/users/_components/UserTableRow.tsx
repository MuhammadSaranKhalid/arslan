import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const UserTableRow = ({
  user,
  toggleEdit,
  toggleAlert,
}: {
  user: any;
  toggleEdit: (a: any) => any;
  toggleAlert: () => void;
}) => {
  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
  }

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{user.fullName}</TableCell>
      <TableCell>
        <Badge variant="outline">{user.status}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{user.paymentFee}</TableCell>
      <TableCell className="hidden md:table-cell">{user.area}</TableCell>
      <TableCell className="hidden md:table-cell">
        {formatTimestamp(user.createdAt)}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => toggleEdit(user)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleAlert()}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default UserTableRow;
