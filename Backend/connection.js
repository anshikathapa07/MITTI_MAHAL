const mongoose = require('mongoose');
const url = "mongodb+srv://Anshikathapa:anshika2507@cluster0.n3wsfd6.mongodb.net/Mittimahal?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('connected to the database')
}).catch((err) => {
     console.log(err)
});
module.exports = mongoose;
