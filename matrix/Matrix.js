export class Matrix {
    constructor(argument){
        this.rows=[];
        this.columns=[];
        let matrixRows=argument.split("\n");

        for(let i=0;i<matrixRows.length;i++){
            this.rows[i]=matrixRows[i].split(" ");
        }
        for(let i =0;i<this.rows.length;i++) {
            for (let j = 0; j < this.rows[i].length; j++) {
                this.rows[i][j] = parseInt(this.rows[i][j], 10);
            }
        }
        for(let i =0;i<matrixRows.length;i++){
             this.columns[i] = [];
            for(let j=0;j<matrixRows.length;j++){
                this.columns[i][j]=parseInt(this.rows[j][i],10);
            }
        }
    }


}