import { useSearchParams } from "react-router-dom";

function useURLlocation() {
  const [searchParam] = useSearchParams();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return [lat, lng];
}

export { useURLlocation };
