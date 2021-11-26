import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const CardHome = ({ title, img, buttonTo, text, buttonText }: { title?: string; img?: string; buttonTo?: string; text?: string; buttonText?: string }) => {
    const history = useHistory()

    return (
        <Card style={{ width: '18rem', minHeight: '25rem' }} className="shadow-lg bg-navbar rounded mb-5">
            <Card.Img variant="top" src={img ?? ''} />
            <Card.Body>
                <Card.Title>{title ?? ''}</Card.Title>
                <Card.Text>{text ?? ''}</Card.Text>
                <Button variant="primary" onClick={() => history.push(buttonTo)}>
                    {buttonText ?? ''}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CardHome
