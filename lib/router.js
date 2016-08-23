Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'nav'
});

Router.route('/:username', {
  name: 'userPage', 
  template: 'nav'
});

Router.route('/:username/tops', {
	name: 'tops', 
	template: 'home'
});

Router.route('/:username/pants', {
	name: 'pants', 
	template: 'home'
});

Router.onBeforeAction('loading');