'use strict';

module.exports = {
	db: 'mongodb://localhost/trust-roots-test',
	port: 3001,
	app: {
		title: 'Trustroots - Test Environment'
  },
  assets: {
  	lib: {
  		css: [
  		  'public/lib/medium-editor/dist/css/medium-editor.css',
  		  'public/lib/perfect-scrollbar/src/perfect-scrollbar.css',
  		  'public/lib/leaflet/dist/leaflet.css',
  		  'public/lib/leaflet.markercluster/dist/MarkerCluster.css'
  		],
  		js: [
			  // Non minified  versions
			  'public/lib/jquery/dist/jquery.js',
			  'public/lib/angular/angular.js',
			  'public/lib/angular-resource/angular-resource.js',
			  'public/lib/angular-animate/angular-animate.js',
			  'public/lib/angular-touch/angular-touch.js',
			  'public/lib/angular-sanitize/angular-sanitize.js',
			  'public/lib/angular-ui-router/release/angular-ui-router.js',
			  'public/lib/angular-ui-utils/ui-utils.js',
			  'public/lib/angular-ui-select/dist/select.js',
			  'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
			  'public/lib/moment/moment.js',
			  'public/lib/angular-moment/angular-moment.js',
			  'public/lib/medium-editor/dist/js/medium-editor.js',
			  'public/lib/angular-medium-editor/dist/angular-medium-editor.js',
			  //'public/lib/angular-socket-io/socket.js',
			  'public/lib/perfect-scrollbar/src/jquery.mousewheel.js', // @todo: is this really needed?
			  'public/lib/perfect-scrollbar/src/perfect-scrollbar.js',
			  'public/lib/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js',
			  'public/lib/leaflet/dist/leaflet-src.js',
			  'public/lib/PruneCluster/dist/PruneCluster.js',
			  'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
			  'public/lib/angular-deckgrid/angular-deckgrid.js',
			  'public/lib/angular-waypoints/dist/angular-waypoints.all.js',
			  'public/lib/message-center/message-center.js',
  		]
  	},
  	less: [
  		'public/modules/**/less/*.less'
  	],
  	css: [
  			// nada
  			//'public/modules/**/css/*.css'
  	],
  	js: [
  		'public/config.js',
  		'public/application.js',
  		'public/modules/*/*.js',
  		'public/modules/*/*[!tests]*/*.js'
  	]
  },
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
