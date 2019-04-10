class WeatherWidget extends Widget {
	
	constructor(id, app) {
		super(id, WeatherModel, WeatherView, WeatherController, app);
	}
	
	setUp() {
		super.setUp();
		this.try.header = true;
		this.try.footer = true;
		this.try.sizeX = 2;
		this.try.sizeY = 1;
		this.try.radius = 10;
	}
	
	async ready() {
		super.ready();
		
		this.try.controller.load();
	}
	
}

class WeatherModel extends WidgetModel {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

}

class WeatherView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		this.try.image = HH.create("img");
		HH.attr(this.try.image, {"src": "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"});
		HH.attr(this.try.image, {"src": "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"});
		HH.attr(this.try.image, {"src": "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"});
		this.stage.appendChild(img);
	
	
	
	
	}
}



class WeatherController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}
	getLocation(){
		if(navigator.geoLocation){
			navigator.geoLocation.getCurrentPosition(succes,error);
		}
		else{
			error();
	}}
	async load() {
	/*	let result = await this.mvc.main.dom("https://www.meteofrance.com"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
	*/
		this.mvc.view.update(article.textContent, article.getAttribute("href"));
	}
	
}