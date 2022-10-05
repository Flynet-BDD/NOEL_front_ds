export interface Restaurant
{
    id: number;
    nom : string;
    adresse : string;
    listeEval: Evaluation[]
    moyenne : number;
}

export interface Evaluation
{
    id: number;
    nomEvaluateur : string;
    commentaire: string;
    nbrEtoile : number;
}