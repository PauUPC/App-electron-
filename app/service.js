//doc: http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
//doc: http://blog.mgechev.com/2013/08/07/aspect-oriented-programming-with-javascript-angularjs/
app.service('productService', function (producte) {
    this.array = [];
    this.id = 0;
    this.addProducte = function (p) {
        p.setID(this.id);
        this.array.push(p);
        this.id++;
    };
    this.removeProducte = function (index) {
        if (index != -1) this.array.splice(index, 1);
    };
    this.getProductes = function () {
        return this.array;
    };
    this.getProdcute = function (index) {
        return this.array[index];
    };
    this.setProdcute = function (p, index) {
        this.array[index] = p;
    };
    this.IndexOf = function (search) {
        for (var i = 0, len = this.array.length; i < len; i++) {
            //            console.log("array id" + this.array[i].getID() + "id" + search + "index" + i);
            if (this.array[i].getID() === search) return i;
        }
        return -1;
    }
});
app.service('sharedProduct', function () {
    this.producteID = -1;
    this.getProducteID = function () {
        return this.producteID;
    };
    this.setProducteID = function (p) {
        this.producteID = p;
    };
});
