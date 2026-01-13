"use client";

import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function DemoDrawer() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a description for the drawer content.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-4 p-4">
            <p>Here you can put any content you like: forms, menus, or information.</p>
            <p>Drawer is scrollable if content is longer than the screen.</p>
          </div>

          <DrawerFooter>
            <Button variant="outline" onClick={() => alert("Action Cancelled")}>
              Cancel
            </Button>
            <Button onClick={() => alert("Action Confirmed")}>Confirm</Button>
          </DrawerFooter>

          <DrawerClose asChild>
            <button className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200">
              <X className="h-4 w-4" />
            </button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
