<template>
  <VizChart>
    <div class="flex">
      <div id="KeyWordBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
        <p class="wv-b3 flex-grow text-center sm:text-left">
          หากไม่รู้ว่าจะเริ่มสำรวจการใช้งบจากตรงไหน ลองค้นหาด้วย คีย์เวิร์ดที่พบบ่อย
          ในชื่อและคำอธิบายรายการใช้งบ
        </p>

        <p class="wv-b7 text-wv-gray-1 text-center sm:text-left">ขนาดคำ = จำนวนที่พบ</p>
      </div>
      <div class="w-full flex flex-col justify-between gap-4">
        <div id="wordCloundWrapper"></div>
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{ path: 'explore', query: { select: 'KeyWordBudget' } }"
            class="inline-block py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
          >
            ค้นหางบด้วยคีย์เวิร์ด
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
import { keywords } from "~/data/budgets/keywords";

export default Vue.extend({
  name: "KeyWordBudget",
  components: { VizChart },
  data() {
    return {};
  },
  methods: {
    keywords,
    drawChart() {
      // set the dimensions and margins of the graph
      const getWidth = d3
        .select("#wordCloundWrapper")
        .node()
        .getBoundingClientRect().width;
      var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = getWidth - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg = d3
        .select("#wordCloundWrapper")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
      // Wordcloud features that are different from one word to the other must be here
      var layout = cloud()
        .size([width, height])
        .words(
          keywords()
            .slice(0, 50)
            .map(function (d) {
              return { text: d.Word, size: d.Count };
            }),
        )
        .padding(5) //space between words
        .rotate(function () {
          return ~~(Math.random() * 2) * 90;
        })
        .fontSize(function (d) {
          return d.size / 10;
        }) // font size of words
        .on("end", draw);
      layout.start();

      // This function takes the output of 'layout' above and draw the words
      // Wordcloud features that are THE SAME from one word to the other can be here
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
          .style("font-family", "Impact")
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
