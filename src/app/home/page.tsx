import { Carousel } from "../components/Carousel";
import { SobreNos } from "../components/SobreNos";
import { Servicos } from "../components/Servicos";
import { Contatos } from "../components/Contatos";
import Layout from "../components/Layout";
import { Galeria } from "../components/Galeria";

export default function Principal() {
    return (
        <>
            <Layout />
            <Carousel />
            <SobreNos />
            <Servicos />
            <Galeria />
            <Contatos />
        </>
    )
}