import React, { useEffect, useState } from "react";
import { IMaterialList } from "../components/home/materials/types";

const apiEndpoint = "http://localhost:3000/materials";

export const MaterialContext = React.createContext({
  drugs: [],
  nursing: []
} as IMaterialList);

export const getMaterials = (): Promise<IMaterialList> =>
  fetch(apiEndpoint).then(r => r.json());

export const MaterialProvider: React.FunctionComponent = ({ children }) => {
  const [materials, setMaterials] = useState({
    drugs: [],
    nursing: []
  } as IMaterialList);

  useEffect(() => {
    getMaterials().then(materials => setMaterials(materials));
  }, []);

  return (
    <MaterialContext.Provider value={{ ...materials }}>
      {children}
    </MaterialContext.Provider>
  );
};
