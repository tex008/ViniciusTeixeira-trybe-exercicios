function encode (string) {

    let encodedMessage  = "";

      for (index = 0; index < string.length; index +=1) {
        if (string[index] === 'a') {
          encodedMessage  += '1';
        } else if (string[index] === 'e') {
          encodedMessage  += '2';
        } else if (string[index] === 'i') {
          encodedMessage += '3';
        } else if (string[index] === 'o') {
          encodedMessage  += '4';
        } else if (string[index] === 'u') {
          encodedMessage  += '5';
        } else {
          encodedMessage  += string[index]
        }
      } 
    return encodedMessage ;
}



function decode (string) {

  let decriptedMessage = "";

    for (index = 0; index < string.length; index +=1) {
      if (string[index] === '1') {
        decriptedMessage += 'a'
      } else if (string[index] === '2') {
        decriptedMessage += 'e'
      } else if (string[index] === '3') {
        decriptedMessage += 'i'
      } else if (string[index] === '4') {
        decriptedMessage += 'o'
      } else if (string[index] === '5') {
        decriptedMessage += 'u'
      } else {
        decriptedMessage += string[index];
      }
    }

  return decriptedMessage;

}

const functions = { encode, decode };
module.exports = functions;