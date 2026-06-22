import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectsView } from "./ProjectsView";

export default function ProjetosPage() {
  return (
    <>
      <span id="top" />
      <Nav showLinks={false} />
      <main className="container-x">
        <ProjectsView />
      </main>
      <div className="container-x">
        <Footer />
      </div>
    </>
  );
}
