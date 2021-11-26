import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Live = () => {
    const [t] = useTranslation('global')
    const { id }: { id: string } = useParams()

    const title = t(`channels.${id}.name`) + ' ' + t('channels.online')

    return (
        <>
            <Container>
                <div className="title text-center pt-5 d-flex justify-content-center align-items-center">
                    <h2 className="">{title}</h2>
                    <div className="mx-3">
                        <div className="circle-top"></div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex justify-content-center align-items-center mt-5">
                    <iframe
                        allow="encrypted-media"
                        src={t(`channels.${id}.iframe`)}
                        style={{ position: 'absolute', width: '70%', height: '100%' }}
                        allowFullScreen
                        scrolling="no"
                        frameBorder="0"
                    ></iframe>
                </div>
            </Container>
        </>
    )
}

export default Live
