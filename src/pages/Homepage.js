import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer"

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="$neakers and co"
                smallTitle="Vintage shoes"
                buttonText="Order now"
            />

            <Section sectionTitle="Trending High">
                <Card image="Black-Amarillo-Orange.jpg" jordanText="Eerste plaatje" />
                <Card image="Black-Pineapple-Green.jpg" jordanText="Tweede plaatje" />
                <Card image="Fearless.jpg" jordanText="Derde plaatje" />
                <Card image="White-Gym-Red.jpg" jordanText="Vierde plaatje" />
                <Card image="Black-Amarillo-Orange.jpg" jordanText="Vijfde plaatje" />
                <Card image="Black-Pineapple-Green.jpg" jordanText="Zesde plaatje" />
            </Section>
            <Section sectionTitle="Trending Mid">
                <Card jordanText="Eerste plaatje" />
                <Card jordanText="Tweede plaatje" />
                <Card jordanText="Derde plaatje" />
                <Card jordanText="Vierde plaatje" />
                <Card jordanText="Vijfde plaatje" />
                <Card jordanText="Zesde plaatje" />
            </Section>
            <Section sectionTitle="Trending Low">
                <Card jordanText="Eerste plaatje" />
                <Card jordanText="Tweede plaatje" />
                <Card jordanText="Derde plaatje" />
                <Card jordanText="Vierde plaatje" />
                <Card jordanText="Vijfde plaatje" />
                <Card jordanText="Zesde plaatje" />
            </Section>

            <Footer></Footer>
        </>
    )
}

export default HomePage;