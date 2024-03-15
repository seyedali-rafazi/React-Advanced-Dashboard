import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <div>
      <AppLayout>
        <SideBar>
          <CustomeNavlink path="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomeNavlink>
          <CustomeNavlink path="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomeNavlink>
        </SideBar>
      </AppLayout>
    </div>
  );
}

export default OwnerLayout;
