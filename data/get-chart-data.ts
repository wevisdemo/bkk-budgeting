import { getBudgetItems } from "./get-budget-items";
import { BudgetItem } from "~/models/budget-item";
import {
  ChartData,
  OrganizationChartData,
  StrategyChartData,
  SubstrategyChartData,
  YearChartData,
} from "~/models/chart-data";

export const getChartData = async (): Promise<ChartData> => {
  const { items } = await getBudgetItems();
  const chartDatas = getYearChartDatas(items);
  return {
    amount: chartDatas.reduce(sumAmount, 0),
    years: chartDatas,
  };
};

export const getChartDataGroupByOrganizations = async (
  year: number,
): Promise<OrganizationChartData[]> => {
  const { items } = await getBudgetItems({ budgetYear: year });
  return getOrganizationChartDatas(items);
};

const getYearChartDatas = (items: BudgetItem[]): YearChartData[] => {
  const chartDatas: YearChartData[] = [];

  const yearGroups = groupByKey("budgetYear", items);

  for (const year of Object.keys(yearGroups)) {
    const itemsInYear = yearGroups[year];
    const strategyChartDatas = getStrategyChartDatas(itemsInYear);
    chartDatas.push({
      year: Number(year),
      amount: strategyChartDatas.reduce(sumAmount, 0),
      strategies: strategyChartDatas,
    });
  }

  return chartDatas;
};

const getOrganizationChartDatas = (items: BudgetItem[]): OrganizationChartData[] => {
  const chartDatas: OrganizationChartData[] = [];

  const organizationGroups = groupByKey("nameOrganization", items);

  for (const organizationName of Object.keys(organizationGroups)) {
    const itemsInOrganization = organizationGroups[organizationName];
    const strategyChartDatas = getStrategyChartDatas(itemsInOrganization);

    chartDatas.push({
      nameOrganization: organizationName,
      amount: strategyChartDatas.reduce(sumAmount, 0),
      strategies: strategyChartDatas,
    });
  }

  return chartDatas;
};

const getStrategyChartDatas = (items: BudgetItem[]): StrategyChartData[] => {
  const chartDatas: StrategyChartData[] = [];

  const strategyGroups = groupByKey("strategy", items);

  for (const strategy of Object.keys(strategyGroups)) {
    const itemsInStrategy = strategyGroups[strategy];
    const substrategyChartDatas = getSubStrategyChartDatas(itemsInStrategy);
    chartDatas.push({
      name: strategy,
      amount: substrategyChartDatas.reduce(sumAmount, 0),
      substrategies: substrategyChartDatas,
    });
  }

  return chartDatas;
};

const getSubStrategyChartDatas = (items: BudgetItem[]): SubstrategyChartData[] => {
  const chartDatas: SubstrategyChartData[] = [];
  const substrategyGroups = groupByKey("substrategy", items);
  for (const substrategy of Object.keys(substrategyGroups)) {
    const itemsInSubstrategy = substrategyGroups[substrategy];
    chartDatas.push({
      name: substrategy,
      amount: itemsInSubstrategy.reduce(sumAmount, 0),
    });
  }
  return chartDatas;
};

const groupByKey = (
  key: keyof BudgetItem,
  items: BudgetItem[],
): { [key: string]: BudgetItem[] } => {
  const groups: { [key: string]: BudgetItem[] } = {};

  for (const item of items) {
    const existingGroup = groups[item[key]];
    if (existingGroup) {
      existingGroup.push(item);
    } else {
      groups[item[key]] = [item];
    }
  }

  return groups;
};

const sumAmount = (sum: number, amountable: { amount: number }) => {
  return sum + amountable.amount;
};
