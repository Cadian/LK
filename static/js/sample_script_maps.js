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
    // ����� � �������� ����� ��������
    createContactsMap();


    // ������� ����� - ��������������������� ��������� �������
    createMainMap();
}

function createContactsMap() {
    var contactsMap = new ymaps.Map("contacts_map", {
            center: [54.616675, 39.72273],
            zoom: 15
        }),
        myPlacemark = new ymaps.Placemark([54.616675, 39.72273], {
            balloonContentHeader: "��Ψ�",
            balloonContentBody: "������������� ��������",
            balloonContentFooter: "��. ���������, �.47",
            hintContent: "����"            
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

    createPlacemark([54.939711,41.392008], "�������", "��������� �������, ����� �������", 
        '<a class="link3" href="#!/page_places_kasimov">���������</a>', mainMap); 

    createPlacemark([54.229898,39.026372], "������������ �������", "��������� �������, ����� ��������", 
        '<a class="link3" href="#!/page_places_mikhailov">���������</a>', mainMap); 

    createPlacemark([53.82956,39.551388], "���������� ��������", "��������� �������, ����� ������", 
        '<a class="link3" href="#!/page_places_skopin">���������</a>', mainMap); 

    createPlacemark([53.911603,39.733122], "������� ��������", "��������� �������, ���� ������", 
        '<a class="link3" href="#!/page_places_hudekov_homestead">���������</a>', mainMap); 

    createPlacemark([55.058454,41.163554], "������� ���������", "��������� �������, ������� ����-��������", 
        '<a class="link3" href="#!/page_places_batashov_homestead">���������</a>', mainMap); 

    createPlacemark([55.193960,40.165018], "����� ����������� ���������", "��������� �������, ������� �������", 
        '<a class="link3" href="#!/page_places_wooden_arch_mus">���������</a>', mainMap); 

    createPlacemark([55.106963,38.755976], "�������", "���������� �������, ����� �������", 
        '<a class="link3" href="#!/page_places_kolomna">���������</a>', mainMap);     
}
