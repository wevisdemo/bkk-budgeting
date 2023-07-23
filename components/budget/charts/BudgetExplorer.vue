<template>
  <VizChart>
    <div class="flex flex-col lg:flex-row">
      <div id="KeyWordBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
        <p class="wv-b3 flex-grow text-center sm:text-left">
          หากไม่รู้ว่าจะเริ่มสำรวจการใช้งบจากตรงไหน ลองค้นหาด้วย
          <span class="font-bold">คีย์เวิร์ดที่พบบ่อย</span>
          ในชื่อและคำอธิบายรายการใช้งบ
        </p>

        <p class="wv-b7 text-wv-gray-1 text-center sm:text-left">ขนาดคำ = จำนวนที่พบ</p>
      </div>
      <div class="w-full flex flex-col justify-between gap-4">
        <div id="wordCloundWrapper"></div>
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{ path: 'explore', query: { select: 'KeyWordBudget' } }"
            class="flex items-center py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
          >
            ค้นหางบด้วยคีย์เวิร์ด
            <i class="el-icon-right ml-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import * as d3 from "d3";
import * as cloud from "d3-cloud";
import { mainKeyWord } from "~/data/budgets/mainKeyword";

export default Vue.extend({
  name: "KeyWordBudget",
  components: { VizChart },
  data() {
    return {};
  },
  methods: {
    mainKeyWord,
    drawChart() {
      const getWidth = d3
        .select("#wordCloundWrapper")
        .node()
        .getBoundingClientRect().width;
      const width = getWidth;
      const height = 450;
      var svg = d3
        .select("#wordCloundWrapper")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      var layout = cloud()
        .size([width, height])
        .words(
          mainKeyWord()
            .slice(0, 50)
            .map(function (d) {
              return { text: d.Word, size: d.Count };
            }),
        )
        .padding(5)
        .rotate(function () {
          return ~~(Math.random() * 2);
        })
        .fontSize(function (d) {
          return d.size / 5;
        })
        .on("end", draw);
      layout.start();
      function draw(words) {
        svg
          .append("g")
          .attr(
            "transform",
            "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")",
          )
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", function (d) {
            return d.size;
          })
          .attr("text-anchor", "middle")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) {
            return d.text;
          });
      }
    },
  },
  mounted() {
    if (d3.select("#wordCloundWrapper")) this.drawChart();
  },
});
</script>

<style lang="scss"></style>
