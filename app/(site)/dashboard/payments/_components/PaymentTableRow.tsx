import React from "react";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";

function PaymentTableRow({ payment }: { payment: any }) {
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">Liam Johnson</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          liam@example.com
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">Sale</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          Fulfilled
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  );
}

export default PaymentTableRow;
