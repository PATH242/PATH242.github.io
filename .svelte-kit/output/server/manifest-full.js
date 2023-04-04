export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.874ae72c.js","imports":["_app/immutable/entry/start.874ae72c.js","_app/immutable/chunks/index.7109e13d.js","_app/immutable/chunks/singletons.9f7b6b70.js","_app/immutable/chunks/paths.5e1bc50f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5ea3bdfa.js","imports":["_app/immutable/entry/app.5ea3bdfa.js","_app/immutable/chunks/index.7109e13d.js"],"stylesheets":[],"fonts":[]}},
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
