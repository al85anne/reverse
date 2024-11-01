import { ICagnotte } from "@/Interfaces/ICagnotte";
import { UserList } from "../utilisateurs/DataUtilisateur";

export const DataCagnotte : ICagnotte[] = [{
    id: "1",
    titre: "Mariage de Loïsse & Alberto",
    description: "Cagnotte pour le mariage de Loïsse et Alberto",
    objectif: "",
    financier: "1 500 €",
    initiateur: UserList[0],
    status: true,
    isLock: false,
    initiateurId: "1",
    created_at: "2024-06-20 15:22",
    updated_at: "",
}]