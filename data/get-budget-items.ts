import { BudgetRow, fetchDataSource } from "./fetch-data-source";
import { BudgetItem } from "~/models/budget-item";

export interface Filters {
  budgetYear?: number;
  strategy?: string;
  substrategy?: string;
  nameOrganization?: string;
  keyword?: string;
}

export interface BudgetItemResult {
  total: number;
  items: BudgetItem[];
}

export const getBudgetItems = async (filters?: Filters): Promise<BudgetItemResult> => {
  let rows = await fetchDataSource();
  if (filters) {
    if (filters.budgetYear) {
      rows = rows.filter(filterBudgetYear(filters.budgetYear));
    }

    if (filters.strategy) {
      rows = rows.filter(filterStrategy(filters.strategy));
    }

    if (filters.substrategy) {
      rows = rows.filter(filterSubstrategy(filters.substrategy));
    }

    if (filters.nameOrganization) {
      rows = rows.filter(filterNameOrganization(filters.nameOrganization));
    }

    if (filters.keyword) {
      rows = rows.filter(filterKeyword(filters.keyword));
    }
  }

  const mapped = rows.map(mapBudgetRowToBudgetItem);

  return {
    total: mapped.length,
    items: mapped,
  };
};

const filterBudgetYear = (budgetYear: number | undefined) => {
  return (row: BudgetRow) => row.budgetYear === budgetYear;
};

const filterStrategy = (strategy: string) => {
  return (row: BudgetRow) => row.strategy === strategy;
};

const filterSubstrategy = (substrategy: string) => {
  return (row: BudgetRow) => row.subStrategy === substrategy;
};

const filterNameOrganization = (nameOrganization: string) => {
  return (row: BudgetRow) => row.nameOrganization === nameOrganization;
};

const filterKeyword = (keyword: string) => {
  return (row: BudgetRow) => row.outputProjName.includes(keyword);
};

const mapBudgetRowToBudgetItem = (row: BudgetRow): BudgetItem => {
  return {
    budgetYear: row.budgetYear,
    outputProjectName: row.outputProjName,
    amount: row.amount || 0,
    purposeProject: row.purposeProj,
    substrategy: row.subStrategy,
    strategy: row.strategy,
    nameOrganization: row.nameOrganization,
  };
};
