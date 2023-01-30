import { AppRouter } from "../../VentureWisconsinDB";
import { createTRPCReact } from "@trpc/react-query";

export const t = createTRPCReact<AppRouter>();
