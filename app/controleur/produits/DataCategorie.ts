import { ICategorie } from "@/Interfaces/ICategorie"
import { UserList } from "@/app/admin/utilisateurs/DataUtilisateur"


const CategorieList: ICategorie[] = [
    {
        label: "Appariel électronique",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem doloremque cum dolor eveniet harum commodi nisi, eaque impedit sequi, provident non aperiam pariatur similique magni quibusdam veniam repellendus. Debitis, suscipit?",
        userId: "1",
        user: UserList[0]
    },
    {
        label: "Appariel Managé",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem doloremque cum dolor eveniet harum commodi nisi, eaque impedit sequi, provident non aperiam pariatur similique magni quibusdam veniam repellendus. Debitis, suscipit?",
        userId: "1",
        user: UserList[0]
    },
    {
        label: "Salon",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem doloremque cum dolor eveniet harum commodi nisi, eaque impedit sequi, provident non aperiam pariatur similique magni quibusdam veniam repellendus. Debitis, suscipit?",
        userId: "2",
        user: UserList[2]
    }
]

export default CategorieList