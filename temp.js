var testMark = {
	descr: "захоронение",
	x: 0.1,
	y: -0.5,
	persons: [{
		id: 152,
		fio: "Петров Иван Борисович",
		dbth: '1915',
		ddth: '1950',
		descr: 'Помним, любим, скорбим', 
		links: ['/articles/ivanov']
	}],
	block: 1,
	line: 2,
	place: '3',
	subplace: 'б', 
	imgs: ['/imgs/1.jpg'],
	links: ['/articles/ivanov'],
	markImg: '/imgs/placemark.png'
	featured: true
}

var templeMark = {
	descr: "Храм Праведного Лазаря",
	x: 0.3,
	y: -0.2,
	block: 1,
	line: 2,
	place: '3',
	subplace: 'б', 
	imgs: ['/imgs/2.jpg'],
	links: ['/articles/ivanov'],
	markImg: '/imgs/templemark.png'
}

	// var Burial = mongoose.model('Burial');
	// var testData = new Burial(testMark);
	// testData.save();
	// var anotherData = new Burial(templeMark);
	// anotherData.save();