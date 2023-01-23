import { ChartData, OrganizationChartData } from "~/models/chart-data";

export const getChartData = (): Promise<ChartData> => {
  return Promise.resolve({
    amount: 150000000,
    years: [
      {
        year: 2566,
        amount: 150000000,
        strategies: [
          {
            name: "การสร้างเมืองปลอดภัยและหยุ่นตัวต่อวิกฤตการณ์",
            amount: 150000000,
            substrategies: [
              {
                name: "ปลอดอาชญากรรมและยาเสพติด",
                amount: 10000000,
              },
              {
                name: "ปลอดอุบัติเหตุ",
                amount: 20000000,
              },
              {
                name: "ปลอดภัยพิบัติ",
                amount: 30000000,
              },
              {
                name: "ปลอดอุบัติภัยจากสิ่งก่อสร้าง",
                amount: 40000000,
              },
              {
                name: "เมืองสุขภาพดี (Healthy City)",
                amount: 50000000,
              },
            ],
          },
          {
            name: "การพัฒนาสิ่งแวดล้อมยั่งยืนและการเปลี่ยนแปลงสภาพภูมิอากาศ",
            amount: 0,
            substrategies: [],
          },
          {
            name: "การลดความเหลื่อมล้ำด้วยการบริหารเมืองรูปแบบอารยะสำหรับทุกคน",
            amount: 0,
            substrategies: [],
          },
          {
            name: "การเชื่อมโยงเมืองที่มีความคล่องตัวและระบบบริการสาธารณะแบบบูรณาการ",
            amount: 0,
            substrategies: [],
          },
          {
            name: "ส่งเสริมการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
            amount: 0,
            substrategies: [],
          },
          {
            name: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจสร้างสรรค์และการเรียนรู้",
            amount: 0,
            substrategies: [],
          },
          {
            name: "การสร้างความเป็นมืออาชีพในการบริหารจัดการมหานคร",
            amount: 0,
            substrategies: [],
          },
        ],
      },
    ],
  });
};

export const getChartDataGroupByOrganizations = (
  _year: number,
): Promise<OrganizationChartData[]> => {
  return Promise.resolve([
    {
      nameOrganization: "สำนักการโยธา",
      amount: 15000000,
      strategies: [
        {
          name: "การสร้างเมืองปลอดภัยและหยุ่นตัวต่อวิกฤตการณ์",
          amount: 150000000,
          substrategies: [
            {
              name: "ปลอดอาชญากรรมและยาเสพติด",
              amount: 10000000,
            },
            {
              name: "ปลอดอุบัติเหตุ",
              amount: 20000000,
            },
            {
              name: "ปลอดภัยพิบัติ",
              amount: 30000000,
            },
            {
              name: "ปลอดอุบัติภัยจากสิ่งก่อสร้าง",
              amount: 40000000,
            },
            {
              name: "เมืองสุขภาพดี (Healthy City)",
              amount: 50000000,
            },
          ],
        },
        {
          name: "การพัฒนาสิ่งแวดล้อมยั่งยืนและการเปลี่ยนแปลงสภาพภูมิอากาศ",
          amount: 0,
          substrategies: [],
        },
        {
          name: "การลดความเหลื่อมล้ำด้วยการบริหารเมืองรูปแบบอารยะสำหรับทุกคน",
          amount: 0,
          substrategies: [],
        },
        {
          name: "การเชื่อมโยงเมืองที่มีความคล่องตัวและระบบบริการสาธารณะแบบบูรณาการ",
          amount: 0,
          substrategies: [],
        },
        {
          name: "ส่งเสริมการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
          amount: 0,
          substrategies: [],
        },
        {
          name: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจสร้างสรรค์และการเรียนรู้",
          amount: 0,
          substrategies: [],
        },
        {
          name: "การสร้างความเป็นมืออาชีพในการบริหารจัดการมหานคร",
          amount: 0,
          substrategies: [],
        },
      ],
    },
  ]);
};
