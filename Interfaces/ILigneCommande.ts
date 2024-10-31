import { IProduct } from "./IProduct"
import { IUtilisateur } from "./UserInterface"

export interface ILigneCmd {
    id: string,
    produit: IProduct,
    commande: null,
    produitId: string,
    commandeId: string,
    created_at: string,
    updated_at: string,
    User: IUtilisateur,
    userId: string,
}