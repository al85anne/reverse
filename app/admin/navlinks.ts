import DashboardIcon from "@/public/icones/icons8-dashboard-48.png";
import ArchiveIcon from "@/public/icones/icons8-archive-60.png";
import FinanceIcon from "@/public/icones/icons8-bitcoin-accepted-48.png"
import ProduitIcon from "@/public/icones/icons8-product-48.png"
import CagnotteIcon from "@/public/icones/icons8-piggy-bank-94.png";
import InvoiceIcon from "@/public/icones/icons8-invoice-48.png";
import SettingIcon from "@/public/icones/icons8-setting-48.png";


const navLink = [
    {
        label: "Tableau de bord",
        link: "/admin/home",
        icon: DashboardIcon.src
    },
    {
        label: "Utilisateurs",
        link: "/admin/utilisateurs",
        icon: ArchiveIcon.src
    },
    {
        label: "Finances",
        link: "/admin/finances",
        icon: FinanceIcon.src
    },
    {
        label: "Produits",
        link: "/admin/produits",
        icon: ProduitIcon.src
    },
    {
        label: "Cagnottes",
        link: "/admin/cagnottes",
        icon: CagnotteIcon.src
    },
    {
        label: "Factures",
        link: "/admin/factures",
        icon: InvoiceIcon.src
    },
    {
        label: "Paramètres",
        link: "/admin/parametres",
        icon: SettingIcon.src
    }
]

export { navLink };