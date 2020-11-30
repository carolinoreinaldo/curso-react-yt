data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  //filter
  let dogsFilter = data.filter((animal) => {
    return animal.type === 'cat';
  });
  console.log("filter")
  console.log(dogsFilter);

  //map
  let dogsMap = data.map((animal) => {
    return animal.age *= 7;
  });

  console.log("maps")
  console.log(dogsMap);

  //vai acumulando o valor em sum
  let calcAge = data.reduce((sum, animal) => {
    return sum + animal.age;
  }, 0);

  
  console.log("reduce")
  console.log(calcAge);
