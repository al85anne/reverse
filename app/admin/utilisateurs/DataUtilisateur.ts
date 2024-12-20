import { IUtilisateur } from "@/Interfaces/UserInterface"

const UserList : IUtilisateur [] = [
    {
        id: "1",
        nom: "John",
        prenom: "Doe",
        email: "johnDoe@gmail.com",
        superviseurId: null,
        loggin: "@john52",
        role: "CLIENT",
        telephone: "695617778",
        online: false,
        status: false,
        pays: "FRANCE",
        entreprise: null,
        motDePasse: "",
        isLock: true,
        image_profile_url: "",
        created_at: "",
        updated_at: "",
        access_statistic: false,
        access_fournisseur: false,
        access_inventaire: false,
        access_remboursement: false,
        access_article_depense: false,
        access_portefeuille_mobile: false,
        access_reserve: false,
    },
    {
        id: "1",
        nom: "Paul",
        prenom: "Kabis",
        email: "infos@politech.com",
        superviseurId: null,
        loggin: "@paulKabis5",
        role: "PROFESSIONNEL",
        telephone: "632054785",
        online: false,
        status: true,
        pays: "FRANCE",
        entreprise: "Politech",
        motDePasse: "",
        image_profile_url: "",
        created_at: "",
        isLock: false,
        updated_at: "",
        access_statistic: true,
        access_fournisseur: true,
        access_inventaire: true,
        access_remboursement: true,
        access_article_depense: false,
        access_portefeuille_mobile: false,
        access_reserve: false,
    }
]


export { UserList }