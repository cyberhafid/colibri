var fits = require('./FITS');
var file = './FOCx38i0101t_c0f.fits';
fits.readFile(file, function(err, FITS){
	if(err) return console.error(err);
	console.log(FITS.HDU.primary);
});

