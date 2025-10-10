import { useEffect, useState } from "react";

export interface Prajituri {
  id: number;
  nume: string;
  pret: string;
  img: string;
}

const usePraji = () => {
  const [prajituri, setPrajituri] = useState<Prajituri[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((r) => r.json())
      .then((r) => {
        setPrajituri(r);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { prajituri, setPrajituri, loading };
};

export default usePraji;
