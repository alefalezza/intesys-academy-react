export interface IMaterialItem {
  id: number;
  name: string;
  quantity: number;
  weeksForRefueling: number;
}

export interface IMaterialList {
  drugs: IMaterialItem[];
  nursing: IMaterialItem[];
}
