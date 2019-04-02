class WeatherWidget extends Widget {
	
	constructor(id, app) {
		super(id, WeatherModel, WeatherView, WeatherController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = true;
		this.sizeX = 2;
		this.sizeY = 1;
		this.radius = 10;
	}
	
	async ready() {
		super.ready();
		
		this.controller.load();
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
		this.link = HH.create("a");
		SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});
		
		this.try.nextLine();
		this.try.addButton('' , event => console.log("test")); 
	}
	
	
	
}
	addButton(name,func,val) {
		let b = HH.create("div");
		b.textContent=name;
		b.addEventListener('click',function(event){
		func(event,val);
	};
		this.try.buttons.push(b);
	
	showButton(){
		for(let i=0; i<this.try.buttons.length; i++){
			if(i % 3 == 0)
				this.try.nextLine();
				this.try.stage.appendChild(this.try.buttons[i]);
		}
	}




class WeatherController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}
	getLocatio(){
		if(navigator.geolocalisation){
			navigator.geolocalisation.getCurrentPosition(succes,error);
		}
		else{
			error();
		}
	async load() {
		let result = await this.mvc.main.dom("http://www.meteofrance.com"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
	
		this.mvc.view.update(article.textContent, article.getAttribute("href"));
	}
	
}