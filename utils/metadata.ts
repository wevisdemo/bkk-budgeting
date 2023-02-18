export const BASE_TITLE = "Bangkok Budgeting";
const DESCRIPTION = "เปิดเผยอย่างโปร่งใส เพื่อใครๆ ก็มีส่วนร่วมกับงบกรุงเทพฯ ได้";
// todo: replace new og iamge
export const DEFAULT_OG_IMAGE = "https://d208eq9ndr4893.cloudfront.net/og_image.png";

interface createMetadataParams {
  pageName?: string;
  description?: string;
  image?: string;
}

export const createMetadata = ({
  pageName,
  description = DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
}: createMetadataParams = {}) => {
  const title = pageName ? `${pageName} - ${BASE_TITLE}` : BASE_TITLE;

  return {
    title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description,
      },
      {
        hid: "og-title",
        property: "og:title",
        content: title,
      },
      {
        hid: "og-description",
        property: "og:description",
        content: description,
      },
      {
        hid: "og-image",
        property: "og:image",
        content: image,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image:src",
        content: image,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };
};
