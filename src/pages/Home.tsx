import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import CardHome from '../components/Cards/CardHome'

const Home = () => {
    const [t] = useTranslation('global')

    const channels = [
        {
            name: t('channels.tyC.name'),
            img: t('channels.tyC.img'),
            text: t('channels.tyC.text'),
            btnText: t('channels.tyC.btnText'),
            to: '/live/tyC'
        },
        {
            name: t('channels.cdf.name'),
            img: t('channels.cdf.img'),
            text: t('channels.cdf.text'),
            btnText: t('channels.cdf.btnText'),
            to: '/live/cdf'
        },
        {
            name: t('channels.win-sports.name'),
            img: t('channels.win-sports.img'),
            text: t('channels.win-sports.text'),
            btnText: t('channels.win-sports.btnText'),
            to: '/live/win-sports'
        },
        {
            name: t('channels.tnt.name'),
            img: t('channels.tnt.img'),
            text: t('channels.tnt.text'),
            btnText: t('channels.tnt.btnText'),
            to: '/live/tnt'
        },
        {
            name: t('channels.fox-sports.name'),
            img: t('channels.fox-sports.img'),
            text: t('channels.fox-sports.text'),
            btnText: t('channels.fox-sports.btnText'),
            to: '/live/fox-sports'
        },
        {
            name: t('channels.fox-1.name'),
            img: t('channels.fox-1.img'),
            text: t('channels.fox-1.text'),
            btnText: t('channels.fox-1.btnText'),
            to: '/live/fox-1'
        },
        {
            name: t('channels.fox-2.name'),
            img: t('channels.fox-2.img'),
            text: t('channels.fox-2.text'),
            btnText: t('channels.fox-2.btnText'),
            to: '/live/fox-2'
        },
        {
            name: t('channels.fox-3.name'),
            img: t('channels.fox-3.img'),
            text: t('channels.fox-3.text'),
            btnText: t('channels.fox-3.btnText'),
            to: '/live/fox-3'
        },
        {
            name: t('channels.espn-1.name'),
            img: t('channels.espn-1.img'),
            text: t('channels.espn-1.text'),
            btnText: t('channels.espn-1.btnText'),
            to: '/live/espn-1'
        },
        {
            name: t('channels.espn-2.name'),
            img: t('channels.espn-2.img'),
            text: t('channels.espn-2.text'),
            btnText: t('channels.espn-2.btnText'),
            to: '/live/espn-2'
        },
        {
            name: t('channels.espn-3.name'),
            img: t('channels.espn-3.img'),
            text: t('channels.espn-3.text'),
            btnText: t('channels.espn-3.btnText'),
            to: '/live/espn-3'
        },
        {
            name: t('channels.espn-extra.name'),
            img: t('channels.espn-extra.img'),
            text: t('channels.espn-extra.text'),
            btnText: t('channels.espn-extra.btnText'),
            to: '/live/espn-extra'
        },
        {
            name: t('channels.vtv.name'),
            img: t('channels.vtv.img'),
            text: t('channels.vtv.text'),
            btnText: t('channels.vtv.btnText'),
            to: '/live/vtv'
        },
        {
            name: t('channels.direct-tv-sports.name'),
            img: t('channels.direct-tv-sports.img'),
            text: t('channels.direct-tv-sports.text'),
            btnText: t('channels.direct-tv-sports.btnText'),
            to: '/live/direct-tv-sports'
        }
    ]

    return (
        <>
            <Container>
                <div className="title mt-5 text-center flex justify-content-center align-items-center">
                    <h1 className="bold">{t('home.header.title').toUpperCase()}</h1>
                    <h6 className="text-rose-light">{t('home.header.subTitle')}</h6>
                </div>
            </Container>
            <Container className="mt-5">
                <div className="text-center mb-5">
                    <h5>{t('channels.title')}</h5>
                </div>{' '}
                <Row>
                    {channels.map(
                        ({ name, img, text, btnText, to }: { name: string; img: string; text: string; btnText: string; to: string }, index: number) => (
                            <Col lg="auto" md="auto" sm={12} key={index} className="d-flex justify-content-center align-items-center">
                                <CardHome title={name} img={img} text={text} buttonText={btnText} buttonTo={to} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    )
}

export default Home
