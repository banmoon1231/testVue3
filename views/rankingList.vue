<template>
  <div class="bg-[#f6f9fc] w-[100vw] overflow-x-hidden">
    <div
      class="flex items-center p-[4vw] w-[100vw] text-[#303546] font-semibold box-border"
    >
      <div class="flex-1">
        <Icon icon="teenyicons:left-outline" />
      </div>
      <div class="flex-1">排行榜</div>
    </div>
    <div class="w-[100vw] overflow-hidden">
      <van-tabs v-model:active="active" background="#f6f9fc">
        <van-tab title="官方" name="a">
          <div class="p-[4vw] box-border w-[100vw]">
            <div class="text-[#303546] font-semibold">榜单推荐</div>
            <div class="flex w-[91.8vw] overflow-hidden justify-between">
              <div class="w-[29vw] h-[29vw] rounded-md">
                <div class="relative">
                  <img
                    :src="third.value[0].coverImgUrl"
                    alt=""
                    class="w-[29vw] h-[29vw] rounded-md"
                  />
                  <div class="absolute right-[3vw] bottom-[3vw]">
                    <Icon icon="ion:play" class="text-white" />
                  </div>
                </div>
              </div>
              <div class="w-[29vw] h-[29vw] rounded-md">
                <div class="relative">
                  <img
                    :src="third.value[1].coverImgUrl"
                    alt=""
                    class="w-[29vw] h-[29vw] rounded-md"
                  />
                  <div class="absolute right-[3vw] bottom-[3vw]">
                    <Icon icon="ion:play" class="text-white" />
                  </div>
                </div>
              </div>
              <div class="w-[29vw] h-[29vw] rounded-md relative">
                <div>
                  <img
                    :src="third.value[2].coverImgUrl"
                    alt=""
                    class="w-[29vw] h-[29vw] rounded-md"
                  />
                  <div class="absolute right-[3vw] bottom-[3vw]">
                    <Icon icon="ion:play" class="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-[4vw]">
            <div class="flex items-center">
              <svg
                t="1715914301396"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2932"
                width="20"
                height="20"
              >
                <path d="M338.048 349.248" fill="#C20C0C" p-id="2933"></path>
                <path
                  d="M521.6256 53.4528c-260.5056 0-471.6544 211.1488-471.6544 471.6544s211.1488 471.6544 471.6544 471.6544 471.6544-211.1488 471.6544-471.6544S782.1312 53.4528 521.6256 53.4528zM741.92213333 670.85653333c-19.2512 55.02293333-72.63573333 107.24693333-135.85066666 131.4816-33.51893333 13.17546667-101.23946667 17.6128-138.0352 8.8064C302.42133333 772.57386667 217.77066667 563.06346667 306.31253333 411.78453333c29.14986667-50.03946667 108.3392-117.69173333 137.48906667-117.69173333 6.62186667 0 16.52053333 4.98346667 21.43573333 10.4448 17.6128 19.2512 8.8064 33.5872-38.5024 67.10613333-67.10613333 47.85493333-96.256 101.7856-96.256 177.69813334 0 61.57653333 23.07413333 114.41493333 69.29066667 156.74026666 37.95626667 34.67946667 68.1984 46.76266667 121.0368 47.3088 73.728 0 126.49813333-31.3344 157.2864-93.52533333 16.52053333-33.51893333 17.06666667-37.95626667 14.88213333-84.71893333-2.18453333-42.32533333-4.36906667-52.77013333-18.70506666-75.3664-15.42826667-24.7808-62.6688-58.84586667-70.92906667-51.13173334-1.6384 2.18453333 1.6384 23.07413333 8.26026667 46.76266667 6.07573333 23.68853333 10.99093333 47.85493333 10.99093333 53.93066667 0 44.57813333-34.67946667 90.7264-76.45866667 102.33173333-70.92906667 19.2512-128.68266667-35.2256-128.68266666-121.58293333 0-59.93813333 29.696-105.0624 84.71893333-129.77493334l19.79733333-8.8064-2.18453333-47.3088c-2.73066667-42.87146667-1.6384-48.9472 9.35253333-63.2832 26.96533333-33.51893333 70.92906667-45.6704 108.3392-29.696 22.528 9.35253333 45.6704 32.42666667 45.6704 45.12426667 0 12.62933333-14.88213333 30.78826667-25.32693333 30.78826667-3.82293333 0-17.06666667-4.9152-29.14986667-11.53706667-26.96533333-13.7216-39.04853333-12.0832-49.49333333 6.62186667-6.62186667 12.0832-7.168 18.70506667-1.6384 36.864 6.07573333 20.34346667 8.8064 22.528 32.9728 28.60373333 62.12266667 14.88213333 103.97013333 52.224 128.68266667 114.96106667C755.0976 543.26613333 756.80426667 629.62346667 741.92213333 670.85653333z"
                  fill="#C20C0C"
                  p-id="2934"
                ></path>
                <path
                  d="M503.168 472.128c-16.512 10.304-33.024 42.304-33.024 65.472 0 19.584 13.44 46.912 25.792 53.632 22.656 12.352 56.704-8.768 56.704-35.072 0-7.744-4.096-32-8.768-54.144C533.568 458.176 529.984 455.616 503.168 472.128z"
                  fill="#C20C0C"
                  p-id="2935"
                ></path>
              </svg>
              <span class="text-[#33546] font-semibold ml-[2vw]">官方榜</span>
            </div>
            <div
              class="w-[91vw] h-[40vw] bg-white rounded-md mt-[4vw]"
              v-for="items in third.value.slice(0, 4)"
              :key="items.id"
            >
              <div
                class="flex items-center pt-[4.7vw] justify-between px-[5vw] text-[#303546]"
              >
                <div class="font-semibold text-[4vw]">{{ items.name }}</div>
                <div class="text-[3vw] text-[#999da7]">
                  {{ items.updateFrequency }}
                </div>
              </div>
              <div class="flex items-center justify-between p-[3.8vw]">
                <div class="relative w-[23vw] h-[23vw]">
                  <img
                    :src="soaringData.value[0].al.picUrl"
                    alt=""
                    class="w-[23vw] h-[23vw] rounded-md absolute z-10"
                    @click="getRankingPic(item.id)"
                  />
                  <img
                    :src="soaringData.value[0].al.picUrl"
                    alt=""
                    class="w-[20vw] h-[20vw] rounded-md absolute left-[5vw] bottom-[0vw] opacity-25"
                  />
                  <img
                    :src="soaringData.value[0].al.picUrl"
                    alt=""
                    class="w-[18vw] h-[18vw] rounded-md absolute left-[10vw] bottom-[0vw] opacity-10"
                  />
                  <div
                    class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-20"
                  >
                    <Icon
                      icon="ion:play"
                      class="text-white w-[10vw] h-[10vw]"
                    />
                  </div>
                </div>
                <div>
                  <div
                    class="text-[#343b4f] font-semibold text-[3.2vw]"
                    v-for="(item, index) in items.tracks"
                    :key="item.id"
                  >
                    <div class="mt-[1.6vw] truncate w-[55.7vw]">
                      <span>{{ index + 1 }} </span>
                      <span class="">{{ item.first }}</span>
                      <span class="text-[#9a9ea7]">-{{ item.first }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  Mv榜 -->

            <div class="bg-[#f2f4fb] mt-[13.1vw]">
              <div>
                <div class="text-[#2a3146] font-semibold text-[4.4vw]">
                  <span>精选榜</span>
                </div>
                <div class="flex items-center flex-wrap w-[100vw]">
                  <div v-for="item in List.slice(0, 11)">
                    <img
                      :src="item.coverImgUrl"
                      alt=""
                      class="w-[28.5vw] h-[28.5vw] rounded-md ml-[2vw] mt-[2vw]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[#2a3146] font-semibold text-[4.4vw]">
                  <span>曲风榜</span>
                </div>
                <div class="flex items-center flex-wrap w-[100vw]">
                  <div v-for="item in List.slice(11, 20)">
                    <img
                      :src="item.coverImgUrl"
                      alt=""
                      class="w-[28.5vw] h-[28.5vw] rounded-md ml-[2vw] mt-[2vw]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[#2a3146] font-semibold text-[4.4vw]">
                  <span>全球榜</span>
                </div>
                <div class="flex items-center flex-wrap w-[100vw]">
                  <div v-for="item in List.slice(20, 30)">
                    <img
                      :src="item.coverImgUrl"
                      alt=""
                      class="w-[28.5vw] h-[28.5vw] rounded-md ml-[2vw] mt-[2vw]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[#2a3146] font-semibold text-[4.4vw]">
                  <span>语种榜</span>
                </div>
                <div class="flex items-center flex-wrap w-[100vw]">
                  <div v-for="item in List.slice(30, 40)">
                    <img
                      :src="item.coverImgUrl"
                      alt=""
                      class="w-[28.5vw] h-[28.5vw] rounded-md ml-[2vw] mt-[2vw]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[#2a3146] font-semibold text-[4.4vw]">
                  <span>特色榜</span>
                </div>
                <div class="flex items-center flex-wrap w-[100vw]">
                  <div v-for="item in List.slice(43, 49)">
                    <img
                      :src="item.coverImgUrl"
                      alt=""
                      class="w-[28.5vw] h-[28.5vw] rounded-md ml-[2vw] mt-[2vw]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="精选" name="b"> </van-tab>
        <van-tab title="曲风" name="c">内容 3</van-tab>
        <van-tab title="全球" name="d">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { getRankingList, getRankListAll, getMvList } from "@/service";
import { useRequest } from "vue-request";
const { data: List } = useRequest(getRankingList);
console.log(List);
const { data: listAll } = useRequest(() =>
  getRankListAll({ id: "19723756", limit: 3 })
);

//飙升榜数据
const soaringData = ref();

// 榜单推荐
const third = ref();
let recommendRank;

onMounted(() => {
  soaringData.value = listAll;
  console.log(listAll);
  third.value = List;
  // recommendRank = third.value.slice(0, 3);
  // console.log(recommendRank);
});
// 获取所有榜单里的id
const rankingId = ref();
const active = ref("a");
(async () => {
  const res = await getRankingList();
  rankingId.value = res.map(({ id }) => id).slice(0, 4);
  console.log(rankingId.value);
  console.log(res1);
  console.log(res2);
})();
// 加载榜单图片

// const loadPic = async (val) => {
//   const res = await getRankListAll({ id: val });
//   console.log(res);
// };
// onMounted(() => {
//   loadPic(val);
// });

watchEffect(() => {
  // rankingId.value = useRequest(getRankingListId);
  // console.log(rankingId.value);
});
// const {data:topList} = useRequest(()=>Promise.all(top))
const getRankingPic = async (val) => {
  console.log(val);
  // const res = await getRankListAll({ id: val });
  // console.log(res);
};

// Mv
const { data: MvList } = useRequest(getMvList);
console.log(MvList);
</script>
