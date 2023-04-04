import Box from "../../ui/box";
import React, { useState } from "react";
import TitleIcon from "../../ui/title_icon";
import { MyInfo } from "@/base/constanst";
import ModalPreview from "../modal/modal_preview";

export default function Project() {
  const [openPreview, setoOpenPreview] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const openModalPreview = (i: number, n: string) => {
    setIndex(i);
    setName(n);
    setoOpenPreview(true);
  };

  const renderProject = () =>
    MyInfo.project.map((item, index) => (
      <div key={`#${index}`}>
        {index !== 0 && <Box h={10} />}
        <div>
          <div style={{ flex: 1, fontWeight: "bold" }}>{item.name}</div>
          <div style={{ display: "flex" }}>
            <div>
              {item.details} <Box w={5} />
              <button
                className="text-button-underline"
                onClick={() => openModalPreview(index, item.name)}
              >
                Preview
              </button>
              {item.link !== "" && (
                <button
                  style={{ marginLeft: 10 }}
                  className="text-button-underline"
                  onClick={() => window.open(item.link)}
                >
                  Link
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <TitleIcon title={"Project"} state={"project"} />
      <div style={{ paddingLeft: 30 }}>{renderProject()}</div>
      {openPreview && (
        <ModalPreview index={index} setOpen={setoOpenPreview} name={name} />
      )}
    </div>
  );
}
