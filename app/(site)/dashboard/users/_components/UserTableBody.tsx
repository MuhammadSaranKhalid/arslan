import { TableBody } from "@/components/ui/table";
import React from "react";
import UserTableRow from "./UserTableRow";

function UserTableBody({
  users,
  toggleDialog,
  toggleAlert,
}: {
  users: any;
  toggleDialog: (a: any) => any;
  toggleAlert: () => any;
}) {
  return (
    <TableBody>
      {users?.map((user: any, index: number) => (
        <UserTableRow
          key={index}
          user={user}
          toggleEdit={toggleDialog}
          toggleAlert={toggleAlert}
        />
      ))}
    </TableBody>
  );
}

export default UserTableBody;
