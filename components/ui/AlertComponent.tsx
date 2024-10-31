import {
    Alert,
    AlertIcon,
    // AlertTitle,
    // AlertDescription,
} from '@chakra-ui/react'

const AlertComponent = (props: { message: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined }) => {
    return (
        <Alert status={props.status} variant='solid'>
            <AlertIcon />
            {props.message}
        </Alert>
    )
}
export default AlertComponent