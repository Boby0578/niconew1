import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronsUpDown } from 'lucide-react';
import { getAllVerbs } from '@/data/verbLoader';
import { Verb } from '@/data/verbs';

const Practice = () => {
  const navigate = useNavigate();
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadVerbs = async () => {
      setIsLoading(true);
      const allVerbs = await getAllVerbs();
      allVerbs.sort((a, b) => a.name.localeCompare(b.name));
      setVerbs(allVerbs);
      setIsLoading(false);
    };
    loadVerbs();
  }, []);

  const startPractice = () => {
    if (selectedVerb) {
      const name = localStorage.getItem("conjugaison-username") || 'Joueur';
      const time = 0; // Unlimited time for practice
      // We pass the verb name to the game component
      navigate("/game", { state: { practiceVerbName: selectedVerb.name, time, name, level: 0 } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <Card className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <CardHeader className="p-0 mb-6 text-center">
          <h1 className="font-pacifico text-5xl text-purple-600">
            Mode Pratique
          </h1>
          <p className="text-lg text-gray-600 mt-2">Choisissez un verbe pour vous entraîner spécifiquement dessus.</p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col items-center gap-6">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full max-w-sm justify-between text-lg h-12"
                  disabled={isLoading}
                >
                  {isLoading ? "Chargement..." : selectedVerb ? selectedVerb.name : "Sélectionnez un verbe..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                <Command>
                  <CommandInput placeholder="Rechercher un verbe..." />
                  <CommandList>
                    <CommandEmpty>Aucun verbe trouvé.</CommandEmpty>
                    <CommandGroup>
                      {verbs.map((verb) => (
                        <CommandItem
                          key={verb.name}
                          value={verb.name}
                          className="text-lg"
                          onSelect={(currentValue) => {
                            const verb = verbs.find(v => v.name.toLowerCase() === currentValue.toLowerCase());
                            setSelectedVerb(verb || null);
                            setOpen(false);
                          }}
                        >
                          {verb.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {selectedVerb && (
              <Button
                onClick={startPractice}
                size="lg"
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg"
              >
                Pratiquer "{selectedVerb.name}"
              </Button>
            )}

            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="mt-8 bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg"
            >
              Menu Principal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Practice;