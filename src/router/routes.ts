import type { RouteRecordRaw } from "vue-router";
import Search from "@/views/search.vue";
import rankingList from "@/views/rankingList.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/rankingList" },
  { path: "/search", component: Search },
  { path: "/rankingList", component: rankingList },
];

export default routes;
