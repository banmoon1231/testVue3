export interface Track {
  first: string;
  second: string;
}

export interface List {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks: Track[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  coverText?: any;
  titleImageUrl?: any;
  coverImageUrl?: any;
  iconImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  tsSongCount: number;
  specialType: number;
  anonimous: boolean;
  coverImgId: number;
  trackCount: number;
  updateTime: number;
  commentThreadId: string;
  trackUpdateTime: number;
  coverImgUrl: string;
  newImported: boolean;
  highQuality: boolean;
  totalDuration: number;
  trackNumberUpdateTime: number;
  privacy: number;
  playCount: number;
  adType: number;
  cloudTrackCount: number;
  subscribedCount: number;
  createTime: number;
  ordered: boolean;
  description: string;
  status: number;
  tags: any[];
  userId: number;
  name: string;
  id: number;
  coverImgId_str: string;
  toplistType: string;
}

export interface Artist {
  first: string;
  second: string;
  third: number;
}

export interface ArtistToplist {
  coverUrl: string;
  artists: Artist[];
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Album {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: Artist;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist[];
  subType: string;
  transName?: any;
  onSale: boolean;
  mark: number;
  gapless: number;
  dolbyMark: number;
  picId_str: string;
}

export interface SqMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface HMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface MMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface LMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface BMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface Song {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  sqMusic: SqMusic;
  hrMusic?: any;
  ringtone: string;
  crbt?: any;
  audition?: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName?: any;
  sign?: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  single: number;
  noCopyrightRcmd?: any;
  hMusic: HMusic;
  mMusic: MMusic;
  lMusic: LMusic;
  bMusic: BMusic;
  rtype: number;
  rurl?: any;
  mvid: number;
  mp3Url?: any;
}

export interface RewardToplist {
  coverUrl: string;
  songs: Song[];
  name: string;
  position: number;
}

export interface RootObject {
  code: number;
  list: List[];
  artistToplist: ArtistToplist;
  rewardToplist: RewardToplist;
}
