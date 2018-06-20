"use strict";
const optionDefinitions = [
  { name: 'firstname', alias: 'f', type: String, multiple: true, defaultOption: true },
  { name: 'lastname', alias: 'l', type: String, multiple: true },
  { name: 'id', alias: 'i', type: Number, multiple: false },
  { name: 'birthday', alias: 'b', type: Number}
]
var soap = require('strong-soap').soap;
const commandLineArgs = require('command-line-args')
const args = commandLineArgs(optionDefinitions)

var url = 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?wsdl';


var requestArgs = {
    TCKimlikNo: args.id,
    Ad: args.firstname.join(' ').toString().toUpperCase(),
    Soyad: args.lastname.toString().toUpperCase(),
    DogumYili: args.birthday
};

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['TCKimlikNoDogrula'];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //'result' is the response body
    if(result.hasOwnProperty("TCKimlikNoDogrulaResult"))
      console.log("ID Verification Status = " + result.TCKimlikNoDogrulaResult.toString().toUpperCase())
    else
      console.log("Something went wrong with the webservice...")
  });
});