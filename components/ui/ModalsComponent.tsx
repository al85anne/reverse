import { ICategorie } from '@/Interfaces/ICategorie';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Textarea,
    useDisclosure,
    FormErrorMessage
} from '@chakra-ui/react'
import { FormEvent, useEffect, useState } from 'react'

const ModalCreateCategorie = (props: { open: boolean, onClose: (value: boolean) => void; onSubmit: (value: ICategorie) => void }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nom, setNom] = useState<string>("")
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        if (props.open) {
            onOpen();
        }
    })
    const nomFieldError = (nom.trim() === "" && nom.length > 0);
    const descriptionFieldError = (nom.trim() === "" && nom.length > 0);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
       
        if (nom.trim() != "" && description.trim() != "") {
            
            props.onSubmit({
                label: nom,
                description: description,
                userId: "1",
                user: null
            })
            
        } else {
            alert(1)
        }

    }

    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(); props.onClose(false)}}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Créer une catégorie</ModalHeader>
                <form onSubmit={onSubmit}>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Nom</FormLabel>
                            <Input type='text' value={nom} onChange={(e) => setNom(e.target.value)} />
                            {!nomFieldError ? (
                                <FormHelperText>
                                    Entrer le nom de la catégorie
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Le Nom est requis.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>
                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} ></Textarea>
                            {!descriptionFieldError ? (
                                <FormHelperText>
                                    Decrire la catégorie
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>La Description est obligatoire.</FormErrorMessage>
                            )}
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' colorScheme='blue' mr={3} >
                            Enregistrer
                        </Button>
                        <Button type='button' onClick={() => { onClose(); props.onClose(false)}} variant='ghost'>Annuler</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export { ModalCreateCategorie }