var virtualPet = {
    sleepy: true,
    name:'bruno',
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
console.log(virtualPet.name); // bruno

