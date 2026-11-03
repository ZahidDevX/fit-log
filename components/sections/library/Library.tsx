import Container from "@/components/layouts/Container";
import LibraryGrid from "./LibraryGrid";

const Library = () => {
    return (
        <section className="mb-16" id="library">
            <Container>
                <div className="mb-8">
                    <h2 className="font-bold text-3xl">THE LIBRARY</h2>
                    <p>Twelve lifts covering every major muscle group.</p>
                </div>
                <LibraryGrid />
            </Container>
        </section>
    );
};

export default Library;