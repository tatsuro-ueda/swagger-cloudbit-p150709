'use strict';

var url = require('url');


var Input = require('./InputService');


module.exports.inputGet = function inputGet (req, res, next) {
  var tHERMOCLOUDBITDEVICEID = req.swagger.params['THERMO_CLOUDBIT_DEVICE_ID'].value;
  var tHERMOCLOUDBITACCESSTOKEN = req.swagger.params['THERMO_CLOUDBIT_ACCESS_TOKEN'].value;
  

  var result = Input.inputGet(tHERMOCLOUDBITDEVICEID, tHERMOCLOUDBITACCESSTOKEN);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
