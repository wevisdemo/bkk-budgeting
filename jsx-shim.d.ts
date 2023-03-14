import "vue";

declare module "vue/types/jsx" {
  interface ImgHTMLAttributes {
    dataSharer?: string;
    dataUrl?: string;
  }
}
