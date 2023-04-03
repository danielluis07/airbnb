"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Praia",
    icon: TbBeach,
    description: "Essa propriedade fica próximo de uma praia!",
  },
  {
    label: "Moinhos de Vento",
    icon: GiWindmill,
    description: "Essa propriedade possui moinhos de vento!",
  },
  {
    label: "Moderna",
    icon: MdOutlineVilla,
    description: "Essa propriedade é moderna!",
  },
  {
    label: "Zona Rural",
    icon: TbMountain,
    description: "Essa propriedade fica na zona rural!",
  },
  {
    label: "Piscina",
    icon: TbPool,
    description: "Essa propriedade possui uma piscina!",
  },
  {
    label: "Ilhas",
    icon: GiIsland,
    description: "Essa propriedade fica em uma ilha!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Essa propriedade fica próxima a um lago!",
  },
  {
    label: "Esquiagem",
    icon: FaSkiing,
    description: "Essa propriedade possui atividades de esquiagem!",
  },
  {
    label: "Castelos",
    icon: GiCastle,
    description: "Essa propriedade possui um castelo ancestral!",
  },
  {
    label: "Cavernas",
    icon: GiCaveEntrance,
    description: "Essa propriedade fica em uma caverna!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Essa propriedade possui atividades de acampamento!",
  },
  {
    label: "Ártico",
    icon: BsSnow,
    description: "Essa propriedade fica em um ambiente no ártico!",
  },
  {
    label: "Deserto",
    icon: GiCactus,
    description: "Essa propriedade fica no deserto!",
  },
  {
    label: "Celeiro",
    icon: GiBarn,
    description: "Essa propriedade possui um celeiro!",
  },
  {
    label: "Luxo",
    icon: IoDiamond,
    description: "Essa propriedade é nova e luxuosa!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        ">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
