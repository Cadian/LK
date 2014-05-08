var addburial = {};

ymaps.ready(function() {
	init();
	addburial.initMapPointer();
});

$(document).ready(function () {
	// Клик по чекбоксу с информацией о захороненых людях
	$("#areBuried").change(function() {
		if ($('#areBuried').prop('checked')) {
			if ($('.extraPerson').length == 0) {
				addburial.addExtraPerson();
			}
			$('#addone').show();
			$('#removeone').show();
		} else {
			addburial.removeAllPersons();
		}
	});
	$('#addone').click(function () {
	    addburial.addExtraPerson();
	}).hide();	
	$('#removeone').click(function () {
	    addburial.removeLastPerson();
	    if ($('.extraPerson').length == 0) {
			$('#addone').hide();
			$('#removeone').hide();
			$('#areBuried').prop('checked', false);
		}
	}).hide();	
});

addburial.peopleBuried = 0;


addburial.initMapPointer = function() {
	myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coordPosition');         
            myMap.balloon.open(coords, {
                contentBody:'Местоположение отмечено',
                contentFooter:'<sup>Щелкните еще раз, чтобы отменить</sup>'
            });
            addburial.setCoords(coords);
        }
        else {
            myMap.balloon.close();
            addburial.clearCoords();
        }
    });
}

addburial.setCoords = function(coords) {
	$("input[name=coords]").val(JSON.stringify(coords));
}

addburial.clearCoords = function() {
	$("input[name=coords]").val('');
}

addburial.addExtraPerson = function() {
	// Создаем форму добавления информации о человеке
	$('<div/>', {
	    'class' : 'extraPerson', 
	    html: $('.extraPersonTemplate').clone().html()
	}).hide().appendTo('#persons').slideDown('slow'); //Get the html from template
}

addburial.removeLastPerson = function(coords) {
	$(".extraPerson")[$(".extraPerson").length - 1].remove(); 
}

addburial.removeAllPersons = function(coords) {
	$(".extraPerson").each(function(index) {
		this.remove(); 
	});
	$('#addone').hide();
	$('#removeone').hide();
	$('#areBuried').prop('checked', false);
}




