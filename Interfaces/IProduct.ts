import { ICategorie } from "./ICategorie"
import { ILigneCmd } from "./ILigneCommande"
import { IUtilisateur } from "./UserInterface"

export interface IProduct {
    id: string,
    nom: string,
    prix_achat: number,
    prix_promotion: number,
    prix_vente: number,
    image_url: string,
    fournisseur: number,
    quantite_alert: number,
    description: string,
    promotion: boolean,
    quantite_achete: number,
    quantite_perdue: number,
    quantite_restante: number,
    unite: number,
    userId: string,
    user: IUtilisateur,
    categorieId: string,
    categorie: ICategorie,
    code_barre: string,
    commerceId: string,
    peremption: string | null,
    pertes: string | null,
    reference: string,
    created_at: string,
    updated_at: string | null,
    deleted_at: string | null,
    ligneCmd: ILigneCmd[] 
}