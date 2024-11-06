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
        link: "/controleur/home",
        icon: DashboardIcon.src
    },

    {
        label: "Finances",
        link: "/controleur/finances",
        icon: FinanceIcon.src
    },
    {
        label: "Produits",
        link: "/controleur/produits",
        icon: ProduitIcon.src
    },
    {
        label: "Cagnottes",
        link: "/controleur/cagnottes",
        icon: CagnotteIcon.src
    },
    {
        label: "Factures",
        link: "/controleur/factures",
        icon: InvoiceIcon.src
    },
    
]

export { navLink };