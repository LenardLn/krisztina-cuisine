import { useEffect, useState } from "react";

export interface Prajituri {
  id: number;
  nume: string;
  pret: string;
  img: string;
}

const usePraji = () => {
  const [prajituri, setPrajituri] = useState<Prajituri[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((r) => setPrajituri(r));
  }, []);

  return { prajituri, setPrajituri };
};

export default usePraji;
