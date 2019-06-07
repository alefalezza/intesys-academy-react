import { IMaterialList } from "../components/home/materials/types";
import React, { useState, useEffect } from "react";

const apiEndpoint = "http://localhost:3000/materials";

interface IMaterialProvider {
  materials: IMaterialList;
  setMaterials: React.Dispatch<React.SetStateAction<IMaterialList>>;
}

export const MaterialContext = React.createContext({
  materials: { drugs: [], nursing: [] },
  setMaterials: () => {}
} as IMaterialProvider);

export const getMaterials = (): Promise<IMaterialList> =>
  fetch(apiEndpoint).then(r => r.json());

export const MaterialProvider: React.FunctionComponent = ({ children }) => {
  const [materials, setMaterials] = useState({
    drugs: [],
    nursing: []
  } as IMaterialList);
  return (
    <MaterialContext.Provider value={{ materials, setMaterials }}>
      {children}
    </MaterialContext.Provider>
  );
};
