import { Loading, Container } from "@nextui-org/react";

export default function Load() {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Loading type="gradient" />
      </div>
    </Container>
  );
}
