import { TabsDemo } from "@/components/add-profile";
import { Component } from "@/components/component";
import { ComponentTwo } from "@/components/component-two";
import React from "react";

const Marketing = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between ml-6 gap-x-6">
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </div>
      <div className="m-6">
        <Component />
      </div>
      <div className="flex items-center justify-evenly gap-x-6 ml-6">
        <ComponentTwo />
        <TabsDemo />
      </div>
    </div>
  );
};

export default Marketing;
