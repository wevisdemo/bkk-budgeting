import { parse as papaParse, ParseResult } from "papaparse";

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

// "https://docs.google.com/spreadsheets/d/1L6rVuwhfpyhx2eK0reUx-hTJd4vMv8aelgJrGPoYS2s/edit?gid=830974957#gid=830974957&single=true&output=csv";

interface CSV_ROW {
  budget_year: string;
  plan_proj_name: string;
  flag: string;
  O_S: string;
  "output/proj": string;
  output_proj_name: string;
  amount: string;
  output_no: string;
  output_name: string;
  output_name1: string;
  purpose_proj: string;
  sub_strategy: string;
  strategy: string;
  plan_strategy: string;
  side: string;
  integration: string;
  fund_grp_name: string;
  county: string;
  name_organization: string;
}

let cached: BudgetRow[] | undefined;

/**
 * fetchDataSource fetches and cleans data from Google Sheets
 * @returns all cleaned rows available
 */
export const fetchDataSource = async (): Promise<BudgetRow[]> => {
  if (cached) {
    return Promise.resolve(cached);
  }

  const dataText = await (await fetch(GOOGLE_SHEETS_CSV)).text();
  const result = await parse<CSV_ROW>(dataText);

  if (result.errors && result.errors.length > 0) {
    return Promise.reject(result.errors);
  }
  const mapped = result.data.map(
    (row): BudgetRow => ({
      budgetYear: Number(row.budget_year),
      planProjName: row.plan_proj_name,
      flag: row.flag,
      os: row.O_S,
      outputProj: row["output/proj"],
      outputProjName: row.output_proj_name,
      amount: formatAmount(row.amount),
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
  cached = mapped;
  return mapped;
};

const formatAmount = (amount: string) => {
  return Number(amount.replace(/,/g, ""));
};

const isIntegration = (rawValue: string): boolean => {
  return rawValue !== "-" && rawValue !== "";
};

function parse<T>(text: string) {
  return new Promise<ParseResult<T>>((resolve, reject) => {
    papaParse<T>(text, {
      download: false,
      complete: resolve,
      error: reject,
      header: true,
    });
  });
}
