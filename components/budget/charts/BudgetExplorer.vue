<template>
  <VizChart>
    <div id="KeyWordBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
      <p class="wv-b3 flex-grow text-center sm:text-left">
        หากไม่รู้ว่าจะเริ่มสำรวจการใช้งบจากตรงไหน ลองค้นหาด้วย คีย์เวิร์ดที่พบบ่อย
        ในชื่อและคำอธิบายรายการใช้งบ
      </p>
      <div class="block sm:hidden">
        <div>Chart</div>
      </div>
      <p class="wv-b7 text-wv-gray-1 text-center sm:text-left">ขนาดคำ = จำนวนที่พบ</p>
    </div>
    <div class="w-full flex flex-col justify-between gap-4">
      <div class="hidden sm:block">Chart</div>
      <div class="flex justify-center sm:justify-end">
        <NuxtLink
          :to="{ path: 'explore', query: { select: 'KeyWordBudget' } }"
          class="inline-block py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
        >
          ค้นหางบด้วยคีย์เวิร์ด
        </NuxtLink>
      </div>
    </div>
  </VizChart>
</template>

<script lang="ts">
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";

export default Vue.extend({
  name: "KeyWordBudget",
  components: { VizChart },
});
</script>

<style lang="scss"></style>
