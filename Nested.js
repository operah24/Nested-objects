    //  PART 1       
    var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  function prime(){
      var primeArray = nestedData.innerData.numberData.primeNumbers;
      for(var i = 0; i < primeArray.length; i++){
          console.log(primeArray[i]);
      }
  }
  console.log(prime());

  function even(){
      var evenArray = nestedData.innerData.numberData.fibonnaci;
      for(var i = 0; i< evenArray.length; i++){
          if(evenArray[i] % 2 === 0){
              console.log(evenArray[i]);
          }
      }
  }
  console.log(even());

  var getOrder = nestedData.innerData.order;
  console.log(getOrder[1]);

  console.log(nestedData.innerData.addSnack("Chocolate"));

//   PART 2
  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  function addSpeaker(nameOfSpeaker){
    nestedObject.speakers.push({
      name: nameOfSpeaker
    })
  }
  addSpeaker("John");
  console.log(nestedObject.speakers);

  function addLanguage(nameOfLanguage,helloInTheLanguage) {
        nestedObject.data.languages[nameOfLanguage] = {
            hello:helloInTheLanguage
        
        }
    }
    addLanguage("german", "Hallo");
    console.log(nestedObject.data.languages);

    function addCountry(nameOfTheCountry,capitalOfTheCountry,populationOfTheCountry){
        nestedObject.data.continents.europe.countries[nameOfTheCountry] = {
            capital:capitalOfTheCountry,
            population:populationOfTheCountry
        }
    }
    addCountry("Afghanistan","Kabul",900000);
    console.log(nestedObject.data.continents.europe.countries);
         // PART3
    function rotate(arr, num){
        var amount = num % arr.length;
        for(var i=0; i< amount; i++){
          arr.unshift(arr.pop());
        }
        return arr;
    }
    console.log(rotate([1,2,3], 1));
    console.log(rotate([3,4,5], 2));

        // PART4
    function makeXOGrid(rows,columns){
        var finalArr = []
        var startWithX = true
        for(var i=0; i<rows; i++){
            var newRow = []
            for(var j=0; j<columns; j++){
                if(startWithX){
                    newRow.push("X")
                }
                else {
                    newRow.push("O")
                }
                startWithX = !startWithX
            }
            finalArr.push(newRow)
        }
        return finalArr;
    }
    console.log(makeXOGrid(1,4)); 
    console.log(makeXOGrid(2,5));
    console.log(makeXOGrid(3,2));

    
