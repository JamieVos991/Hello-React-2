import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="Air jordan 1"
                smallTitle="Order the perfect Jordan's"
                buttonText="Order now"
            />

            <Section sectionTitle="Title1">
                <Card image="Black-Amarillo-Orange.jpg" jordanText="Eerste plaatje" />
                <Card image="Black-Pineapple-Green.jpg" jordanText="Tweede plaatje" />
                <Card image="Fearless.jpg" jordanText="Derde plaatje" />
                <Card image="White-Gym-Red.jpg" jordanText="Vierde plaatje" />
                <Card image="Black-Amarillo-Orange.jpg" jordanText="Vijfde plaatje" />
                <Card image="Black-Pineapple-Green.jpg" jordanText="Zesde plaatje" />
            </Section>
            <Section sectionTitle="">
                <Card jordanText="Eerste plaatje" />
                <Card jordanText="Tweede plaatje" />
                <Card jordanText="Derde plaatje" />
                <Card jordanText="Vierde plaatje" />
                <Card jordanText="Vijfde plaatje" />
                <Card jordanText="Zesde plaatje" />
            </Section>
        </>
    )
}

export default HomePage;