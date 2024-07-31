var purchase1 ={
    shoes:100,
    stataTax:1.2,
    totalPrice : function(){
        var calculation = purchase1.shoes * purchase1.stataTax;
        console.log("Total price ", calculation);
    }
}

// call 
purchase1.totalPrice() ; // 120

var purchase2 ={
    shoes:50,
    stataTax:1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stataTax;
        console.log("Total price ", calculation);
    }
}

// call 
purchase2.totalPrice() ; // 60

var purchase3 ={
    shoes:80,
    stataTax:1.2,
    totalPrice : function(){
        return (calculation = this.shoes * this.stataTax);
    }
}

// call 
console.log("total price ", purchase3.totalPrice()) ; // 