const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let penontonMarah = 0;
let penontonTidakMarah = 0;
const promiseOutput = emosi => {
  if (emosi === 'marah') {
    return promiseTheaterIXX().then((nilai) => {
      nilai.forEach((array) => {
        if (array.hasil === 'marah') {
          penontonMarah++;
        } else if (array.hasil === 'tidak marah') {
          penontonTidakMarah++;
        } 
      });
      return penontonMarah
    });
  }
  if (emosi === 'tidak marah') {
    return promiseTheaterVGC().then((nilai) => {
      nilai.forEach((array) => {
        if (array.hasil === 'tidak marah') {
          penontonTidakMarah++;
        } else if (array.hasil === 'marah') {
          penontonMarah++;
        } 
      });
      return penontonMarah
    });
  }
}

module.exports = {
  promiseOutput,
};
