<template>
  <div class="min-h-[80vh] md:max-w-[600px] md:w-[600px] mx-auto flex flex-col">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8">
      <h5 class="wv-h5 wv-bold text-center wv-kondolar">3 โครงการที่คุณอยากพัฒนา</h5>
    </div>
    <div
      v-for="(item, no) in reviewDate"
      :key="no"
      class="w-full wv-b4 font-bold wv-b4 text-left p-[20px] my-[4px] rounded-[5px] bg-black text-white"
    >
      {{ item.idea }}
    </div>
    <a class="wv-b3 mx-auto mt-5 cursor-pointer" href="#vote-result">
      ดูผลสำรวจ
      <img
        src="~/assets/icons/next-survey.svg"
        alt="next-survey"
        class="mx-auto mt-2"
      />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewDate: [],
    };
  },
  async mounted() {
    const cookieId = this.$cookies.get("uuid");
    const rowData = await this.findTableViewRow(cookieId);
    this.reviewDate = rowData.list.slice(0, 3);
  },

  methods: {
    async findTableViewRow(cookieId) {
      const data = await this.$nocoDb.dbViewRow.list(
        "v1",
        "bangkok-budgeting",
        "Survey",
        "data",
        { where: `(userId,eq,${cookieId})` },
      );
      return data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
