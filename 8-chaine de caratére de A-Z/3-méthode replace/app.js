console.log('replace :');
const str = 'Lorem ipsum dolor sit amet. Tutu 165165165';



console.log(`replace =>`, str.replace(/o/g, 'zzz')); //replace replace un element, en preimer argument il prend un regex et en deuxieme argument ce qui prend la place. le regex selectionne toutles o er le replace par ZZZ