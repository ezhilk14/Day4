var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        // console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
        
    }
}

// //output
// Live reload enabled.
// script.js:8 Afghanistan Asia Southern Asia 40218234
// script.js:8 Åland Islands Europe Northern Europe 28875
// script.js:8 Albania Europe Southern Europe 2837743
// script.js:8 Algeria Africa Northern Africa 44700000
// script.js:8 American Samoa Oceania Polynesia 55197
// script.js:8 Andorra Europe Southern Europe 77265
// script.js:8 Angola Africa Middle Africa 32866268
// script.js:8 Anguilla Americas Caribbean 13452
// script.js:8 Antarctica Polar Antarctica 1000
// script.js:8 Antigua and Barbuda Americas Caribbean 97928
// script.js:8 Argentina Americas South America 45376763
// script.js:8 Armenia Asia Western Asia 2963234
// script.js:8 Aruba Americas Caribbean 106766
// script.js:8 Australia Oceania Australia and New Zealand 25687041
// script.js:8 Austria Europe Central Europe 8917205
// script.js:8 Azerbaijan Asia Western Asia 10110116
// script.js:8 Bahamas Americas Caribbean 393248
// script.js:8 Bahrain Asia Western Asia 1701583
// script.js:8 Bangladesh Asia Southern Asia 164689383
// script.js:8 Barbados Americas Caribbean 287371
// script.js:8 Belarus Europe Eastern Europe 9398861
// script.js:8 Belgium Europe Western Europe 11555997
// script.js:8 Belize Americas Central America 397621
// script.js:8 Benin Africa Western Africa 12123198
// script.js:8 Bermuda Americas Northern America 63903
// script.js:8 Bhutan Asia Southern Asia 771612
// script.js:8 Bolivia (Plurinational State of) Americas South America 11673029
// script.js:8 Bonaire, Sint Eustatius and Saba Americas Caribbean 17408
// script.js:8 Bosnia and Herzegovina Europe Southern Europe 3280815
// script.js:8 Botswana Africa Southern Africa 2351625
// script.js:8 Bouvet Island Antarctic Ocean South Antarctic Ocean 0
// script.js:8 Brazil Americas South America 212559409
// script.js:8 British Indian Ocean Territory Africa Eastern Africa 3000
// script.js:8 United States Minor Outlying Islands Americas Northern America 300
// script.js:8 Virgin Islands (British) Americas Caribbean 30237
// script.js:8 Virgin Islands (U.S.) Americas Caribbean 106290
// script.js:8 Brunei Darussalam Asia South-Eastern Asia 437483
// script.js:8 Bulgaria Europe Eastern Europe 6927288
// script.js:8 Burkina Faso Africa Western Africa 20903278
// script.js:8 Burundi Africa Eastern Africa 11890781
// script.js:8 Cambodia Asia South-Eastern Asia 16718971
// script.js:8 Cameroon Africa Middle Africa 26545864
// script.js:8 Canada Americas Northern America 38005238
// script.js:8 Cabo Verde Africa Western Africa 555988
// script.js:8 Cayman Islands Americas Caribbean 65720
// script.js:8 Central African Republic Africa Middle Africa 4829764
// script.js:8 Chad Africa Middle Africa 16425859
// script.js:8 Chile Americas South America 19116209
// script.js:8 China Asia Eastern Asia 1402112000
// script.js:8 Christmas Island Oceania Australia and New Zealand 2072
// script.js:8 Cocos (Keeling) Islands Oceania Australia and New Zealand 550
// script.js:8 Colombia Americas South America 50882884
// script.js:8 Comoros Africa Eastern Africa 869595
// script.js:8 Congo Africa Middle Africa 5518092
// script.js:8 Congo (Democratic Republic of the) Africa Middle Africa 89561404
// script.js:8 Cook Islands Oceania Polynesia 18100
// script.js:8 Costa Rica Americas Central America 5094114
// script.js:8 Croatia Europe Southern Europe 4047200
// script.js:8 Cuba Americas Caribbean 11326616
// script.js:8 Curaçao Americas Caribbean 155014
// script.js:8 Cyprus Europe Southern Europe 1207361
// script.js:8 Czech Republic Europe Central Europe 10698896
// script.js:8 Denmark Europe Northern Europe 5831404
// script.js:8 Djibouti Africa Eastern Africa 988002
// script.js:8 Dominica Americas Caribbean 71991
// script.js:8 Dominican Republic Americas Caribbean 10847904
// script.js:8 Ecuador Americas South America 17643060
// script.js:8 Egypt Africa Northern Africa 102334403
// script.js:8 El Salvador Americas Central America 6486201
// script.js:8 Equatorial Guinea Africa Middle Africa 1402985
// script.js:8 Eritrea Africa Eastern Africa 5352000
// script.js:8 Estonia Europe Northern Europe 1331057
// script.js:8 Ethiopia Africa Eastern Africa 114963583
// script.js:8 Falkland Islands (Malvinas) Americas South America 2563
// script.js:8 Faroe Islands Europe Northern Europe 48865
// script.js:8 Fiji Oceania Melanesia 896444
// script.js:8 Finland Europe Northern Europe 5530719
// script.js:8 France Europe Western Europe 67391582
// script.js:8 French Guiana Americas South America 254541
// script.js:8 French Polynesia Oceania Polynesia 280904
// script.js:8 French Southern Territories Africa Southern Africa 140
// script.js:8 Gabon Africa Middle Africa 2225728
// script.js:8 Gambia Africa Western Africa 2416664
// script.js:8 Georgia Asia Western Asia 3714000
// script.js:8 Germany Europe Central Europe 83240525
// script.js:8 Ghana Africa Western Africa 31072945
// script.js:8 Gibraltar Europe Southern Europe 33691
// script.js:8 Greece Europe Southern Europe 10715549
// script.js:8 Greenland Americas Northern America 56367
// script.js:8 Grenada Americas Caribbean 112519
// script.js:8 Guadeloupe Americas Caribbean 400132
// script.js:8 Guam Oceania Micronesia 168783
// script.js:8 Guatemala Americas Central America 16858333
// script.js:8 Guernsey Europe Northern Europe 62999
// script.js:8 Guinea Africa Western Africa 13132792
// script.js:8 Guinea-Bissau Africa Western Africa 1967998
// script.js:8 Guyana Americas South America 786559
// script.js:8 Haiti Americas Caribbean 11402533
// script.js:8 Heard Island and McDonald Islands Antarctic Antarctic 0
// script.js:8 Vatican City Europe Southern Europe 451
// script.js:8 Honduras Americas Central America 9904608
// script.js:8 Hungary Europe Central Europe 9749763
// script.js:8 Hong Kong Asia Eastern Asia 7481800
// script.js:8 Iceland Europe Northern Europe 366425
// script.js:8 India Asia Southern Asia 1380004385
// script.js:8 Indonesia Asia South-Eastern Asia 273523621
// script.js:8 Ivory Coast Africa Western Africa 26378275
// script.js:8 Iran (Islamic Republic of) Asia Southern Asia 83992953
// script.js:8 Iraq Asia Western Asia 40222503
// script.js:8 Ireland Europe Northern Europe 4994724
// script.js:8 Isle of Man Europe Northern Europe 85032
// script.js:8 Israel Asia Western Asia 9216900
// script.js:8 Italy Europe Southern Europe 59554023
// script.js:8 Jamaica Americas Caribbean 2961161
// script.js:8 Japan Asia Eastern Asia 125836021
// script.js:8 Jersey Europe Northern Europe 100800
// script.js:8 Jordan Asia Western Asia 10203140
// script.js:8 Kazakhstan Asia Central Asia 18754440
// script.js:8 Kenya Africa Eastern Africa 53771300
// script.js:8 Kiribati Oceania Micronesia 119446
// script.js:8 Kuwait Asia Western Asia 4270563
// script.js:8 Kyrgyzstan Asia Central Asia 6591600
// script.js:8 Lao People's Democratic Republic Asia South-Eastern Asia 7275556
// script.js:8 Latvia Europe Northern Europe 1901548
// script.js:8 Lebanon Asia Western Asia 6825442
// script.js:8 Lesotho Africa Southern Africa 2142252
// script.js:8 Liberia Africa Western Africa 5057677
// script.js:8 Libya Africa Northern Africa 6871287
// script.js:8 Liechtenstein Europe Central Europe 38137
// script.js:8 Lithuania Europe Northern Europe 2794700
// script.js:8 Luxembourg Europe Western Europe 632275
// script.js:8 Macao Asia Eastern Asia 649342
// script.js:8 North Macedonia Europe Southern Europe 2083380
// script.js:8 Madagascar Africa Eastern Africa 27691019
// script.js:8 Malawi Africa Eastern Africa 19129955
// script.js:8 Malaysia Asia South-Eastern Asia 32365998
// script.js:8 Maldives Asia Southern Asia 540542
// script.js:8 Mali Africa Western Africa 20250834
// script.js:8 Malta Europe Southern Europe 525285
// script.js:8 Marshall Islands Oceania Micronesia 59194
// script.js:8 Martinique Americas Caribbean 378243
// script.js:8 Mauritania Africa Western Africa 4649660
// script.js:8 Mauritius Africa Eastern Africa 1265740
// script.js:8 Mayotte Africa Eastern Africa 226915
// script.js:8 Mexico Americas North America 128932753
// script.js:8 Micronesia (Federated States of) Oceania Micronesia 115021
// script.js:8 Moldova (Republic of) Europe Eastern Europe 2617820
// script.js:8 Monaco Europe Western Europe 39244
// script.js:8 Mongolia Asia Eastern Asia 3278292
// script.js:8 Montenegro Europe Southern Europe 621718
// script.js:8 Montserrat Americas Caribbean 4922
// script.js:8 Morocco Africa Northern Africa 36910558
// script.js:8 Mozambique Africa Eastern Africa 31255435
// script.js:8 Myanmar Asia South-Eastern Asia 54409794
// script.js:8 Namibia Africa Southern Africa 2540916
// script.js:8 Nauru Oceania Micronesia 10834
// script.js:8 Nepal Asia Southern Asia 29136808
// script.js:8 Netherlands Europe Western Europe 17441139
// script.js:8 New Caledonia Oceania Melanesia 271960
// script.js:8 New Zealand Oceania Australia and New Zealand 5084300
// script.js:8 Nicaragua Americas Central America 6624554
// script.js:8 Niger Africa Western Africa 24206636
// script.js:8 Nigeria Africa Western Africa 206139587
// script.js:8 Niue Oceania Polynesia 1470
// script.js:8 Norfolk Island Oceania Australia and New Zealand 2302
// script.js:8 Korea (Democratic People's Republic of) Asia Eastern Asia 25778815
// script.js:8 Northern Mariana Islands Oceania Micronesia 57557
// script.js:8 Norway Europe Northern Europe 5379475
// script.js:8 Oman Asia Western Asia 5106622
// script.js:8 Pakistan Asia Southern Asia 220892331
// script.js:8 Palau Oceania Micronesia 18092
// script.js:8 Palestine, State of Asia Western Asia 4803269
// script.js:8 Panama Americas Central America 4314768
// script.js:8 Papua New Guinea Oceania Melanesia 8947027
// script.js:8 Paraguay Americas South America 7132530
// script.js:8 Peru Americas South America 32971846
// script.js:8 Philippines Asia South-Eastern Asia 109581085
// script.js:8 Pitcairn Oceania Polynesia 56
// script.js:8 Poland Europe Central Europe 37950802
// script.js:8 Portugal Europe Southern Europe 10305564
// script.js:8 Puerto Rico Americas Caribbean 3194034
// script.js:8 Qatar Asia Western Asia 2881060
// script.js:8 Republic of Kosovo Europe Eastern Europe 1775378
// script.js:8 Réunion Africa Eastern Africa 840974
// script.js:8 Romania Europe Eastern Europe 19286123
// script.js:8 Russian Federation Europe Eastern Europe 144104080
// script.js:8 Rwanda Africa Eastern Africa 12952209
// script.js:8 Saint Barthélemy Americas Caribbean 9417
// script.js:8 Saint Helena, Ascension and Tristan da Cunha Africa Western Africa 4255
// script.js:8 Saint Kitts and Nevis Americas Caribbean 53192
// script.js:8 Saint Lucia Americas Caribbean 183629
// script.js:8 Saint Martin (French part) Americas Caribbean 38659
// script.js:8 Saint Pierre and Miquelon Americas Northern America 6069
// script.js:8 Saint Vincent and the Grenadines Americas Caribbean 110947
// script.js:8 Samoa Oceania Polynesia 198410
// script.js:8 San Marino Europe Southern Europe 33938
// script.js:8 Sao Tome and Principe Africa Middle Africa 219161
// script.js:8 Saudi Arabia Asia Western Asia 34813867
// script.js:8 Senegal Africa Western Africa 16743930
// script.js:8 Serbia Europe Southern Europe 6908224
// script.js:8 Seychelles Africa Eastern Africa 98462
// script.js:8 Sierra Leone Africa Western Africa 7976985
// script.js:8 Singapore Asia South-Eastern Asia 5685807
// script.js:8 Sint Maarten (Dutch part) Americas Caribbean 40812
// script.js:8 Slovakia Europe Central Europe 5458827
// script.js:8 Slovenia Europe Southern Europe 2100126
// script.js:8 Solomon Islands Oceania Melanesia 686878
// script.js:8 Somalia Africa Eastern Africa 15893219
// script.js:8 South Africa Africa Southern Africa 59308690
// script.js:8 South Georgia and the South Sandwich Islands Americas South America 30
// script.js:8 Korea (Republic of) Asia Eastern Asia 51780579
// script.js:8 Spain Europe Southern Europe 47351567
// script.js:8 Sri Lanka Asia Southern Asia 21919000
// script.js:8 Sudan Africa Northern Africa 43849269
// script.js:8 South Sudan Africa Middle Africa 11193729
// script.js:8 Suriname Americas South America 586634
// script.js:8 Svalbard and Jan Mayen Europe Northern Europe 2562
// script.js:8 Swaziland Africa Southern Africa 1160164
// script.js:8 Sweden Europe Northern Europe 10353442
// script.js:8 Switzerland Europe Central Europe 8636896
// script.js:8 Syrian Arab Republic Asia Western Asia 17500657
// script.js:8 Taiwan Asia Eastern Asia 23503349
// script.js:8 Tajikistan Asia Central Asia 9537642
// script.js:8 Tanzania, United Republic of Africa Eastern Africa 59734213
// script.js:8 Thailand Asia South-Eastern Asia 69799978
// script.js:8 Timor-Leste Asia South-Eastern Asia 1318442
// script.js:8 Togo Africa Western Africa 8278737
// script.js:8 Tokelau Oceania Polynesia 1411
// script.js:8 Tonga Oceania Polynesia 105697
// script.js:8 Trinidad and Tobago Americas Caribbean 1399491
// script.js:8 Tunisia Africa Northern Africa 11818618
// script.js:8 Turkey Asia Western Asia 84339067
// script.js:8 Turkmenistan Asia Central Asia 6031187
// script.js:8 Turks and Caicos Islands Americas Caribbean 38718
// script.js:8 Tuvalu Oceania Polynesia 11792
// script.js:8 Uganda Africa Eastern Africa 45741000
// script.js:8 Ukraine Europe Eastern Europe 44134693
// script.js:8 United Arab Emirates Asia Western Asia 9890400
// script.js:8 United Kingdom of Great Britain and Northern Ireland Europe Northern Europe 67215293
// script.js:8 United States of America Americas Northern America 329484123
// script.js:8 Uruguay Americas South America 3473727
// script.js:8 Uzbekistan Asia Central Asia 34232050
// script.js:8 Vanuatu Oceania Melanesia 307150
// script.js:8 Venezuela (Bolivarian Republic of) Americas South America 28435943
// script.js:8 Vietnam Asia South-Eastern Asia 97338583
// script.js:8 Wallis and Futuna Oceania Polynesia 11750
// script.js:8 Western Sahara Africa Northern Africa 510713
// script.js:8 Yemen Asia Western Asia 29825968
// script.js:8 Zambia Africa Eastern Africa 18383956
// script.js:8 Zimbabwe Africa Southern Africa 14862927