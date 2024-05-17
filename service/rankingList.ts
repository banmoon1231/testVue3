import http from "./http";
import to from "await-to-js";

export const getRankingList = async () => {
  const [err, res] = await to(http.get("/toplist/detail"));
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 获取请求中所有的id
// export const getRankingListId = async () => {
//   const [err, res] = await to(http.get("/toplist/detail"));
//   if (err) throw new Error("请求失败");
//   return res.data.list.map(({ id }) => id);
// };

export const getRankListAll = async (params: { id: string; limit: number }) => {
  const [err, res] = await to(http.get("/playlist/track/all", { params }));
  if (err) throw new Error("请求失败");
  return res.data.songs;
};

export const getMvList = async () => {
  const [err, res] = await to(http.get("/top/mv"));
  if (err) throw Error("请求失败");
  return res.data.data;
};
