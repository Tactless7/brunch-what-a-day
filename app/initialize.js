let moment = require('moment');

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
});

(()=>{
	const app = {
		dayOfWeek: null,
		data: {},
		moment: null,
		init(){
			this.listeners();
		},
		listeners(){

		}
	}

	app.init();

})();