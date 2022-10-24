import { Button, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Back() {
  const router = useRouter()

  return (
    <Button onClick={() => router.back()} light color="primary" auto>
        Back
    </Button>
  )
}