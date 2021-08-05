const helpers = {}

helpers.randomName = () => {
     const all = 'abcdefghijklmnopqrstuvwxyz0123456789!#%&/()=?+'
     let randomName = 0
     for (let i = 0; i < 10 ; i++) {
          // const element = array[i];
         randomName += all.charAt(Math.floor(Math.random() * all.length))
          
     }
  return randomName
}

helpers.time = () => {
     const time = new Date().getTime();

     return time
}

module.exports = helpers