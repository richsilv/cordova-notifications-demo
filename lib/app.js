/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {
	notificationClient: new NotificationClient({
		senderId: YOUR_SENDERID,
		gcmAuthorization: YOUR_GCM_API_KEY
	})
};