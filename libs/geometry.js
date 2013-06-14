//flatten konvertiert eine 2D-Matrix in ein 1D-Feld
Matrix.prototype.flatten = function (){
    var result = [];
    if (this.elements.length == 0)
        return [];


    for (var j = 0; j < this.elements[0].length; j++)
        for (var i = 0; i < this.elements.length; i++)
            result.push(this.elements[i][j]);
    return result;
};

Matrix.prototype.ensure4x4 = function(){
    if (this.elements.length == 4 &&
        this.elements[0].length == 4)
        return this;

    if (this.elements.length > 4 ||
        this.elements[0].length > 4)
        return null;

    for (var i = 0; i < this.elements.length; i++) 	{
        for (var j = this.elements[i].length; j < 4; j++) {
            if (i == j)
                this.elements[i].push(1);
            else
                this.elements[i].push(0);
        }
    }

    for (var i = this.elements.length; i < 4; i++) 	{
        if (i == 0)
            this.elements.push([1, 0, 0, 0]);
        else if (i == 1)
            this.elements.push([0, 1, 0, 0]);
        else if (i == 2)
            this.elements.push([0, 0, 1, 0]);
        else if (i == 3)
            this.elements.push([0, 0, 0, 1]);
    }

    return this;
};

//function create3DTranslationMatrix(v) konvertiert einen Vektor in eine Translationsmatrix
function create3DTranslationMatrix(v){
	if (v.elements.length != 3)  {
		throw "Invalid vector length";
	}
	var Mtrans = Matrix.I(4); //Einheitsmatrix anlegen
	Mtrans.elements[0][3] = v.elements[0];
	Mtrans.elements[1][3] = v.elements[1];
	Mtrans.elements[2][3] = v.elements[2];
	return(Mtrans);
};

function create3DRotationMatrix(angle,v){
	if(v.elements.length != 3)  {
		throw "Invalid vector length";
	}
	var Mrot = Matrix.I(4); //Einheitsmatrix anlegen
	Mrot.elements[0][3] = v.elements[0];
	Mrot.elements[1][3] = v.elements[1];
	Mrot.elements[2][3] = v.elements[2];
	return(Mrot);
};

