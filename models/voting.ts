import { StrategyTypes } from "./strategies";

export interface Vote {
  title: string;
  progress: number;
  type: StrategyTypes;
}
