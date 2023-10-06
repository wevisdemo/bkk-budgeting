import _ from "lodash";

export const borderFilter = (strategy: string) => {
  if (strategy === "การสร้างเมืองปลอดภัย") return "border-l-wv-safe";
  if (strategy === "การพัฒนาสิ่งแวดล้อมยั่งยืน") return "border-l-wv-environment";
  if (strategy === "การลดความเหลื่อมล้ำด้วยการบริหารเมือง")
    return "border-l-wv-equality";
  if (strategy === "การเชื่อมโยงเมืองที่มีความคล่องตัว")
    return "border-l-wv-connectivity";
  if (strategy === "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม")
    return "border-l-wv-democracy";
  if (strategy === "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ")
    return "border-l-wv-economic";
  if (strategy === "การสร้างความเป็นมืออาชีพในการบริหาร")
    return "border-l-wv-management";
  return "border-l-gray-600";
};

export const colorFilter = (strategy: string) => {
  if (strategy === "การสร้างเมืองปลอดภัย") return "bg-wv-safe";
  if (strategy === "การพัฒนาสิ่งแวดล้อมยั่งยืน") return "bg-wv-environment";
  if (strategy === "การลดความเหลื่อมล้ำด้วยการบริหารเมือง") return "bg-wv-equality";
  if (strategy === "การเชื่อมโยงเมืองที่มีความคล่องตัว") return "bg-wv-connectivity";
  if (strategy === "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม") return "bg-wv-democracy";
  if (strategy === "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ") return "bg-wv-economic";
  if (strategy === "การสร้างความเป็นมืออาชีพในการบริหาร") return "bg-wv-management";
  return "bg-gray-600";
};

export const handleAddSelected = (selector: string, className: string) => {
  if (document.querySelectorAll(selector))
    [...(document.querySelectorAll(selector) as any)]?.map(elem =>
      elem.classList.add(className),
    );
};

export const handleRemoveSelected = (selector: string, className: string) => {
  if (document.querySelectorAll(selector))
    [...(document.querySelectorAll(selector) as any)]?.map(elem =>
      elem.classList.remove(className),
    );
};

export const convertMillion = (num: number, isDecimal = true) => {
  const numFormat = num / 1000000;
  return (
    numFormat.toLocaleString("en-US", {
      maximumFractionDigits: isDecimal ? 2 : 0,
      minimumFractionDigits: isDecimal ? 2 : 0,
    }) || ""
  );
};

export const strategyList = () => [
  "การสร้างเมืองปลอดภัย",
  "การพัฒนาสิ่งแวดล้อมยั่งยืน",
  "การลดความเหลื่อมล้ำด้วยการบริหารเมือง",
  "การเชื่อมโยงเมืองที่มีความคล่องตัว",
  "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
  "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ",
  "การสร้างความเป็นมืออาชีพในการบริหาร",
  "ไม่พบข้อมูล",
];

export const orderByStrategy = (data: any, spec: string, sorting: "desc" | "asc") => {
  return _.orderBy(data, [spec], [sorting]);
};
