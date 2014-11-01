Meteor.methods({
	'notify': function(title, message) {
		return App.notificationClient.sendNotification(this.userId, {
			title: title,
			message: message
		});
	}
});