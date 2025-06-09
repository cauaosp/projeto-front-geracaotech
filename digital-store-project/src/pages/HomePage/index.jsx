import Section from "@/components/Section";

const HomePage = () => {
  return (
    <div className="w-full border-8 border-purple-700">
      <div className="text-center text-primary text-7xl bg-black p-4">Hello World!</div>
      <Section
        title={
          <>
            <div className="text-amber-500 text-xl">Oferta especial</div>
            <div>Air Jordan edição de colecionador</div>
          </>
        }
        link={{ text: "Ver oferta", href: "/productlist" }}
        image={
          <div className="relative h-64 mb-20">
            <img
              src="eclipse-roxa.png"
              alt="fundo da imagem do sapato"
              className="absolute inset-0 m-auto z-10 w-80 mt-2"
            />
            <img
              src="air-jordan.png"
              alt="sapato em promocao"
              className="absolute inset-0 m-auto z-20 w-96 -mb-1"
            />
          </div>
        }
        className="py-8"
      >
        <div className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
