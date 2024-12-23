import { createRouter, createWebHistory } from "vue-router";
//createRouter方法,用于创建路由器实例，可以管理多个路由
import Home from "../views/Home/index.vue";
import HomePage from "../views/HompPage/index.vue";
import album from "../views/album/index.vue";
import contact from "../views/contact/index.vue";
import InformalEssay from "../views/InformalEssay/index.vue";
import TreasureBox from "../views/TreasureBox/index.vue";
import StartPage from "../views/HompPage/StartPage/index.vue";
import record from "../views/record/index.vue";
import message from "../views/Message/index.vue";
import specialColumn from "../views/HompPage/specialColumn/index.vue";
import content from "../views/HompPage/content/index.vue";
import Blog from "../views/HompPage/Blog/index.vue";
import AlbumCollection from "../views/TreasureBox/AlbumCollection/index.vue";
import Music from "../views/TreasureBox/Music/index.vue";
import Favorites from "../views/TreasureBox/Favorites/index.vue";
import FriendshipLink from "../views/TreasureBox/FriendshipLink/index.vue";
import Login from "../views/Login/index.vue";
const router = createRouter({
	//路由的模式的设置
	history: createWebHistory(),
	//管理路由
	routes: [
		{
			path: "/home",
			component: Home,
			meta: {
				title: "家",
			},
		},
		{
			path: "/login",
			component: Login,
		},
		{
			path: "/homepage",
			component: HomePage,
			children: [
				{
					path: "startpage",
					component: StartPage,
				},
				{
					path: "specialColumn",
					component: specialColumn,
				},
				{
					path: "content",
					component: content,
				},
				{
					path: "blog",
					component: Blog,
				},
			],
			meta: {
				title: "首页",
			},
		},
		{
			path: "/album",
			component: album,
			meta: {
				title: "相册",
			},
		},
		{
			path: "/contact",
			component: contact,
			meta: {
				title: "联系我",
			},
		},
		{
			path: "/informalessay",
			component: InformalEssay,
			meta: {
				title: "随笔",
			},
		},
		{
			path: "/treasureBox",
			component: TreasureBox,
			meta: {
				title: "百宝箱",
			},
			children: [
				{
					path: "AlbumCollection",
					component: AlbumCollection,
				},
				{
					path: "music",
					component: Music,
				},
				{
					path: "favorites",
					component: Favorites,
				},
				{
					path: "friendshipLink",
					component: FriendshipLink,
				},
			],
		},
		{
			path: "/record",
			component: record,
			meta: {
				title: "记录",
			},
		},
		{
			path: "/message",
			component: message,
			meta: {
				title: "留言",
			},
		},

		{ path: "/", redirect: "/homepage/startpage" },
	],
	//滚动行为:控制滚动条的位置
	scrollBehavior() {
		return {
			left: 0,
			top: 0,
		};
	},
});
export default router;
