var myMap;

function init () {


    // Создаем проекцию для декартовой системы координат.
    var myProjection = new ymaps.projection.Cartesian([
            // Определяем границы области отображения в декартовых координатах.
            [-1, -1],
            [1, 1]
        ]),

    // Создадим собственный слой карты:
        MyLayer = function () {
            return new ymaps.Layer(
                // Зададим функцию, преобразующую номер тайла
                // и уровень масштабировая в URL тайла на сервере.
                function (tile, zoom) {
                    return "/map/tiles/" + zoom + "/" + tile[0] + "/" + tile[1] + ".png";
                },
                {notFoundTile:"/map/tiles/empty.png"}
            );
        };

    // Добавим конструктор слоя в хранилище слоёв под ключом my#layer.
    ymaps.layer.storage.add('my#layer', MyLayer);
    // Создадим новый тип карты, состоящий только из нашего слоя тайлов,
    // и добавим его в хранилище типов карты под ключом my#type.
    ymaps.mapType.storage.add('my#type', new ymaps.MapType(
        'Схема',
        ['my#layer']
    ));

    // Создадим карту в заданной системе координат.
    myMap = new ymaps.Map('map', {
        center:[0.3, -0.2],
        zoom:2,
        type:'my#type'
    }, {
        maxZoom:5, // Максимальный коэффициент масштабирования для заданной проекции.
        minZoom:0, // Минимальный коэффициент масштабирования.
        projection:myProjection
    });

    // Добавим миникарту и кнопку изменения масштаба на нашу карту.
    myMap.controls
        .add(new ymaps.control.MiniMap({
            type:'my#type'
        }))
        .add('smallZoomControl', { right:5, top:5 });
}

