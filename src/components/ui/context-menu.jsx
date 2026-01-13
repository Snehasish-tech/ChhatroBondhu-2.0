"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";

export default function DemoContextMenu() {
  const [showNotifications, setShowNotifications] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("one");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="w-64 h-32 bg-white border rounded-lg shadow-md flex items-center justify-center cursor-pointer">
            Right Click Here
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent className="w-64">
          {/* Label */}
          <ContextMenuLabel>Actions</ContextMenuLabel>

          {/* Normal Items */}
          <ContextMenuItem onSelect={() => alert("Copied!")}>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onSelect={() => alert("Pasted!")}>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSeparator />

          {/* Checkbox Item */}
          <ContextMenuCheckboxItem
            checked={showNotifications}
            onCheckedChange={(checked) => setShowNotifications(Boolean(checked))}
          >
            Show Notifications
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          {/* Radio Group */}
          <ContextMenuRadioGroup
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          >
            <ContextMenuRadioItem value="one">Option One</ContextMenuRadioItem>
            <ContextMenuRadioItem value="two">Option Two</ContextMenuRadioItem>
            <ContextMenuRadioItem value="three">Option Three</ContextMenuRadioItem>
          </ContextMenuRadioGroup>

          <ContextMenuSeparator />

          {/* Submenu */}
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem onSelect={() => alert("Sub Option 1")}>Sub Option 1</ContextMenuItem>
              <ContextMenuItem onSelect={() => alert("Sub Option 2")}>Sub Option 2</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuSeparator />

          {/* Dangerous Action */}
          <ContextMenuItem
            onSelect={() => alert("Deleted!")}
            className="text-destructive"
          >
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
