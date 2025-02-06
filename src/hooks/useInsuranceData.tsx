import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useInsuranceData = (title: string) => {
  return useQuery({
    queryKey: ["insurance", title],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Seguros")
        .select("*")
        .eq("Título", title)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });
};