import axios from "axios";
import { parse } from "csv-parse/sync";

export interface BudgetRow {
  budgetYear: number;
  planProjName: string;
  flag: string;
  os: string;
  outputProj: string;
  outputProjName: string;
  amount: number;
  outputNo: string;
  outputName: string;
  outputName1: string;
  purposeProj: string;
  subStrategy: string;
  strategy: string;
  planStrategy: string;
  side: string;
  integration: boolean;
  fundGrpName: string;
  county: string;
  nameOrganization: string;
}

const GOOGLE_SHEETS_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ85mQgwOqSIwu-QOdD4nPgC9K8_UgXFgOW1p45p5HIedDihVCNTDIOAU2O-ibjyKMGNpj3jI_E65g1/pub?gid=1938129512&single=true&output=csv";

/**
 * fetchDataSource fetches and cleans data from Google Sheets
 * @returns all cleaned rows available
 */
export const fetchDataSource = async (): Promise<BudgetRow[]> => {
  const res = await axios.get(GOOGLE_SHEETS_CSV, { responseType: "blob" });
  const csv = (await res.data.text()) as string;

  const rows = parse(csv);

  return rows.map(
    (row: { [key: string]: string }): BudgetRow => ({
      budgetYear: Number(row.budget_year),
      planProjName: row.plan_proj_name,
      flag: row.flag,
      os: row.O_S,
      outputProj: row["output/proj"],
      outputProjName: row.output_proj_name,
      amount: Number(row.amount),
      outputNo: row.output_no,
      outputName: row.output_name,
      outputName1: row.output_name1,
      purposeProj: row.purpose_proj,
      subStrategy: row.sub_strategy,
      strategy: row.strategy,
      planStrategy: row.plan_strategy,
      side: row.side,
      integration: isIntegration(row.integration),
      fundGrpName: row.fund_grp_name,
      county: row.county,
      nameOrganization: row.name_organization,
    }),
  );
};

const isIntegration = (rawValue: string): boolean => {
  return rawValue !== "-" && rawValue !== "";
};
