export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.798f77e2.js","imports":["_app/immutable/entry/start.798f77e2.js","_app/immutable/chunks/index.7109e13d.js","_app/immutable/chunks/singletons.03d3dba0.js","_app/immutable/chunks/paths.aca93e72.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.91593203.js","imports":["_app/immutable/entry/app.91593203.js","_app/immutable/chunks/index.7109e13d.js"],"stylesheets":[],"fonts":[]}},
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
