import districtData from "../data/districts.json";
import projectsData from "../data/projects.json";

const districts = districtData.slice(4);

export const generateOgImageRoutes = () => {
  const array = [];
  array.push("/ogimage/upcountry");
  districts.forEach(district => {
    for (let p = 0; p < projectsData.length; p++) {
      array.push("/ogimage/" + district.en_name + "-" + (p + 1));
    }
  });
  return array;
};
