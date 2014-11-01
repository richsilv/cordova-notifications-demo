/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
	showForm: function() {
		return (Meteor.user() && !Meteor.isCordova);
	}
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Template.form.events({
	'click [data-action="send-notification"], submit': function (event, template) {
		event.preventDefault();
		Meteor.call('notify', template.$('[data-field="title"]').val(), template.$('[data-field="message"]').val(), function(err, res) {
			if (err) {
				console.log(err);
			} else {
				if (res.userCount) {
					alert('Notification sent.');
				}
			}
		});
	}
});

Accounts.ui.config({
 	passwordSignupFields: 'USERNAME_ONLY'
 });