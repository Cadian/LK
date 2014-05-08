ymaps.ready(init);

function createPlacemark(coords, header, description, footer, map) {
    var placemark = new ymaps.Placemark(coords, {
        balloonContentHeader: header,
        balloonContentBody: description,
        balloonContentFooter: footer,
        hintContent: header            
    }, {
        iconImageHref: 'images/placemark.png',
        iconImageSize: [35, 40],
        iconImageOffset: [-8, -37]
    });
    if (map) {
        map.geoObjects.add(placemark);    
    }
    return placemark;
}
 
function init () {
    // Карта с отметкой офиса компании
    createContactsMap();


    // Главная карта - достопримечательности Рязанской области
    createMainMap();
}

function createContactsMap() {
    var contactsMap = new ymaps.Map("contacts_map", {
            center: [54.616675, 39.72273],
            zoom: 15
        }),
        myPlacemark = new ymaps.Placemark([54.616675, 39.72273], {
            balloonContentHeader: "ОКОЁМ",
            balloonContentBody: "Туристическая компания",
            balloonContentFooter: "ул. Татарская, д.47",
            hintContent: "Окоём"            
        }, {
            iconImageHref: 'images/placemark.png',
            iconImageSize: [35, 40],
            iconImageOffset: [-8, -37]
        });
 
    contactsMap.geoObjects.add(myPlacemark);
    contactsMap.controls.add('mapTools');
    contactsMap.controls.add('zoomControl');  
}

function createMainMap() {
    var mainMap = new ymaps.Map("main_map", {
        center: [54.616675,39.72273],
        zoom: 7
    })
    mainMap.controls.add('mapTools');
    mainMap.controls.add('zoomControl');

    createPlacemark([54.939711,41.392008], "Касимов", "Рязанская область, город Касимов", 
        '<a class="link3" href="#!/page_places_kasimov">Подробнее</a>', mainMap); 

    createPlacemark([54.229898,39.026372], "Михайловское кружево", "Рязанская область, город Михайлов", 
        '<a class="link3" href="#!/page_places_mikhailov">Подробнее</a>', mainMap); 

    createPlacemark([53.82956,39.551388], "Скопинская керамика", "Рязанская область, город Скопин", 
        '<a class="link3" href="#!/page_places_skopin">Подробнее</a>', mainMap); 

    createPlacemark([53.911603,39.733122], "Усадьба Худекова", "Рязанская область, село Ерлино", 
        '<a class="link3" href="#!/page_places_hudekov_homestead">Подробнее</a>', mainMap); 

    createPlacemark([55.058454,41.163554], "Усадьба Баташовых", "Рязанская область, поселок Гусь-Железный", 
        '<a class="link3" href="#!/page_places_batashov_homestead">Подробнее</a>', mainMap); 

    createPlacemark([55.193960,40.165018], "Музей деревянного зодчества", "Рязанская область, деревня Лункино", 
        '<a class="link3" href="#!/page_places_wooden_arch_mus">Подробнее</a>', mainMap); 

    createPlacemark([55.106963,38.755976], "Коломна", "Московская область, город Коломна", 
        '<a class="link3" href="#!/page_places_kolomna">Подробнее</a>', mainMap);     
}
