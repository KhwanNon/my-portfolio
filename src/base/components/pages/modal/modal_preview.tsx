import {
  assetIT1,
  assetIT2,
  assetIT3,
  assetIT4,
  assetBL1,
  assetBL2,
  assetBL3,
  assetBL4,
  assetVN4,
  assetVN3,
  assetVN2,
  assetVN1,
  assetG2G1,
  assetG2G2,
  assetG2G3,
  assetG2G4,
  assetEF1,
  assetEF2,
  assetEF3,
  assetEF4,
  assetEVP1,
  assetEVP2,
  assetEVP3,
  assetEVP4,
  assetEVP5,
  assetEVP6,
} from "@/generated/assets";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  setOpen: Function;
  index: number;
  name: string;
};

export default function ModalPreview({ setOpen, index, name }: Props) {
  const [images, setImages] = useState<any[]>([]);

  const close = () => {
    setOpen(false);
  };

  const G2G = [assetG2G1, assetG2G2, assetG2G3, assetG2G4];
  const VN = [assetVN4, assetVN3, assetVN2, assetVN1];
  const BL = [assetBL1, assetBL2, assetBL3, assetBL4];
  const EF = [assetEF1, assetEF2, assetEF3, assetEF4];
  const IT = [assetIT1, assetIT2, assetIT3, assetIT4];
  const EVP = [
    assetEVP1,
    assetEVP2,
    assetEVP3,
    assetEVP4,
    assetEVP5,
    assetEVP6,
  ];

  useEffect(() => {
    switch (index) {
      //! itech
      case 0:
        setImages(IT);
        break;
      //! vn
      case 1:
        setImages(VN);
        break;
      //! the blacklist
      case 2:
        setImages(BL);
        break;
      //! evp
      case 3:
        setImages(EVP);
        break;
      //! g2g
      case 4:
        setImages(G2G);
        break;
      //! enfa
      case 5:
        setImages(EF);
        break;
    }
  }, []);

  const renderImage = () =>
    images.map((item, i) => (
      <Image
        key={`#${i}`}
        src={item}
        alt={item}
        width="200"
        height="400"
        style={{ marginLeft: i === 0 ? 0 : 5 }}
      />
    ));

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div
          style={{
            paddingLeft: 15,
            paddingTop: 15,
            paddingRight: 15,
            paddingBottom: 15,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            display: "flex",
            background: "white",
            justifyContent: "space-between",
          }}
        >
          <div>{name}</div>
          <button className="text-button" onClick={close}>
            Close
          </button>
        </div>

        <div className="scrollmenu">{renderImage()}</div>
      </div>
    </div>
  );
}
