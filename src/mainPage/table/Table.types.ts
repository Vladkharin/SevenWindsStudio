export type OPTIONS = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string;
};

export type DATALIST = {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: DATALIST[] | [];
}[];
