import { StrategyTypes } from "~/models/strategies";

export interface Strategy {
  sub_strategy: string;
  sample?: string;
  select_ploblem?: string;
  side_details: string;
  sub_srategy_def: string[];
}

export interface Plan {
  side: string;
  strategy: string;
  strategy_en: StrategyTypes;
  issue: string;
  img: string;
  icon: string;
  strategies: Strategy[];
  topic_img: number;
}

export const planData: Plan[] = [
  {
    side: "การสร้างเมืองปลอดภัยและหยุ่นตัวต่อวิกฤตการณ์",
    strategy: "การสร้างเมืองปลอดภัย",
    strategy_en: "safe",
    issue: "น้ำท่วม ไฟไหม้บ่อยๆ",
    img: "issue_1",
    topic_img: 0,
    icon: "default_1",
    strategies: [
      {
        sub_strategy: "ปลอดอาชญากรรมและยาเสพติด",
        side_details: `
          มุ่งเน้น 3 ลด 3 เพิ่ม คือ 1.ลดการเกิดคดีอุกฉกรรจ์และอาชญากรรมพื้นฐาน 
          2.ลดความล่อแหลมของสภาพแวดล้อมต่อการก่ออาชญากรรมในพื้นที่กรุงเทพมหานคร
          3. ลดระดับความรุนแรงของปัญหาและจำนวนผู้เสพยาเสพติด และแนวทาง 3 เพิ่ม 
          1.เพิ่มความปลอดภัยในพื้นที่สาธารณะ 
          2.ความปลอดภัยสาธารณะของเมือง 
          3.เพิ่มระดับการมีส่วนร่วมของประชาชนในประเด็นความปลอดภัยสาธารณะของเมือง ให้ความสำคัญกับการเชื่อมต่อข้อมูลด้านความปลอดภัยต่างๆ`,
        sub_srategy_def: [
          "ลดการเกิดคดีอุกฉกรรจ์และอาชญากรรมพื้นฐาน",
          "ลดความล่อแหลมของสภาพแวดล้อมต่อการก่ออาชญากรรมในพื้นที่กรุงเทพมหานคร",
          "ลดระดับความรุนแรงของปัญหาและจำนวนผู้เสพยาเสพติด",
          "เพิ่มความปลอดภัยในพื้นที่สาธารณะ",
          "เพิ่มระดับการมีส่วนร่วมของประชาชนในประเด็นความปลอดภัยสาธารณะของเมือง",
          "เชื่อมต่อข้อมูลด้านความปลอดภัยต่างๆ",
        ],
      },
      {
        sub_strategy: "ปลอดอุบัติเหตุ",
        side_details: `
          ลดอุบัติเหตุและสร้างความปลอดภัยทางถนน ลดจำนวนผู้บาดเจ็บและผู้เสียชีวิตจากอุบัติเหตุ รวมถึงเพิ่มความปลอดภัยในการใช้บริการขนส่งมวลชนของเมือง 
          โดยตรวจสอบสภาพถนนจุดเสี่ยงอันตราย (Black Spot) และปรับปรุงจุดเสี่ยงอันตรายต่างๆภายหลังการเกิดอุบัติเหตุ พร้อมใช้เทคโนโลยีมาสร้างความปลอดภัย`,
        sub_srategy_def: [
          "ลดอุบัติเหตุและสร้างความปลอดภัยทางถนน",
          "ลดจำนวนผู้บาดเจ็บและผู้เสียชีวิตจากอุบัติเหตุ",
          "เพิ่มความปลอดภัยในการใช้บริการขนส่งมวลชนของเมือง",
          "ตรวจสอบสภาพถนนจุดเสี่ยงอันตราย (Black Spot) ",
          "ปรับปรุงจุดเสี่ยงอันตราย ภายหลังการเกิดอุบัติเหตุ",
          "ใช้เทคโนโลยีมาสร้างความปลอดภัย",
        ],
      },
      {
        sub_strategy: "ปลอดภัยพิบัติ",
        sample: "น้ำท่วม ไฟไหม้บ่อยๆ",
        select_ploblem: "0",
        side_details: `
          ยังคงมุ่งเน้นการจัดการกับภัยเดิมที่กรุงเทพมหานครเผชิญบ่อย คือ อุทกภัย และเพลิงไหม้ แต่มุ่งเน้นการบริหารจัดการเฉพาะภารกิจหลักของหน่วยงาน
          เปลี่ยนการทำงานแบบแยกส่วนตามประเภทภัย เป็นสร้างกลไกประสานงานระหว่างสำนักกลางและเขต`,
        sub_srategy_def: [
          "มุ่งเน้นการจัดการกับภัยเดิมที่กรุงเทพมหานครเผชิญบ่อย เช่น อุทกภัย เพลิงไหม้",
          "เปลี่ยนการทำงานแบบแยกส่วนตามประเภทภัย เป็นสร้างกลไกประสานงานระหว่างสำนักกลางและเขต",
        ],
      },
      {
        sub_strategy: "ปลอดอุบัติภัยจากสิ่งก่อสร้าง",
        side_details: `
          ดำเนินการตรวจสอบและจัดการกับความเสี่ยงและล่อแหลมของโครงสร้างต่างๆ และจัดทำชุดข้อมูลอาคารและโครงสร้างพื้นฐานสาธารณะ 
          รวมถึงการจัดทำแผนที่แสดงตำแหน่งอาคารและนำมาใช้บริหารจัดการเมือง`,
        sub_srategy_def: [
          "ดำเนินการตรวจสอบและจัดการกับความเสี่ยงและล่อแหลมของโครงสร้าง",
          "จัดทำชุดข้อมูลอาคารและโครงสร้างพื้นฐานสาธารณะ",
          "จัดทำแผนที่แสดงตำแหน่งอาคารและนำมาใช้บริหารจัดการเมือง",
        ],
      },
      {
        sub_strategy: "เมืองสุขภาพดี",
        side_details: `
          ให้มีระบบสุขภาพและสร้างโอกาสในการเข้าถึงบริการด้านการแพทย์และสาธารณสุข รวมทั้งบริการด้านสุขภาพของคนเมือง 
          ให้มีมาตรการป้องกันด้วยตัวเอง จากการออกกำลังกาย การรักษาสุขภาพ`,
        sub_srategy_def: [
          "ให้มีระบบสุขภาพและสร้างโอกาสในการเข้าถึงบริการด้านการแพทย์และสาธารณสุข",
          "ให้มีมาตรการป้องกันด้วยตัวเอง จากการออกกำลังกาย การรักษาสุขภาพ",
        ],
      },
    ],
  },
  {
    side: "การพัฒนาสิ่งแวดล้อมยั่งยืนและการเปลี่ยนแปลงสภาพภูมิอากาศ",
    strategy: "การพัฒนาสิ่งแวดล้อมยั่งยืน",
    strategy_en: "environment",
    issue: "พื้นที่สีเขียวและสวนสาธารณะน้อย ไม่ปลอดภัย",
    img: "issue_2",
    topic_img: 1,
    icon: "default_2",
    strategies: [
      {
        sub_strategy: "คุณภาพสิ่งแวดล้อมยั่งยืน",
        side_details:
          "กำกับดูแลและควบคุมการพัฒนาพื้นที่สีเขียวอย่างมีคุณภาพและการลดการปล่อยก๊าซเรือนกระจกของเมือง",
        sub_srategy_def: [
          "กำกับดูแลและควบคุมคุณภาพอากาศ คุณภาพน้ำ เสียง และขยะ",
          "ลดการปล่อยก๊าซเรือนกระจกของเมือง",
        ],
      },
      {
        sub_strategy:
          "พื้นที่สีเขียวเพื่อสุขภาวะที่ดีและมีความยั่งยืนด้านสิ่งแวดล้อมตามมาตรฐานสากล",
        sample: "จำนวนพื้นที่สีเขียวและสวนสาธารณะ",
        select_ploblem: "1",
        side_details: `
          1. การพัฒนาพื้นที่สีเขียวใหม่ภายใต้ความร่วมมือกับภาคส่วนอื่นๆ
          2. การปรับปรุงพื้นที่สีเขียวที่มีอยู่เดิมให้สามารถรองรับ ในการบริการระบบนิเวศและเป็นแหล่งดูดซับคาร์บอนของเมือง ใช้ประโยชน์นันทนาการ พักผ่อนหย่อนใจ
          3. การปรับปรุงพัฒนาโครงสร้างสีเขียวของเมือง เช่น พื้นที่สีเขียวบริเวณถนนสายหลัก`,
        sub_srategy_def: [
          "การพัฒนาพื้นที่สีเขียวใหม่ภายใต้ความร่วมมือกับภาคส่วนอื่นๆ",
          "การปรับปรุงพื้นที่สีเขียวที่มีอยู่เดิมให้สามารถรองรับ ในการบริการระบบนิเวศและเป็นแหล่งดูดซับคาร์บอนของเมือง ใช้ประโยชน์นันทนาการ พักผ่อนหย่อนใจ",
          "การปรับปรุงพัฒนาโครงสร้างสีเขียวของเมือง เช่น พื้นที่สีเขียวบริเวณถนนสายหลัก",
        ],
      },
      {
        sub_strategy: "สังคมคาร์บอนต่ำและการรับมือต่อการเปลี่ยนแปลงสภาพ",
        side_details:
          "ส่งเสริม สนับสนุน การพัฒนากลไกเชิงสถาบันด้านการเปลี่ยนแปลงสภาพภูมิอากาศของเมืองให้มีขีดความสามารถและความพร้อมในการขับเคลื่อน",
        sub_srategy_def: [
          `"การพัฒนากลไกเชิงสถาบัน" ด้านการเปลี่ยนแปลงสภาพภูมิอากาศของเมืองให้มีขีดความสามารถและความพร้อมในการขับเคลื่อน`,
        ],
      },
      {
        sub_strategy:
          "เมืองที่ใช้พลังงานอย่างมีประสิทธิภาพสูงและเป็นมิตรต่อสิ่งแวดล้อม",
        side_details:
          "เพิ่มประสิทธิภาพเป็นมิตรต่อสิ่งแวดล้อม มุ่งเน้นเพิ่มประสิทธิภาพการใช้พลังงานของเมืองและพลังงานทางเลือก",
        sub_srategy_def: [
          "การจัดทำมาตรการจูงใจในการลดใช้พลังงานในภาคส่วนต่าง ๆ",
          "การใช้พลังงานจากแหล่งที่มีความยั่งยืน",
          "เกิดการเปลี่ยนแปลงระบบขนส่งมวลชนที่ใช้พลังงานสะอาด",
        ],
      },
    ],
  },
  {
    side: "การลดความเหลื่อมล้ำด้วยการบริหารเมืองรูปแบบอารยะสำหรับทุกคน",
    strategy: "การลดความเหลื่อมล้ำด้วยการบริหารเมือง",
    strategy_en: "equality",
    issue: "การทุจริต คอร์รัปชั่น",
    img: "issue_3",
    topic_img: 3,
    icon: "default_3",
    strategies: [
      {
        sub_strategy: "ผู้สูงอายุ คนพิการ และผู้ด้อยโอกาสได้รับการดูแลอย่างครบวงจร",
        sample: "สาธารณูปโภคพื้นฐานให้ผู้พิการ",
        select_ploblem: "2",
        side_details:
          "เก็บข้อมูลให้สูงสุด การพัฒนาอาชีพและสวัสดิการ ออกแบบสูตรอบรมแรงงาน และความเปลี่ยนแปลงทางสังคม ต้องการตามตลาดแรงงาน",
        sub_srategy_def: [
          "เก็บข้อมูลและระบบของการจัดเก็บข้อมูล ในรูปแบบที่ระบบสามารถนำไปวิเคราะห์ประมวลผลต่อได้ (Machine Readable)",
          "การพัฒนาอาชีพและสวัสดิการ ออกแบบสูตรอบรมแรงงาน",
        ],
      },
      {
        sub_strategy: "เมืองแห่งโอกาสทางสังคม",
        side_details: `เป็นยุทธศาสตร์ที่มีการเปลี่ยนชื่อจากเดิมคือ เมืองแห่งโอกาสทางเศรษฐกิจ สาเหตุนั้นมาจากแนวคิดที่ว่า ภายใต้ยุทธศาสตร์นี้ จะให้ความสำคัญกับ
          การพัฒนาโอกาส พัฒนาคุณภาพชีวิตที่เป็นปัจเจกมากกว่าแนวทางเดิมที่เน้นไปที่กิจกรรมทางเศรษฐกิจแนวทางการพัฒนาใน 2 แนวทางหลัก ได้แก่
          1) การพัฒนาระบบฐานข้อมูล เพื่อให้กรุงเทพมหานครรู้กลุ่มเป้าหมายที่แท้จริง กระบวนการได้มา ซึ่งก็คือการประสานกับหน่วยงานที่เกี่ยวข้อง เพื่อความรวดเร็ว และลดความซ้ำซ้อนในการทำงาน
          2) การพัฒนาอาชีพและสวัสดิการ จะให้ความสำคัญกับการออกแบบหลักสูตรฝึกอบรมแรงงาน และผู้ที่สนใจให้ตรงกับความต้องการของตลาดแรงงาน และความเปลี่ยนแปลงของสังคมจะต้องพึ่งพาระบบข้อมูล`,
        sub_srategy_def: [
          "การพัฒนาระบบฐานข้อมูล เพื่อให้กรุงเทพมหานครรู้กลุ่มเป้าหมายที่แท้จริง",
          "การพัฒนาอาชีพและสวัสดิการ ให้ตรงกับความต้องการของตลาดแรงงาน",
        ],
      },
      {
        sub_strategy: "การศึกษาสำหรับทุกคน",
        side_details: `
          (1) เด็กที่อาศัยอยู่ในกรุงเทพมหานครทุกคนจะต้องได้รับการศึกษาต้องการให้เกิดความเสมอภาคทางการศึกษาในระบบการศึกษาภาคบังคับแก่เด็กทุกคน และนักเรียนใน
          สังกัดกรุงเทพมหานครมีทักษะความรู้และความสามารถเพิ่มขึ้น โดยให้ความสำคัญกับการพัฒนาทักษะองค์ความรู้ที่มากกว่าผลสัมฤทธิ์ทางการเรียนในชั้นเรียน (2) 
          โรงเรียนสังกัดกรุงเทพมหานครสามารถให้บริการการศึกษาสำหรับผู้เรียนในกลุ่มที่มีความต้องการพิเศษ เป็นการที่จะให้การศึกษาแก่กลุ่มที่มีความต้องการพิเศษนั้น 
          และโรงเรียนในสังกัดกรุงเทพมหานครมีผลสัมฤทธิ์ทางการเรียนอย่างมีคุณภาพจะเป็นการกำหนดเป้าประสงค์ที่มุ่งเน้นผลกระทบที่สำคัญ คือ นักเรียนมีคุณภาพทางการศึกษา(3) 
          ข้าราชการครูและบุคลากรทางการศึกษาของกรุงเทพมหานครเป็นไปตามสมรรถนะประจำสายงานเป็นการออกแบบกระบวนการติดตามประเมินผลครูที่เหมาะสม 
          และไม่สร้างภาระทางการสอน หรือทางการบริหารมากเกินจะเบียดบังภารกิจหลักของครูและ (4) 
          การบริหารจัดการสถานศึกษาจะเป็นการพัฒนาสถานศึกษาให้เหมาะสมต่อการสร้างองค์ความรู้ในโลกสมัยใหม่ ที่ต้องผนวกรวมเทคโนโลยีทางการศึกษาต่าง ๆ 
          เข้ามาเพื่อให้ผู้เรียนสามารถเข้าถึงองค์ความรู้ได้อย่างมีประสิทธิภาพรวมถึงการศึกษาและพัฒนาเนื้อหาการเรียนรู้ตามอัธยาศัยที่สอดคล้องกับความต้องการของประชาชนแต่ละช่วงวัยและกลุ่มเป้าหมายในพื้นที่กรุงเทพมหานคร 
          จะเป็นการขยายของเขตของการให้บริการทางการศึกษาออกไปนอกบริบทของการศึกษาภาคบังคับ`,
        sub_srategy_def: [
          "เด็กที่อาศัยอยู่ในกรุงเทพมหานครทุกคนจะต้องได้รับการศึกษาตามความต้องการ",
          "โรงเรียนสังกัดกรุงเทพมหานครสามารถให้บริการการศึกษาสำหรับผู้เรียนในกลุ่มที่มีความต้องการพิเศษ",
          "ออกแบบกระบวนการติดตามประเมินผลครูที่เหมาะสม และไม่สร้างภาระทางการสอน",
        ],
      },
      {
        sub_strategy: "สังคมพหุวัฒนธรรม",
        side_details: `
          การเป็นเมืองที่ก้าวข้ามวัฒนธรรมตามรูปแบบเดิม ๆ ให้ความสำคัญกับความเป็นพหุวัฒนธรรม โดยการเพิ่มกิจกรรมด้านวัฒนธรรม ชุดความรู้ 
          และสร้างแพลตฟอร์มในการเก็บข้อมูลทางวัฒนธรรม พร้อมทั้งการปรับปรุงพิพิธภัณฑ์ท้องถิ่นของกรุงเทพมหานครที่มีอยู่ให้กลายเป็นแหล่งเรียนรู้ของสังคม 
          พหุวัฒนธรรม และความหลากหลายทางสังคม ซึ่งต้องให้ความสำคัญแก่กลุ่มวัฒนธรรมต่าง ๆ อย่างเสมอภาคเท่าเทียม ร
          วมทั้งเปิดโอกาสให้สมาชิกของแต่ละกลุ่มวัฒนธรรมมีพื้นที่ในการแสดงตัว สืบทอดและเกิดการยอมรับความแตกต่างทางวัฒนธรรม และการดำเนินชีวิต`,
        sub_srategy_def: [
          "เพิ่มกิจกรรมด้านวัฒนธรรม ชุดความรู้",
          "สร้างแพลตฟอร์มในการเก็บข้อมูลทางวัฒนธรรม",
          "ปรับปรุงพิพิธภัณฑ์ท้องถิ่นของกรุงเทพมหานคร",
          "เปิดโอกาสให้สมาชิกของแต่ละกลุ่มวัฒนธรรมมีพื้นที่ในการแสดงตัว สืบทอด",
        ],
      },
    ],
  },
  {
    side: "การเชื่อมโยงเมืองที่มีความคล่องตัวและระบบบริการสาธารณะแบบบูรณาการ",
    strategy: "การเชื่อมโยงเมืองที่มีความคล่องตัว",
    strategy_en: "connectivity",
    issue: "สาธารณูปโภคพื้นฐานไม่รองรับกับผู้พิการ",
    img: "issue_4",
    topic_img: 6,
    icon: "default_4",
    strategies: [
      {
        sub_strategy:
          "เมืองกรุงเทพมหานครเติบโตอย่างมีระเบียบ มีการใช้ประโยชน์ที่ดินและทรัพยากรอย่างมีประสิทธิภาพ",
        side_details: `
          เมืองกรุงเทพมหานครเติบโตอย่างมีระเบียบ มีการใช้ประโยชน์ที่ดิน และทรัพยากรอย่างมีประสิทธิภาพ 
          เน้นให้เกิดการพัฒนาเมืองอย่างเป็นระเบียบมีการกำหนดมาตรการ และแนวทางปฏิบัติผ่านตัวชี้วัดเพื่อให้การดำเนินงานในส่วนงานที่เกี่ยวข้อง 
          ตลอดจนสามารถผลักดันการใช้พื้นที่ดินและทรัพยากรของกรุงเทพมหานครทั้งในบริเวณพื้นที่ชั้นใน ชั้นกลาง 
          และชั้นนอกได้อย่างมีประสิทธิภาพและคุ้มค่ามากที่สุด สร้างข้อมูลฐาน (Baseline) เพื่อใช้ในการกำหนดค่าเป้าหมายของการดำเนินงานในระยะถัดไป`,
        sub_srategy_def: [
          "มีการใช้ประโยชน์ที่ดิน และทรัพยากรอย่างมีประสิทธิภาพ ทั้งในบริเวณพื้นที่ชั้นใน ชั้นกลาง และชั้นนอก",
          "สร้างข้อมูลฐาน (Baseline) เพื่อใช้ในการกำหนดค่าเป้าหมายของการดำเนินงานในระยะถัดไป",
        ],
      },
      {
        sub_strategy:
          "กรุงเทพมหานครมีศูนย์ชุมชนย่อย (Sub Center) เป็นระบบตามลำดับความสำคัญ และศักยภาพพื้นที่เป็นโครงข่ายเชื่อมโยงกันอย่างมีระบบ",
        sample: "เมืองแออัด ไม่เป็นระเบียบ",
        select_ploblem: "3",
        side_details: `
          เป็นยุทธศาสตร์ที่มุ่งเน้นให้เกิดกลไกการพัฒนาพื้นที่ชุมชนย่อยในเขตพื้นที่กรุงเทพมหานครชั้นนอก 
          โดยการสร้างระบบการขนส่งที่สามารถเชื่อมโยงศูนย์ชุมชนย่อยกับเขตพื้นที่ชั้นกลางและชั้นในได้โดยสะดวก 
          โดยตัวชี้วัดในแต่ละกลยุทธ์ของยุทธศาสตร์ย่อยนี้จะเน้นผลิตผลในเชิงปริมาณเป็นสำคัญ 
          โดยการดำเนินงานในยุทธศาสตร์นี้จะมีการบูรณาการจากหลายส่วนงานเพื่อให้สามารถขับเคลื่อนการทำงานได้อย่างมีประสิทธิภาพ`,
        sub_srategy_def: [
          "พัฒนาพื้นที่ชุมชนย่อยในเขตพื้นที่กรุงเทพมหานครชั้นนอก",
          "สร้างระบบการขนส่งที่สามารถเชื่อมโยงศูนย์ชุมชนย่อยกับเขตพื้นที่ชั้นกลางและชั้นในได้โดยสะดวก",
          "เน้นผลิตผลในเชิงปริมาณเป็นสำคัญ",
          "มีการบูรณาการจากหลายส่วนงาน",
        ],
      },
      {
        sub_strategy:
          "กรุงเทพมหานครเป็นเมืองที่มีรูปแบบการจัดการภูมิทัศน์เมืองอย่างยั่งยืน",
        side_details: `
          กรุงเทพมหานครเป็นเมืองที่มีรูปแบบการจัดการภูมิทัศน์เมืองอย่างยั่งยืน โดยมีกรอบแนวคิดของการทบทวนยุทธศาตร์จากการสร้างจินตภาพของเมือง (
            Image of the City) ซึ่งเป็นการสร้างจินตภาพขึ้นในใจระหว่างผู้คนและสิ่งแวดล้อมที่เกี่ยวข้องกับเมืองตามองค์ประกอบพื้นฐาน 5 ประการ 1. 
            เส้นทาง สัญจร 2.เส้นขอบเขต 3. ย่าน 4.ชุมทาง 5. ภูมิสัญลักษณ์  ในการพัฒนาพื้นที่กรุงเทพมหานครให้มีความสวยงามตามเอกลักษณ์เฉพาะของเมือง`,
        sub_srategy_def: [
          "การสร้างจินตภาพขึ้นในใจระหว่างผู้คนและสิ่งแวดล้อมตามองค์ประกอบพื้นฐาน 5 ประการ 1. เส้นทาง สัญจร 2.เส้นขอบเขต 3. ย่าน 4.ชุมทาง 5. ภูมิสัญลักษณ์",
        ],
      },
      {
        sub_strategy:
          "กรุงเทพมหานครมีระบบขนส่งมวลชนทั่วถึง สะดวก ประหยัด การจราจรคล่องตัวและมีทางเลือก",
        side_details: `
          กรุงเทพมหานครมีระบบขนส่งมวลชนทั่วถึง สะดวก ประหยัด การจราจรคล่องตัวและมีทางเลือก 
          เป็นการกำหนดแนวทางการดำเนินงานเพื่อพัฒนาให้กรุงเทพมหานครมีระบบขนส่งมวลชนที่มีโครงข่ายที่เชื่อมต่ออย่างทั่วถึงทั้งทางรถ 
          ทางราง และทางน้ำ มีการพัฒนาปรับปรุงระบบการจราจรที่มีความคล่องตัวโดยอาศัยเทคโนโลยีและความร่วมมือจากส่วนงานที่เกี่ยวข้อง 
          เช่นการพัฒนาระบบ Application เดียว สำหรับบริการแก่ประชาชนที่จะเข้ามาใช้ระบบขนส่งทุกประเภทในกรุงเทพมหานคร 
          รวมทั้งการสร้างมาตรการการใช้ทางอย่างปลอดภัยแก่ประชาชนผ่านการจัดลำดับความสำคัญของถนนอันจะนำไปสู่การสร้างมาตรการการบังคับใช้ที่มีประสิทธิภาพ`,
        sub_srategy_def: [
          "มีระบบขนส่งมวลชนทั่วถึง สะดวก ประหยัด การจราจรคล่องตัวและมีทางเลือก",
          "มีโครงข่ายเชื่อมต่ออย่างทั่วถึงทั้งทางรถ ราง และทางน้ำ",
          "ปรับปรุงระบบการจราจรอาศัยเทคโนโลยีและความร่วมมือจากส่วนงานที่เกี่ยวข้อง ",
          "สร้างมาตรการการใช้ทางอย่างปลอดภัยแก่ประชาชน",
        ],
      },
    ],
  },
  {
    side: "ส่งเสริมการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
    strategy: "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม",
    strategy_en: "democracy",
    issue: "การบริการออนไลน์ประชาชนที่เข้ามาติดต่อยุ่งยาก",
    img: "issue_5",
    topic_img: 2,
    icon: "default_5",
    strategies: [
      {
        sub_strategy: "มหานครกรุงเทพแบบบูรณาการ",
        side_details: `
          มีจุดมุ่งหมายการเป็นมหานครที่มีการบูรณาการความร่วมมือหน่วยงานให้บริการสาธารณะในพื้นที่ 
          คำนึงถึงประเด็นเครือข่ายความร่วมมือในการจัดบริการสาธารณะ ในการพัฒนาเครือข่ายความร่วมมือในการให้บริการสาธารณะและการพัฒนาความก้าวหน้าในแต่ละประเด็นร้องเรียนได้อย่างทันท่วงที`,
        sub_srategy_def: [
          "มีการบูรณาการความร่วมมือหน่วยงานให้บริการสาธารณะในพื้นที่",
          "พัฒนาความก้าวหน้าในแต่ละประเด็นร้องเรียนได้อย่างทันท่วงที",
        ],
      },
      {
        sub_strategy: "พลเมืองขับเคลื่อนมหานคร",
        side_details: `
          มีจุดมุ่งหมายการการสร้างการมีส่วนร่วมของภาคประชาชนเปิดพื้นที่ให้พลเมืองฯ เข้ามามีส่วนร่วมในการเสนอนโยบายร่วมดำเนินการ 
          และตรวจสอบการทำงานของกรุงเทพมหานคร พลเมืองกรุงเทพฯ คำนึงถึง (1)
          ประชาชนสามารถเข้ามามีส่วนร่วมในกิจการของกรุงเทพมหานคร ตั้งแต่ขั้นตอนการวางแผนนโยบายและการดำเนินงาน 
          ทั้งผ่านกลไกที่เป็นทางการและไม่เป็นทางการ โดยนโยบายมีเป้าหมายเพื่อประชาชนอย่างแท้จริง (2) 
          มุ่งสร้างระบบงบประมาณแบบมีส่วนร่วมที่ประชาชนสามารถมีส่วนร่วมในการวางแผน การตัดสินใจใช้งบประมาณ 
          กำหนดให้สำนักงานเขตจัดทำแผนพัฒนาเขตที่มาจากการมีส่วนร่วมของหน่วยนโยบาย ชุมชน และภาคประชาชน 
          และให้กรุงเทพมหานครนำแผนส่วนนี้เข้ามาพิจารณาเพื่อจัดสรรงบประมาณให้กับสำนักงานเขต (3) 
          ประชาชนมีส่วนร่วมในการนำเสนอกิจกรรมเพื่อสนับสนุนการจัดบริการสาธารณะ และ (4) 
          ประชาชนหรือผู้มีส่วนได้เสียมีช่องทางในการเข้ามาร่วมบริหารงานกับกรุงเทพมหานคร`,
        sub_srategy_def: [
          "ประชาชนเข้ามามีส่วนร่วมในกิจการของกรุงเทพมหานคร ตั้งแต่ขั้นตอนการวางแผนนโยบายและการดำเนินงาน",
          "มุ่งสร้างระบบงบประมาณแบบมีส่วนร่วมที่ประชาชนสามารถมีส่วนร่วมในการวางแผน การตัดสินใจใช้งบประมาณ ",
          "กำหนดให้สำนักงานเขตจัดทำแผนพัฒนาเขตที่มาจากการมีส่วนร่วมของหน่วยนโยบาย ชุมชน และภาคประชาชน",
          "การนำเสนอกิจกรรมเพื่อสนับสนุนการจัดบริการสาธารณะ",
          "มีช่องทางในการเข้ามาร่วมบริหารงานกับกรุงเทพมหานคร",
        ],
      },
      {
        sub_strategy: "การกระจายอำนาจ",
        side_details: `
          มีจุดมุ่งหมายให้กรุงเทพมหานครมีอำนาจและหน้าที่ในการจัดระบบบริการสาธารณะเพื่อประโยชน์ของประชาชนในท้องถิ่นของตนเองได้คำนึงถึง (1) 
          กรุงเทพมหานครมีความพร้อมในการรับโอนภารกิจจากรัฐบาลในการให้บริการสาธารณะตามที่กฎหมายกำหนด 
          ทั้งการแก้ไขพระราชบัญญัติระเบียบบริหารราชการกรุงเทพมหานคร พ.ศ.2528 มาตรา 89 
          และกรุงเทพมหานครยืนยันความพร้อมในการรับถ่ายโอนภารกิจของหน่วยงานของรัฐต่อคณะกรรมการกระจายอำนาจให้แก่องค์กรปกครองส่วนท้องถิ่นตามกฎหมายกระจายอำนาจ 
          ตลอดจนมีภารกิจถ่ายโอนจากสำนัก ไปยังสำนักงานเขต (2) กระจายภารกิจการจัดบริการสาธารณะที่เกี่ยวข้องกับประชาชนในพื้นที่โดยตรง 
          จากสำนักไปยังสำนักงานเขต และหน่วยบริการในพื้นที่ และ (3) 
          ประชาชนมีส่วนร่วมในการจัดทำบริการหรือกิจกรรมสาธารณะที่มีประสิทธิภาพและเกิดประโยชน์แก่ประชาชนในพื้นที่ของกรุงเทพมหานคร 
          โดยเน้นการให้ประชาชนเข้ามามีส่วนร่วมในการจัดทำบริการหรือทำกิจกรรมสาธารณะต่าง ๆ เช่น ห้องสมุด พิพิธภัณฑ์ ลานกิจกรรมชุมชน 
          โรงเรียนประชาธิปไตย ฯลฯ`,
        sub_srategy_def: [
          "มีความพร้อมในการรับโอนภารกิจจากรัฐบาลเพื่อให้บริการสาธารณะตามที่กฎหมายกำหนด",
          "มีกระจายภารกิจการจัดบริการสาธารณะที่เกี่ยวข้องกับประชาชนในพื้นที่โดยตรง จากสำนักไปยังสำนักงานเขต ",
          "ประชาชนมีส่วนร่วมในการจัดทำบริการหรือกิจกรรมสาธารณะ",
          "ประชาชนเข้ามามีส่วนร่วมทำกิจกรรมสาธารณะต่าง ๆ",
        ],
      },
      {
        sub_strategy: "เมืองสีขาว",
        sample: "การทุจริต คอร์รัปชั่น",
        select_ploblem: "4",
        side_details: `
          มีจุดมุ่งหมายให้กรุงเทพมหานครมีการเปิดเผยข้อมูลและรายงานผลการดำเนินงานให้ประชาชนทราบ รวมตลอดทั้งมีกลไกให้ประชาชนมีส่วนร่วม 
          และตรวจสอบการทำงานได้ คำนึงถึง (1) กรุงเทพมหานคร มีกลไกการร้องเรียน ตรวจสอบ และแก้ไขเรื่อง การทุจริตทีเข้าถึงง่าย 
          สะดวก รวดเร็วมีประสิทธิภาพ และไม่ซ้ำซ้อน โดยเน้นการบูรณาการช่องทางและระบบการร้องเรียนเกี่ยวกับพฤติกรรมคอร์รัปชั่น 
          ให้เชื่อมโยงเป็นระบบและมีประสิทธิภาพ รวมทั้งมีการแสดงผลการร้องเรียนเปิดเผยต่อสาธารณชน (2) 
          มีระบบการดำเนินการทางวินัยที่เกี่ยวข้องกับการทุจริตคอร์รัปชั่นที่มีประสิทธิภาพ รวมทั้งมีกลไกป้องกันการทุจริตคอร์รัปชั่นในอนาคต 
          โดยให้มีกระบวนการดำเนินการทางวินัยที่รวดเร็วโปร่งใสและมีประสิทธิภาพ และการสร้างกลไกป้องกันการทุจริตในอนาคต 
          ควบคู่ไปกับสร้างและพัฒนากลไกบริหารความเสี่ยงด้านทุจริต`,
        sub_srategy_def: [
          "มีกลไกการร้องเรียน ตรวจสอบ และแก้ไขเรื่อง การทุจริตทีเข้าถึงง่าย ",
          "บูรณาการช่องทางและระบบการร้องเรียนเกี่ยวกับพฤติกรรมคอร์รัปชั่น ให้เชื่อมโยงเป็นระบบ",
          "แสดงผลการร้องเรียนเปิดเผยต่อสาธารณชน",
          "มีระบบการดำเนินการทางวินัยเรื่องการทุจริตคอร์รัปชั่น",
          "สร้างและพัฒนากลไกบริหารความเสี่ยงด้านทุจริต",
        ],
      },
    ],
  },
  {
    side: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจสร้างสรรค์และการเรียนรู้",
    strategy: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ",
    strategy_en: "economic",
    issue: "แหล่งท่องเที่ยวเสื่อมโทรม",
    img: "issue_6",
    topic_img: 5,
    icon: "default_6",
    strategies: [
      {
        sub_strategy: "เมืองแห่งโอกาสทางธุรกิจและการลงทุน",
        side_details: `
          เป็นการควบรวมยุทธศาสตร์ย่อยเดิม ด้านการพัฒนาสู่การเป็นศูนย์กลางด้านการเกษตรอุตสาหกรรม 
          และบริการสีเขียวและด้านการพัฒนาสู่การเป็นศูนย์กลางการค้า การเงิน และการลงทุน โดยมีการนำระบบฐานข้อมูล 
          เป็นจุดกลางในการเชื่อมโยงข้อมูลทางด้านเศรษฐกิจและการลงทุนของกรุงเทพมหานครการใช้รูปแบบการฝึกอบรมออนไลน์เพื่อพัฒนาผู้ประกอบการและแรงงานฝีมือในพื้นที่กรุงเทพมหานครให้สอดคล้องกับสภาวะการเปลี่ยนแปลง 
          ตลอดจนการยกระดับคุณภาพสินค้าและบริการ ต่าง ๆ ของกรุงเทพมหานครให้เป็นผลิตภัณฑ์ที่เป็นเอกลักษณ์ และมีคุณภาพสูงมากยิ่งขึ้น`,
        sub_srategy_def: [
          "นำระบบฐานข้อมูล เป็นจุดกลางในการเชื่อมโยงข้อมูลทางด้านเศรษฐกิจ",
          "การลงทุนของกรุงเทพมหานครการใช้รูปแบบการฝึกอบรมออนไลน์เพื่อพัฒนาผู้ประกอบการและแรงงานฝีมือในพื้นที่กรุงเทพมหานคร",
          "การยกระดับคุณภาพสินค้าและบริการ ต่าง ๆ ของกรุงเทพมหานครให้เป็นผลิตภัณฑ์ที่เป็นเอกลักษณ์ และมีคุณภาพสูงมากยิ่งขึ้น",
        ],
      },
      {
        sub_strategy: "กรุงเทพมหานครเป็นเมืองที่น่าท่องเที่ยวระดับโลก",
        sample: "แหล่งท่องเที่ยวเสื่อมโทรม",
        select_ploblem: "5",
        side_details: `
          กรุงเทพมหานครเป็นเมืองที่น่าท่องเที่ยวระดับโลก เป็นการควบรวมยุทธศาสตร์ย่อยเดิม 
          ด้านการพัฒนาสู่การเป็นศูนย์กลางการท่องเที่ยวระดับโลก และด้านการพัฒนาสู่การเป็นศูนย์กลางธุรกิจตามฐานนวัตกรรม - 
          วัฒนธรรม โดยการปรับเพื่อให้สอดคล้องกับรูปแบบของการท่องเที่ยวที่เปลี่ยนแปลงไป และการนำเทคโนโลยีมาใช้ส่งเสริมความเชื่อมั่นด้านความปลอดภัย 
          และคุณภาพการให้บริการด้านการท่องเที่ยวของกรุงเทพมหานครการสร้างสิ่งอำนวยความสะดวกต่าง ๆ เพื่อรองรับกลุ่มนักท่องเที่ยวทุกกลุ่ม ทั้งกลุ่มผู้พิการและผู้สูงอายุ 
          ตลอดจนการประชาสัมพันธ์ด้านการท่องเที่ยวอย่างสร้างสรรค์ และการพัฒนาศักยภาพบุคลากรด้านการท่องเที่ยวของกรุงเทพมหานครให้มีประสิทธิภาพ`,
        sub_srategy_def: [
          "นำเทคโนโลยีมาใช้ส่งเสริมความเชื่อมั่นด้านความปลอดภัย และคุณภาพการให้บริการด้านการท่องเที่ยว",
          "สร้างสิ่งอำนวยความสะดวกต่าง ๆ เพื่อรองรับกลุ่มนักท่องเที่ยวทุกกลุ่ม ",
          "การประชาสัมพันธ์ด้านการท่องเที่ยวอย่างสร้างสรรค์",
          "การพัฒนาศักยภาพบุคลากรด้านการท่องเที่ยวของกรุงเทพมหานคร",
        ],
      },
      {
        sub_strategy: "เมืองแห่งการจัดประชุมนิทรรศการ",
        side_details: `
          มีการปรับปรุงเพิ่มเติมในด้านการมุ่งสร้างภาคีเครือข่าย และการบูรณาการร่วมกันกับหน่วยงานภาครัฐ 
          และภาคเอกชนในการพัฒนาให้กรุงเทพมหานครเป็นศูนย์กลางการจัดประชุมนิทรรศการ การแสดงสินค้า 
          และการท่องเที่ยวเพื่อสร้างแรงบันดาลใจหรือการให้รางวัลแก่พนักงาน (MICE) เพื่อเป็นการขยายผลการดำเนินงานให้เป็นรูปธรรมและมีประสิทธิภาพมากยิ่งขึ้น`,
        sub_srategy_def: [
          "การมุ่งสร้างภาคีเครือข่าย และการบูรณาการร่วมกันกับหน่วยงานภาครัฐ",
          "เป็นศูนย์กลางการจัดประชุมนิทรรศการ การแสดงสินค้า และการท่องเที่ยว",
          "มุ่งเน้นการนำเทคโนโลยี ระบบการจัดการฐานข้อมูล",
        ],
      },
    ],
  },
  {
    side: "การสร้างความเป็นมืออาชีพในการบริหารจัดการมหานคร",
    strategy: "การสร้างความเป็นมืออาชีพในการบริหาร",
    strategy_en: "management",
    issue: "เมืองแออัด ไม่เป็นระเบียบ",
    img: "issue_7",
    topic_img: 4,
    icon: "default_7",
    strategies: [
      {
        sub_strategy: "กฎหมาย",
        side_details: `
          กฎหมาย กล่าวคือ มุ่งหมายให้ทิศทางการพัฒนา ปรับปรุงและแก้ไขกฎหมายสอดรับกับภารกิจของกรุงเทพมหานคร 
          และสถานการณ์ต่างๆ อย่างคล่องตัวโดยคำนึงถึง (1) กรุงเทพมหานครมีกฎหมายระเบียบบริหารราชการกรุงเทพมหานครใหม่ 
          ซึ่งมีการทบทวนและแก้ไขกฎหมาย ข้อบัญญัติ ระเบียบ คำสั่ง และแนวทางปฏิบัติของกรุงเทพมหานคร ให้สอดรับกับภารกิจของหน่วยงานสังกัดกรุงเทพมหานคร
          ตลอดจนตราหรือประกาศใช้ข้อบัญญัติ ระเบียบคำสั่งที่เกี่ยวกับกระบวนการทางกฎหมาย และแนวทางปฏิบัติของกรุงเทพมหานครให้ทันต่อการเปลี่ยนแปลง 
          และ (2) การปรับปรุงโครงสร้างของหน่วยงานด้านกฎหมายให้สามารถทำหน้าที่ให้บริการทางกฎหมายแก่ผู้บริหารกรุงเทพมหานครและหน่วยงานกรุงเทพมหานครได้อย่างเต็มประสิทธิภาพ 
          ซึ่งมีการปรับปรุงการทำงานของหน่วยงานทางกฎหมาย พัฒนาคุณภาพงานบริการด้านกฎหมาย ตลอดจนพัฒนาศูนย์ข้อมูลกฎหมายกลางที่สนับสนุนหน่วยงานเจ้าหน้าที่`,
        sub_srategy_def: [
          "มีกฎหมายระเบียบบริหารราชการกรุงเทพมหานครใหม่  ให้สอดรับกับภารกิจของหน่วยงานสังกัดกรุงเทพมหานคร และให้ทันต่อการเปลี่ยนแปลง",
        ],
      },
      {
        sub_strategy: "การบริหารและประเมินผลแผน",
        side_details: `
          พัฒนาระบบการบริการและแผนการบริหารและประเมินผลแผน กล่าวคือ มุ่งหมายให้มีทิศทางในการพัฒนาระบบการบริหารแผนและการประเมินผล 
          และสร้างความร่วมมือการบริหารแผนพัฒนากรุงเทพมหานคร โดยคำนึงถึง (1) การสร้างความร่วมมือเพื่อขับเคลื่อนภารกิจเชิงยุทธศาสตร์การพัฒนากรุงเทพมหานคร 
          โดยเน้นที่การสร้างความร่วมมือในการบริหารแผนพัฒนากรุงเทพมหานครแผนแม่บทต่างๆ แผนเฉพาะด้าน 
          และการขับเคลื่อนแผนงานบูรณาการภารกิจเชิงยุทธศาสตร์การพัฒนากรุงเทพมหานคร และ (2) การพัฒนาระบบการบริหารแผนและการประเมินผลที่มีประสิทธิภาพ 
          โดยให้มีการพัฒนาระบบการบริหารจัดการแผนพัฒนากรุงเทพมหานคร และการผลักดันผลการประเมินเพื่อเพิ่มประสิทธิภาพในการปฏิบัติงาน`,
        sub_srategy_def: [
          "มุ่งหมายให้มีทิศทางในการพัฒนาระบบการบริหารแผนและการประเมินผล",
          "ให้มีการพัฒนาระบบการบริหารจัดการแผนพัฒนากรุงเทพมหานคร",
          "ผลักดันผลการประเมินเพื่อเพิ่มประสิทธิภาพในการปฏิบัติงาน",
        ],
      },
      {
        sub_strategy: "การบริหารทรัพยากรบุคคล",
        side_details: `
          มุ่งหมายให้มีการพัฒนาบุคลากรของกรุงเทพมหานครให้มีความเป็นมืออาชีพในการบริหาร กรุงเทพมหานคร โดยคำนึงถึง (1) การพัฒนาทรัพยากรบุคคลของกรุงเทพมหานครให้มีทักษะ 
          ความรู้ความสามารถ มีความเป็นมืออาชีพที่เหมาะสมกับการบริหารมหานครและเป็นผู้มีคุณธรรมและจริยธรรม ซึ่งมุ่งเน้นให้มีการพัฒนาสมรรถนะของทรัพยากรบุคคล 
          ให้มุ่งสู่ความเป็นมืออาชีพ การพัฒนาการให้บริการของกรุงเทพมหานครให้มีคุณภาพ และการส่งเสริมด้านคุณธรรมความโปร่งใสในการบริหารงานบุคคลตามหลักธรรมาภิบาลและส่งเสริมให้กรุงเทพมหานครมีภาพลักษณ์ที่ดีขึ้น 
          (2) การทบทวนและปรับปรุงกรอบอัตรากำลังและโครงสร้างหน่วยงานให้มีความเหมาะสมและรองรับการเปลี่ยนแปลง โดยให้มีการปรับโครงสร้างการแบ่งส่วนราชการภายในที่เหมาะสมกับภารกิจ 
          และการบริหารจัดการกำลังคนเพื่อรองรับการเปลี่ยนแปลง และควบคุมค่าใช้จ่ายด้านบุคคลของกรุงเทพมหานครให้อยู่ในสัดส่วนที่เหมาะสม (3) 
          การพัฒนาระบบบริหารทรัพยากรบุคคลให้มีประสิทธิภาพและประสิทธิผล มีความยืดหยุ่นคล่องตัว และสนับสนุนการบริหารราชการกรุงเทพมหานคร 
          ซึ่งมุ่งเน้นให้มีการพัฒนาระบบการสรรหาและเลือกสรรให้มีความคล่องตัวและทันต่อสถานการณ์ การพัฒนาระบบการบริหารผลงาน และปรับปรุงระบบงานบริหารทรัพยากรบุคคลของหน่วยงานให้มีประสิทธิภาพและประสิทธิผล 
          และ(4) การพัฒนาระบบสารสนเทศด้านทรัพยากรบุคคลของกรุงเทพมหานครให้มีประสิทธิภาพซึ่งมีการพัฒนาระบบสารสนเทศด้านทรัพยากรบุคคลของกรุงเทพมหานครให้สามารถใช้งานได้อย่างมีประสิทธิภาพ`,
        sub_srategy_def: [
          "พัฒนาบุคลากรของกรุงเทพมหานครให้มีความเป็นมืออาชีพในการบริหาร",
          "ให้มีทักษะ ความรู้ความสามารถ มีความเป็นมืออาชีพที่เหมาะสม",
          "ทบทวนและปรับปรุงกรอบอัตรากำลังและโครงสร้างหน่วยงานให้มีความเหมาะสม",
          "พัฒนาระบบบริหารทรัพยากรบุคคล",
          "พัฒนาระบบสารสนเทศด้านทรัพยากรบุคคล",
        ],
      },
      {
        sub_strategy: "การคลังและงบประมาณ",
        side_details: `
          มุ่งหมายที่จะส่งเสริมให้เกิดความสามารถในการบริหารงบประมาณอย่างมีประสิทธิภาพ โดยคำนึงถึง (1) กรุงเทพมหานครสามารถรักษาวินัยทางการเงินการคลังทั้งในระยะสั้นและระยะยาว 
          โดยมุ่งเน้นความสามารถในการรักษาวินัยทางการเงินการคลัง การปรับปรุงประสิทธิภาพการบริหารจัดเก็บภาษีท้องถิ่น การพัฒนารายได้ประเภทใหม่ ๆ 
          และการพัฒนารายได้จากทรัพย์สินและการลงทุน ตลอดจนพัฒนา ประสิทธิภาพของการเบิก จ่ายงบประมาณและการจัดซื้อจัดจ้าง (2) 
          มาตรฐานและแนวปฏิบัติด้านการเงินการบัญชีการงบประมาณ และการตรวจสอบควบคุมภายในถูกต้องโปร่งใสตรวจสอบได้ 
          ที่ครอบคลุมการปรับปรุงมาตรฐานและแนวปฏิบัติด้านการเงินการบัญชี การงบประมาณและการตรวจสอบควบคุมภายในให้ถูกต้องโปร่งใสตรวจสอบได้ การส่งเสริมความโปร่งใสและการตรวจสอบได้ด้านการเงินการคลังจากทุกภาคส่วน 
          (3) กรุงเทพมหานครสามารถขับเคลื่อนการพัฒนาเมืองด้วยการบริหารการเงินการคลังและการงบประมาณในเชิงรุก โดยส่งเสริมให้กรุงเทพมหานครมีแผนงบประมาณรายจ่าย 
          แผนการลงทุน และแผนซ่อมบำรุงอุปกรณ์/ครุภัณฑ์ที่เหมาะสม และ (4) กรุงเทพมหานครมีการออกแบบระบบเก็บค่าธรรมเนียมที่สะดวกสำหรับประชาชน 
          ทั้งระบบการจัดเก็บค่าธรรมเนียมที่สะดวกผ่านระบบออนไลน์ หรือ Mobile Banking`,
        sub_srategy_def: [
          "สามารถรักษาวินัยทางการเงินการคลังทั้งในระยะสั้นและระยะยาว",
          "การบัญชีการงบประมาณ และการตรวจสอบควบคุมภายในถูกต้องโปร่งใสตรวจสอบได้",
          "ส่งเสริมให้กรุงเทพมหานครมีแผนงบประมาณรายจ่าย แผนการลงทุน และแผนซ่อมบำรุงอุปกรณ์/ครุภัณฑ์ที่เหมาะสม",
          "มีการออกแบบระบบเก็บค่าธรรมเนียมที่สะดวกสำหรับประชาชน ผ่านระบบออนไลน์ หรือ Mobile Banking",
        ],
      },
      {
        sub_strategy: "เทคโนโลยีสารสนเทศ",
        sample: "การบริการออนไลน์ประชาชนที่เข้ามาติดต่อ",
        select_ploblem: "6",
        side_details: `
          มุ่งหมายที่จะพัฒนาระบบการให้บริการด้วยระบบสารสนเทศทั้งภายในหน่วยงานและการบริการประชาชนอย่างมีประสิทธิภาพโดยคำนึงถึง (1) 
          การเพิ่มประสิทธิภาพระบบการให้บริการเพื่อขับเคลื่อนภารกิจของกรุงเทพมหานครโดยมีเป้าหมายในการพัฒนาระบบการให้บริการ e-service 
          ของกรุงเทพมหานครให้มีประสิทธิภาพมากขึ้น การพัฒนานวัตกรรมทางด้านเทคโนโลยีสารสนเทศที่ขับเคลื่อนภารกิจสำคัญเชิงยุทธศาสตร์และการพัฒนาระบบการจัดการภายในอย่างมีประสิทธิภาพ 
          (2) การพัฒนาฐานข้อมูลเพื่อสนับสนุนการตัดสินใจของผู้บริหารระดับหน่วยงานและกรุงเทพมหานคร ทั้งการจัดทำชุดข้อมูลเปิดเพื่อให้บริการประชาชนและสาธารณะ 
          และการเชื่อมโยงแลกเปลี่ยนข้อมูลระหว่างหน่วยงานของกรุงเทพมหานคร และ (3) 
          โครงสร้างพื้นฐานด้านเทคโนโลยีสารสนเทศและการสื่อสารที่มีคุณภาพและมีประสิทธิภาพที่เหมาะสมกับภารกิจของการบริหารจัดการเมือง`,
        sub_srategy_def: [
          "พัฒนาระบบการให้บริการ e-service ของกรุงเทพมหานคร",
          "พัฒนาฐานข้อมูลเพื่อสนับสนุนการตัดสินใจของผู้บริหารระดับหน่วยงานและกรุงเทพมหานคร",
          "การจัดทำชุดข้อมูล เชื่อมโยงแลกเปลี่ยนข้อมูลระหว่างหน่วยงานของกรุงเทพมหานคร",
        ],
      },
    ],
  },
];
