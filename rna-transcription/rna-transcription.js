export const DNAtoRNA=[['G','C'],['C','G'],['T','A'],['A','U']];
var myMap= new Map(DNAtoRNA);

export const toRna = (dna) =>{

    let rna_seq="";
    for(let i=0;i<dna.length;i++) {

        rna_seq=rna_seq+myMap.get(dna[i]);
    }
    return rna_seq;
};
