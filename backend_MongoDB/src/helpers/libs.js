const helpers = {}

helpers.randomName = () => {
     const all = 'abcdefghijklmnopqrstuvwxyz0123456789'
     let randomName = 0
     for (let i = 0; i < 7 ; i++) {
          // const element = array[i];
         randomName += all.charAt(Math.floor(Math.random() * all.length))
          
     }
  return randomName
}
module.exports = helpers