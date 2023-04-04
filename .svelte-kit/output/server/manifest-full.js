export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c5fde887.js","imports":["_app/immutable/entry/start.c5fde887.js","_app/immutable/chunks/index.13786dfa.js","_app/immutable/chunks/singletons.fe0ba79b.js","_app/immutable/chunks/paths.17b28187.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.516d801e.js","imports":["_app/immutable/entry/app.516d801e.js","_app/immutable/chunks/index.13786dfa.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};