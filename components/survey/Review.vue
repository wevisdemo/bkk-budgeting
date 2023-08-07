<template>
  <div
    class="min-h-screen md:max-w-[600px] md:w-[600px] mx-auto flex flex-col font-bold"
  >
    <div
      v-for="(item, no) in reviewDate"
      :key="no"
      class="w-full wv-b4 text-left p-[20px] my-[4px] rounded-[5px] bg-black text-white"
    >
      {{ item.idea }}
    </div>
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
