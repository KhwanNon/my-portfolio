import Box from "@/base/components/ui/box";
import React from "react";
import { MyInfo } from "@/base/constanst";

export default function ProfileComponent() {
  return (
    <>
      <div className="text-yellow text-center text-label-large">
        PROFILE AND INTERESTS
      </div>
      <Box h={20} />
      <div className="text-white text-small" style={{ maxWidth: 700 }}>
        {MyInfo.details_profile}
      </div>
    </>
  );
}
