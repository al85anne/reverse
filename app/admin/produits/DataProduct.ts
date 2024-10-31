import ProduitImage from "@/public/images/WFHV9014S-web2.webp";
import { UserList } from "../utilisateurs/DataUtilisateur";
import { IProduct } from "@/Interfaces/IProduct";
import CategorieList from "./DataCategorie";
export const DataProductList: IProduct[] = [
    {
        id: "1",
        nom: "Machine à lavée",
        prix_achat: 1500,
        prix_promotion: 0,
        prix_vente: 1600,
        image_url: ProduitImage.src,
        fournisseur: 1,
        quantite_alert: 5,
        promotion: false,
        quantite_achete: 2,
        quantite_perdue: 0,
        quantite_restante: 2,
        description: `   This sofa is perfect for modern tropical spaces, baroque inspired
                                                spaces, earthy toned spaces and for people who love a chic design with a
                                                sprinkle of vintage design.`,
        unite: 1,
        userId: "1",
        user: UserList[0],
        categorieId: "2",
        categorie: CategorieList[1],
        code_barre: "",
        commerceId: "",
        peremption: "",
        pertes: "Non",
        ligneCmd: [],
        reference: "REF057",
        created_at: "2024-08-20 20:30",
        updated_at: null,
        deleted_at: null
    }
]