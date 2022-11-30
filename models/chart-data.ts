export interface SubstrategyChartData {
  name: string;
  amount: number;
}

export interface StrategyChartData {
  name: string;
  amount: number;
  substrategies: SubstrategyChartData[];
}

export interface YearChartData {
  year: number;
  amount: number;
  strategies: StrategyChartData[];
}

export interface ChartData {
  amount: number;
  years: YearChartData[];
}

export interface OrganizationChartData {
  nameOrganization: string;
  amount: number;
  strategies: StrategyChartData[];
}
