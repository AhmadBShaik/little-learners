import Container from "@/components/atoms/Container";

function LandingPageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <main className="w-full">
        <div className="pb mt-[50px] space-y-[80px] pb-[80px] laptop:mt-[60px] laptop:space-y-[150px] laptop:pb-[150px] desktop:mt-[80px] desktop:space-y-[200px] desktop:pb-[200px]">
          {children}
        </div>
      </main>
    </Container>
  );
}

export default LandingPageTemplate;
