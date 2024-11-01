import { IUtilisateur } from "./UserInterface"

export interface ICagnotte {
    id: string,
    titre: string,
    description: string,
    objectif: string,
    financier: string | null,
    status: boolean,
    initiateur: IUtilisateur,
    isLock: boolean,
    initiateurId: string,
    created_at: string | null,
    updated_at: string | null,
}