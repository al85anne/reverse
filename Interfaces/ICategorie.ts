import { IUtilisateur } from "./UserInterface";

export interface ICategorie {
    label: string,
    description: string,
    userId: string,
    user: IUtilisateur | null
}