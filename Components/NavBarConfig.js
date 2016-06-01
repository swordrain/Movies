export const statusBarConfig = {
	style: 'light-content',

};
export function titleConfig(title) {
	return {
		title: title,
		tintColor: 'white'
	}
};
export function backConfig(navigator) {
	return {
		title: '← back',
		tintColor: 'white',
		handler: function(){
			navigator.pop();
		}
	}
}