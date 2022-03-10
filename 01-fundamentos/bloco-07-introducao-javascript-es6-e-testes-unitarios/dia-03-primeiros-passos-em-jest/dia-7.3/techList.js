const techList = (arrayTech, name) => {

  if ( arrayTech.length === 0) return 'Vazio!';

  const sortedArray = arrayTech.sort();
  const technologyArray = [];

  for (index in sortedArray) {
    technologyArray.push({
      tech: sortedArray[index],
      name: name,
    });
  };

  return technologyArray;
  
}

module.exports = techList;