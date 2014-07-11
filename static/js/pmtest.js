function pmtest() { 
	placemarks.forEach(function(pmData) {
		var persons = "";
		if (Object.prototype.toString.call(pmData.persons) === '[object Array]' && pmData.persons.length > 0) {
			var addString = function(data, newline) {
				if (data) {	
					if (newline) {
						return data + "<br>"; 
					} else {
						return data + " ";
					}
					
				} else { 	return "" }
			}
			var addLifePeriod = function(birth, death) {
				if (birth && death) {	
					return birth  + " - " + death + "<br>"; 
				} else if (birth || death) {
					if (!birth) {birth = "Неизвестно"};
					if (!death) {death = "Неизвестно"};
				 	return birth  + " - " + death + "<br>";  
				 } else {
				 	return ""
				 }
			}

			for (var i = 0; i < pmData.persons.length; i++) {
				persons += "<div class='balloon_text'>" 
					+ addString(pmData.persons[i].lastName) 
					+ addString(pmData.persons[i].firstName) 
					+ addString(pmData.persons[i].middleName, 1) 
					+ addLifePeriod(pmData.persons[i].dbth, pmData.persons[i].ddth)
					+ addString(pmData.persons[i].descr)
					+ "</div>";																			
			}
		}		

		var placemark = new ymaps.Placemark([pmData.x, pmData.y], {
	        balloonContentHeader: pmData.title,
	        // balloonContentBody: pmData.descr + "\nКвартал " + pmData.block + "; Ряд " + pmData.line + "; Место " + pmData.place + "." + pmData.subplace + persons,
	        balloonContentBody: pmData.descr + persons,	        
	        balloonContentFooter: "<img src='" + pmData.imgs[0] + "'>" + "<br>" + "<a href='#'>Редактировать</a> <a href='#'>Удалить</a>",
	        hintContent: pmData.descr            
	    }, {
	        iconImageHref: pmData.markImg,
	        iconImageSize: [35, 40],
	        iconImageOffset: [-20, -25]
	    });
	    myMap.geoObjects.add(placemark);
	}); 

}