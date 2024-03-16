import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: () => getProposalsApi(),
    retry: false,
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
}
