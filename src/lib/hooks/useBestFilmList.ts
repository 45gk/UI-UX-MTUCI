import { useQuery, useQueryClient } from "@tanstack/react-query";

import { bestFilmsQuery } from "@/lib/api";

export const useBestFilmList = (currentPage: string, pageSize: string) => {
  const queryClient = useQueryClient();

  const {
    data: bestFilms,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmList", currentPage, pageSize],
    queryFn: () => bestFilmsQuery(currentPage, pageSize),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const updateBestFilmList = () => {
    return queryClient.invalidateQueries({ queryKey: ["getFilmList"] });
  };

  return {
    bestFilms,
    updateBestFilmList,
    isSuccess,
    isLoading,
    isError,
  };
};
