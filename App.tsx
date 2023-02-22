import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import { t } from "./providers/providers";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "./components/Routing";
export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    t.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
        }),
      ],
    })
  );

  return (
    <t.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Routing></Routing>
        </RecoilRoot>
      </QueryClientProvider>
    </t.Provider>
  );
}

export const fetchUser = () => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
