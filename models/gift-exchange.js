module.exports = class GiftExchange {

    randomize(names) {
        let ourNewArray = []
        if (names.length % 2 != 0) {
            throw 'The number of names can not be odd'
        } else {
            var arr1 = names.slice(), // copy array
                arr2 = names.slice(); // copy array again

            arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
            arr2.sort(function() { return 0.5 - Math.random();});

        

            while (arr1.length) {
                
                var name1 = arr1.pop(), // get the last value of arr1
                    name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                    //        ^^ if the first value is the same as name1, 
                    //           get the last value, otherwise get the first

                
                ourNewArray.push([name1, name2])
            }
            
        }
        return ourNewArray
    }
    

    pairs(names) {
        return this.randomize(names)
    }

    traditional(names) {
        let ourArray = this.randomize(names)
        let ourSentece = []
        
        ourArray.forEach((item) => 
            ourSentece.push(item[0] + " is giving a gift to " + item[1])
        )
        console.log(ourSentece)
        return ourSentece
    }

    
}

