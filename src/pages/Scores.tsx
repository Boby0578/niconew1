import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScoreCategory = ({ title }: { title: string }) => (
  <div className="bg-white/50 rounded-lg p-6 shadow-inner">
    <h3 className="font-bold text-2xl mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-500">Aucun score enregistré.</p>
  </div>
);

const Scores = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
        <CardHeader className="p-0 mb-8">
          <CardTitle className="font-pacifico text-5xl text-pink-500">
            Tableau des Scores
          </CardTitle>
          <h2 className="text-4xl font-bold text-red-600 mt-4">
            Meilleurs joueurs
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ScoreCategory title="Niveau 1" />
            <ScoreCategory title="Niveau 2" />
            <ScoreCategory title="Niveau 3" />
            <ScoreCategory title="Mode Contest" />
          </div>
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg"
          >
            Menu Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scores;