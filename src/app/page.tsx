"use client"
import { useState} from "react";
import SideBar from './components/sideBar'

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className="h-full w-full flex">
      <SideBar open={open} onToggle={toggle}>
        123
      </SideBar>
    </div>
  );
}
