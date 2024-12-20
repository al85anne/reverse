export interface IUtilisateur {
    id: string,
    nom: string,
    prenom: string,
    email: string,
    superviseurId: string | null,
    loggin: string,
    role: string,
    telephone: string,
    online: boolean,
    status: boolean,
    isLock: boolean,
    pays: string,
    entreprise: string | null,
    motDePasse: string,
    image_profile_url: string,
    created_at: string,
    updated_at: string,
    access_statistic: boolean,
    access_fournisseur: boolean,
    access_inventaire: boolean,
    access_remboursement: boolean,
    access_article_depense: boolean,
    access_portefeuille_mobile: boolean,
    access_reserve: boolean,
}