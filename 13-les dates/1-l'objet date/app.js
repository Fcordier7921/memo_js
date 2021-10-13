let datePresqice = new Date(2020, 10, 10, 9, 39);
console.log(datePresqice);
console.log(datePresqice.getFullYear(), "l'anné");
console.log(datePresqice.getDate(), "le jour de la semaine en commencent par dimanche");
console.log(datePresqice.getDate(), "le jour d'aujourd'huit");
console.log(datePresqice.getUTCDate(), "le jour d'aujourd'huit en utc");


datePresqice.setFullYear(2750);
console.log(datePresqice.getFullYear(), "l'anné modifier");