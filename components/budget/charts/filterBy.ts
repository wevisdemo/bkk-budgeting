import { orderByStrategy } from "../utils";
export const filterBy = (label: string, filterYears: any) => {
  if (label === "งบมากไปน้อย") {
    return (filterYears = {
      items: orderByStrategy(filterYears.items, "amount", "desc"),
      total: filterYears.total,
    });
  }
  if (label === "งบน้อยไปมาก") {
    return (filterYears = {
      items: orderByStrategy(filterYears.items, "amount", "asc"),
      total: filterYears.total,
    });
  }
  if (label === "ตัวอักษร") {
    return (filterYears = {
      items: orderByStrategy(filterYears.items, "outputProjectName", "asc"),
      total: filterYears.total,
    });
  }
};

export const filterByOrganize = (label: string, filterYears: any) => {
  if (label === "งบมากไปน้อย") {
    return (filterYears = orderByStrategy(filterYears, "amount", "desc"));
  }
  if (label === "งบน้อยไปมาก") {
    return (filterYears = orderByStrategy(filterYears, "amount", "asc"));
  }
  if (label === "ตัวอักษร") {
    return (filterYears = orderByStrategy(filterYears, "nameOrganization", "asc"));
  }
};
