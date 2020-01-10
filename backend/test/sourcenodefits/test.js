var fits = require('./FITS');
// var file = './FOCx38i0101t_c0f.fits';
 var file = './c2f.fits';
fits.readFile(file, function(err, FITS){
	if(err) return console.error(err);
	//console.log(FITS);
});

