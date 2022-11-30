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

export const getBudgetItems = (_: Filters): Promise<BudgetItemResult> => {
  return Promise.resolve({
    total: 819547810,
    items: [
      {
        budgetYear: 2566,
        outputProjectName: "ค่าใช้จ่ายในการมอบรางวัลคุณภาพการให้บริการของกรุงเทพมหานคร",
        amount: 571800,
        purposeProject:
          "การพัฒนาทรัพยากรบุคคลของกรุงเทพมหานครให้มีทักษะ ความรู้ความสามารถ มีความเป็นมืออาชีพที่เหมาะสมกับการบริหารมหานครและเป็นผู้มีคุณธรรมและจริยธรรม",
        substrategy: "การบริหารทรัพยากรบุคคล",
        strategy: "การสร้างความเป็นมืออาชีพในการบริหารจัดการมหานคร",
        nameOrganization: "สำนักงานคณะกรรมการข้าราชการกรุงเทพมหานคร",
      },
      {
        budgetYear: 2566,
        outputProjectName:
          "โครงการเสริมสร้างความรู้ เข้าใจและส่งเสริมการมีส่วนร่วมของประชาชน",
        amount: 22969500,
        purposeProject:
          "ประชาชนมีส่วนร่วมในการนำเสนอกิจกรรมเพื่อสนับสนุนการจัดบริการสาธารณะ",
        substrategy: "พลเมืองขับเคลื่อนมหานคร",
        strategy: "ส่งเสริมการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
        nameOrganization: "สำนักปลัดกรุงเทพมหานคร",
      },
      {
        budgetYear: 2566,
        outputProjectName:
          "ค่าใช้จ่ายในการส่งเสริมศักยภาพและเศรษฐกิจของเมืองในระดับนานาชาติ",
        amount: 1500000,
        purposeProject: "ยกระดับ/พัฒนาคุณภาพผลผลิตและบริการ",
        substrategy: "เมืองแห่งโอกาสทางเศรษฐกิจและการลงทุน",
        strategy: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจสร้างสรรค์และการเรียนรู้",
        nameOrganization: "สำนักปลัดกรุงเทพมหานคร",
      },
      {
        budgetYear: 2566,
        outputProjectName: "โครงการก่อสร้างอาคารอเนกประสงค์ โรงพยาบาลตากสิน",
        amount: 356316000,
        purposeProject: "ความครอบคลุมในการจัดให้มีระบบสุขภาพทุติยภูมิและตติยภูมิ",
        substrategy: "เมืองสุขภาพดี (Healthy City)",
        strategy: "การสร้างเมืองปลอดภัยและหยุ่นตัวต่อวิกฤตการณ์",
        nameOrganization: "สำนักการศึกษา",
      },
      {
        budgetYear: 2566,
        outputProjectName: "ค่าใช้จ่ายในการพัฒนาห้องเรียนดิจิทัลเพื่อการเรียนรู้",
        amount: 1537800,
        purposeProject: "การบริหารจัดการสถานศึกษา",
        substrategy: "การศึกษาสำหรับทุกคน",
        strategy: "การลดความเหลื่อมล้ำด้วยการบริหารเมืองรูปแบบอารยะสำหรับทุกคน",
        nameOrganization: "สำนักการศึกษา",
      },
      {
        budgetYear: 2566,
        outputProjectName:
          "ก่อสร้างถนนต่อเชื่อมศูนย์ราชการเฉลิมพระเกียรติ 80 พรรษา 5 ธันวาคม 2550 กับถนนประชาชื่น (ถนนหมายเลข 10)",
        amount: 224575500,
        purposeProject: "เพิ่มความคล่องตัวของระบบจราจร",
        substrategy:
          "กรุงเทพมหานครมีระบบขนส่งมวลชนทั่วถึง สะดวก ประหยัด การจราจรคล่องตัวและมีทางเลือก",
        strategy: "การเชื่อมโยงเมืองที่มีความคล่องตัวและระบบบริการสาธารณะแบบบูรณาการ",
        nameOrganization: "สำนักการโยธา",
      },
      {
        budgetYear: 2566,
        outputProjectName:
          "ก่อสร้างระบบรวบรวมน้ำเสียและระบบบำบัดน้ำเสียมีนบุรี ระยะที่ 1",
        amount: 212077210,
        purposeProject:
          "กรุงเทพมหานครส่งเสริมให้มีการกำกับดูแล ฟื้นฟู และพัฒนาแหล่งน้ำให้มีคุณภาพดีตามมาตรฐานคุณภาพสิ่งแวดล้อม",
        substrategy: "คุณภาพสิ่งแวดล้อมยั่งยืน",
        strategy: "การพัฒนาสิ่งแวดล้อมยั่งยืนและการเปลี่ยนแปลงสภาพภูมิอากาศ",
        nameOrganization: "สำนักการระบายน้ำ",
      },
    ],
  });
};
