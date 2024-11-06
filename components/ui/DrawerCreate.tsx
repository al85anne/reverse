"use client"
import { IProduct } from "@/Interfaces/IProduct";
import { IUtilisateur } from "@/Interfaces/UserInterface";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Select,
    Box,
    Switch,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack,
    Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DrawerCreateUser = (props: { open: boolean, onClose: (value: boolean) => void; onSubmit: (value: IUtilisateur) => void }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nom, setNom] = useState<string>("");
    const [prenom, setPrenom] = useState<string>("");
    const [loggin, setLoggin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [pays, setPays] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [entreprise, setEntreprise] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [accesInv, setAccesInv] = useState<boolean>(false);
    const [accesStat, setAccesStat] = useState<boolean>(false);
    const [accesFou, setAccesFou] = useState<boolean>(false);
    const [accesRem, setAccesRem] = useState<boolean>(false);
    const [accesArt, setAccesArt] = useState<boolean>(false);
    const [accesPor, setAccesPor] = useState<boolean>(false);
    // const [accesRes, setAccesRes] = useState<boolean>(false);
    const nomError = (nom.trim() === "" && nom.length > 0);
    const prenomError = (prenom.trim() === "" && nom.length > 0);
    const logginError = (loggin.trim() === "" && nom.length > 0);
    const emailError = (email.trim() === "" && nom.length > 0);
    const telError = (tel.trim() === "" && nom.length > 0);
    const paysError = (pays.trim() === "" && nom.length > 0);
    const roleError = (role.trim() === "" && nom.length > 0);
    const passwordError = (password.trim() === "" && nom.length > 0);

    useEffect(() => {
        if (props.open) {
            onOpen();
        }
    })

    // const onSubmit = () => {
    //     if (nom != "") {

    //     }
    // }
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={() => { onClose(); props.onClose(false) }}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Créer un compte utilisateur</DrawerHeader>
                <DrawerBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={nomError} isRequired>
                            <FormLabel>Nom</FormLabel>
                            <Input value={nom} onChange={(e) => setNom(e.target.value)} type='text' />
                            {!nomError ? (
                                <FormHelperText>
                                    Entrer le nom de l&apos;utilisateur
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Le Nom est requis.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={prenomError} isRequired>
                            <FormLabel>Prénom</FormLabel>
                            <Input type='text' value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            {!prenomError ? (
                                <FormHelperText>
                                    Entrer le prénom de l&apos;utilisateur
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Le prénom est requis.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Loggin</FormLabel>
                            <Input type='text' value={loggin} onChange={(e) => setLoggin(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Téléphone</FormLabel>
                            <Input type='tel' value={tel} onChange={(e) => setTel(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Pays</FormLabel>
                            <Select value={pays} onChange={(e) => setPays(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Role</FormLabel>
                            <Select value={role} onChange={(e) => setRole(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl >
                            <FormLabel>Nom de votre entreprise</FormLabel>
                            <Input value={entreprise} onChange={(e) => setEntreprise(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl mt={3} display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-statistic' mb='0'>
                                Accès statistic
                            </FormLabel>
                            <Switch id='access-statistic' isChecked={accesStat} onChange={(e) => setAccesStat(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' justifyContent={"space-between"} alignItems='center'>
                            <FormLabel htmlFor='access-fournisseur' mb='0'>
                                Accès fournisseur
                            </FormLabel>
                            <Switch id='access-fournisseur' isChecked={accesFou} onChange={(e) => setAccesFou(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-inventaire' mb='0'>
                                Accès inventaire
                            </FormLabel>
                            <Switch id='access-inventaire' isChecked={accesInv} onChange={(e) => setAccesInv(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-remboursement' mb='0'>
                                Accès remboursement
                            </FormLabel>
                            <Switch id='access-remboursement' isChecked={accesRem} onChange={(e) => setAccesRem(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-art-depense' mb='0'>
                                Déclarer Article & Dépense
                            </FormLabel>
                            <Switch id='access-art-depense' isChecked={accesArt} onChange={(e) => setAccesArt(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-portefeuille-mobile' mb='0'>
                                Accès portefeuille mobile
                            </FormLabel>
                            <Switch id='access-portefeuille-mobile' isChecked={accesPor} onChange={(e) => setAccesPor(e.target.checked)} />
                        </FormControl>
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={() => { onClose(); props.onClose(false) }}>
                        Fermer
                    </Button>
                    <Button colorScheme='blue'>Envoyer</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

const DrawerUpdateUser = (props: { open: boolean, item: IUtilisateur, onClose: (value: boolean) => void; onSubmit: (value: IUtilisateur) => void }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nom, setNom] = useState<string>("");
    const [prenom, setPrenom] = useState<string>("");
    const [loggin, setLoggin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [pays, setPays] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [entreprise, setEntreprise] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [accesInv, setAccesInv] = useState<boolean>(false);
    const [accesStat, setAccesStat] = useState<boolean>(false);
    const [accesFou, setAccesFou] = useState<boolean>(false);
    const [accesRem, setAccesRem] = useState<boolean>(false);
    const [accesArt, setAccesArt] = useState<boolean>(false);
    const [accesPor, setAccesPor] = useState<boolean>(false);
    // const [accesRes, setAccesRes] = useState<boolean>(false);

    useEffect(() => {
        if (props.open) {
            onOpen();
        }
        setNom(props.item.nom);
        setPrenom(props.item.prenom);
        setLoggin(props.item.loggin);
        setEmail(props.item.email);
        setTel(props.item.telephone);
        setPays(props.item.pays);
        setRole(props.item.role);
        setEntreprise(`${props.item.entreprise}`);
        setPassword(props.item.motDePasse);
        setAccesInv(props.item.access_inventaire);
        setAccesStat(props.item.access_statistic);
        setAccesFou(props.item.access_fournisseur);
        setAccesRem(props.item.access_remboursement);
        setAccesArt(props.item.access_article_depense);
        setAccesPor(props.item.access_portefeuille_mobile);
    })

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={() => { onClose(); props.onClose(false) }}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Editer un compte utilisateur</DrawerHeader>
                <DrawerBody>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input value={nom} onChange={(e) => setNom(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prénom</FormLabel>
                            <Input type='text' value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Loggin</FormLabel>
                            <Input type='text' value={loggin} onChange={(e) => setLoggin(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Téléphone</FormLabel>
                            <Input type='tel' value={tel} onChange={(e) => setTel(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Pays</FormLabel>
                            <Select value={pays} onChange={(e) => setPays(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select value={role} onChange={(e) => setRole(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Nom de votre entreprise</FormLabel>
                            <Input value={entreprise} onChange={(e) => setEntreprise(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl mt={3} display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-statistic' mb='0'>
                                Accès statistic
                            </FormLabel>
                            <Switch id='access-statistic' isChecked={accesStat} onChange={(e) => setAccesStat(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' justifyContent={"space-between"} alignItems='center'>
                            <FormLabel htmlFor='access-fournisseur' mb='0'>
                                Accès fournisseur
                            </FormLabel>
                            <Switch id='access-fournisseur' isChecked={accesFou} onChange={(e) => setAccesFou(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-inventaire' mb='0'>
                                Accès inventaire
                            </FormLabel>
                            <Switch id='access-inventaire' isChecked={accesInv} onChange={(e) => setAccesInv(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-remboursement' mb='0'>
                                Accès remboursement
                            </FormLabel>
                            <Switch id='access-remboursement' isChecked={accesRem} onChange={(e) => setAccesRem(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-art-depense' mb='0'>
                                Déclarer Article & Dépense
                            </FormLabel>
                            <Switch id='access-art-depense' isChecked={accesArt} onChange={(e) => setAccesArt(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-portefeuille-mobile' mb='0'>
                                Accès portefeuille mobile
                            </FormLabel>
                            <Switch id='access-portefeuille-mobile' isChecked={accesPor} onChange={(e) => setAccesPor(e.target.checked)} />
                        </FormControl>
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={() => { onClose(); props.onClose(false) }}>
                        Fermer
                    </Button>
                    <Button colorScheme='blue'>Envoyer</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

const DrawerCreateProduct = (props: { open: boolean, onClose: (value: boolean) => void; onSubmit: (value: IProduct) => void }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nom, setNom] = useState<string>("");
    const [prixAchat, setPrixAchat] = useState<string>("");
    const [prixPromotion, setPrixPromotion] = useState<string>("");
    const [prixVente, setPrixVente] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [fournisseur, setFournisseur] = useState<string>("");
    const [qteAlert, setQteAlert] = useState<string>("");
    const [qtePerdue, setQtePerdue] = useState<string>("");
    const [promotion, setPromotion] = useState<boolean>(false);
    const [qteRst, setQteRst] = useState<string>("");
    const [unite, setUnite] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [categorieId, setCategorieId] = useState<string>("");
    const [cadeBarre, setCodeBarre] = useState<string>("");
    const [commerceId, setCommerceId] = useState<string>("");
    const [peremption, setPeremption] = useState<string>("");
    const [pertes, setPertes] = useState<string>("");
    const [reference, setReference] = useState<string>("");


    useEffect(() => {
        if (props.open) {
            onOpen();
        }
    })

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={() => { onClose(); props.onClose(false) }}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Editer un créer un produit</DrawerHeader>
                <DrawerBody>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input value={nom} onChange={(e) => setNom(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Reference</FormLabel>
                            <Input value={reference} onChange={(e) => setReference(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prix d&apos;achat</FormLabel>
                            <Input type='number' value={prixAchat} onChange={(e) => setPrixAchat(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-remboursement' mb='0'>
                                Accès remboursement
                            </FormLabel>
                            <Switch id='access-remboursement' isChecked={promotion} onChange={(e) => setPromotion(e.target.checked)} />
                        </FormControl>
                        {
                            promotion ? (
                                <FormControl>
                                    <FormLabel>Prix de promotion</FormLabel>
                                    <Input type='number' value={prixPromotion} onChange={(e) => setPrixPromotion(e.target.value)} />
                                    <FormHelperText>Champ obligatoire</FormHelperText>
                                </FormControl>
                            ) : null
                        }
                        <FormControl>
                            <FormLabel>Prx de vente</FormLabel>
                            <Input type='number' value={prixVente} onChange={(e) => setPrixVente(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>URL de l&apos;image</FormLabel>
                            <Input type='url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Fournisseur</FormLabel>
                            <Input type='text' value={fournisseur} onChange={(e) => setFournisseur(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <Box>
                            <legend className="text-xs text-stone-400">Quantités</legend>
                            <hr />
                        </Box>
                        <FormControl>
                            <FormLabel>Quantité alert</FormLabel>
                            <Input type='number'min={0} value={qteAlert} onChange={(e) => setQteAlert(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantité perdue</FormLabel>
                            <Input type='number'min={0} value={qtePerdue} onChange={(e) => setQtePerdue(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantité restante</FormLabel>
                            <Input type='number'min={0} value={qteRst} onChange={(e) => setQteRst(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <Box>
                            <legend className="text-xs text-stone-400">Autres</legend>
                            <hr />
                        </Box>
                        <FormControl>
                            <FormLabel>Unite</FormLabel>
                            <Input type='text' min={0} value={unite} onChange={(e) => setUnite(e.target.value)} />
                            <FormHelperText>Exp: kg, littre, etc</FormHelperText>
                        </FormControl>
                      
                        <FormControl>
                            <FormLabel>Code barre</FormLabel>
                            <Input type='text' min={0} value={cadeBarre} onChange={(e) => setCodeBarre(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Peremption</FormLabel>
                            <Input type='text' min={0} value={peremption} onChange={(e) => setPeremption(e.target.value)} />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Peremption</FormLabel>
                            <Input type='date' min={0} value={peremption} onChange={(e) => setPeremption(e.target.value)} />
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>pertes</FormLabel>
                            <Input type='string' min={0} value={pertes} onChange={(e) => setPertes(e.target.value)} />
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        {/* <FormControl>
                            <FormLabel>Pays</FormLabel>
                            <Select value={pays} onChange={(e) => setPays(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select value={role} onChange={(e) => setRole(e.target.value)} placeholder='Select country'>
                                <option>United Arab Emirates</option>
                                <option value={"nigeria"}>Nigeria</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Nom de votre entreprise</FormLabel>
                            <Input value={entreprise} onChange={(e) => setEntreprise(e.target.value)} type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl mt={3} display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-statistic' mb='0'>
                                Accès statistic
                            </FormLabel>
                            <Switch id='access-statistic' isChecked={accesStat} onChange={(e) => setAccesStat(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' justifyContent={"space-between"} alignItems='center'>
                            <FormLabel htmlFor='access-fournisseur' mb='0'>
                                Accès fournisseur
                            </FormLabel>
                            <Switch id='access-fournisseur' isChecked={accesFou} onChange={(e) => setAccesFou(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-inventaire' mb='0'>
                                Accès inventaire
                            </FormLabel>
                            <Switch id='access-inventaire' isChecked={accesInv} onChange={(e) => setAccesInv(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-remboursement' mb='0'>
                                Accès remboursement
                            </FormLabel>
                            <Switch id='access-remboursement' isChecked={accesRem} onChange={(e) => setAccesRem(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-art-depense' mb='0'>
                                Déclarer Article & Dépense
                            </FormLabel>
                            <Switch id='access-art-depense' isChecked={accesArt} onChange={(e) => setAccesArt(e.target.checked)} />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' justifyContent={"space-between"}>
                            <FormLabel htmlFor='access-portefeuille-mobile' mb='0'>
                                Accès portefeuille mobile
                            </FormLabel>
                            <Switch id='access-portefeuille-mobile' isChecked={accesPor} onChange={(e) => setAccesPor(e.target.checked)} />
                        </FormControl> */}
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={() => { onClose(); props.onClose(false) }}>
                        Fermer
                    </Button>
                    <Button colorScheme='blue'>Envoyer</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export { DrawerCreateUser, DrawerUpdateUser, DrawerCreateProduct }