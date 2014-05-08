function pmtest() { 
	placemarks.forEach(function(pmData) {
		var persons = "";
		if (Object.prototype.toString.call(pmData.persons) === '[object Array]' && pmData.persons.length > 0) {
			for (var i = 0; i < pmData.persons.length; i++) {
				persons += "<div>" + pmData.persons[i].fio + "<br>" + pmData.persons[i].dbth + " - " + pmData.persons[i].ddth + "<br>" + pmData.persons[i].descr + "<br></div>";
																			
			}
		}		

		var placemark = new ymaps.Placemark([pmData.x, pmData.y], {
	        balloonContentHeader: pmData.title,
	        // balloonContentBody: pmData.descr + "\nКвартал " + pmData.block + "; Ряд " + pmData.line + "; Место " + pmData.place + "." + pmData.subplace + persons,
	        balloonContentBody: pmData.descr + persons,	        
	        balloonContentFooter: "<img src='" + pmData.imgs[0] + "'>",
	        hintContent: pmData.descr            
	    }, {
	        iconImageHref: pmData.markImg,
	        iconImageSize: [35, 40],
	        iconImageOffset: [-20, -25]
	    });
	    myMap.geoObjects.add(placemark);
	}); 

}