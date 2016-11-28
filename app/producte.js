//DOC: http://stackoverflow.com/questions/16052664/create-injectable-class-constructor
app.factory('producte', function () {
    return function (nm, pc, pv, t, ct, u, v, c) {
        this.id = -1;
        this.nom = nm;
        this.preuCompra = pc;
        this.preuVenda = pv;
        this.tipus = t;
        this.categoria = ct;
        this.udm = u;
        this.vendre = v;
        this.compra = c;
        //getters
        this.getID = function () {
            return this.id;
        };
        this.getNM = function () {
            return this.nom;
        };
        this.getPC = function () {
            return this.preuCompra;
        };
        this.getPV = function () {
            return this.preuVenda;
        };
        this.getTP = function () {
            return this.tipus;
        };
        this.getCT = function () {
            return this.categoria;
        };
        this.getUM = function () {
            return this.udm;
        };
        this.getVD = function () {
            return this.vendre;
        };
        this.getCM = function () {
            return this.compra;
        };
        //setters
        this.setID = function (i) {
            this.id = i;
        };
        this.setNM = function (n) {
            this.nom = n;
        };
        this.setPC = function (p) {
            this.preuCompra = p;
        };
        this.setPV = function (p) {
            this.preuVenda = p;
        };
        this.setTP = function (t) {
            this.tipus = t;
        };
        this.setCT = function (c) {
            this.categoria = c;
        };
        this.setUM = function (u) {
            this.udm = u;
        };
        this.setVD = function (v) {
            this.vendre = v;
        };
        this.setCM = function (c) {
            this.compra = c;
        };
    };
});
