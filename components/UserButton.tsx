"use client";

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

function UserButton() {
  return(
    <div>
      <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name="Mike" image="https://github.com/shadcn.png" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>session.user?.name</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
               
                <DropdownMenuItem >Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default UserButton