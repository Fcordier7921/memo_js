const tableau = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

tableau.splice(0, 2); //enléve des élément d'un tableau, premier élément est ou l'on commence dans le tabeau et le deuxiémen et le noblre d'élément a surpimer et le troisiéme él'élément a rajouter
console.log(`splice exemple de supression: `, tableau);
tableau.splice(5, 0, 'z');
console.log(`splice exemple de rajout: `, tableau);
console.log(`slice : `, tableau.slice(2, 4)); //retoune un nouveau tableau qui commence de l'index 2 a 4 non inclue et retoune un tableau