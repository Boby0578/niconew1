import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Mic, Volume2, VolumeX, Pencil, Infinity } from 'lucide-react';
import { getTensePreposition, getPronounText, getPronounHint, Verb, Tense, Pronoun, pronouns, getConjugationPronoun, formatTenseName } from '@/data/verbs';
import { cn } from '@/lib/utils';
import ConjugationTable from '@/components/ConjugationTable';
import { speak } from '@/utils/speech';
import { getVerbsForLevel, getAllVerbs } from '@/data/verbLoader';
import { Input } from "@/components/ui/input";

interface Question {
  verb: Verb;
  tense: Tense;
  pronoun: Pronoun;
}

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { level, time, name, practiceVerbName } = location.state || { level: 1, time: 0, name: 'Joueur', practiceVerbName: null };

  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showConjugation, setShowConjugation] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [inputMode, setInputMode] = useState<'voice' | 'text'>(level === 4 ? 'voice' : 'text');
  const [textAnswer, setTextAnswer] = useState('');
  const [revealedAnswer, setRevealedAnswer] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(level === 4 ? 30 : (time > 0 ? time * 60 : 0));
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const generateQuestion = useCallback(() => {
    if (verbs.length === 0) return;
    setShowConjugation(false);
    setRevealedAnswer(null);
    setIsRevealing(false);
    setTextAnswer('');
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const availableTenses = Object.keys(randomVerb.conjugations) as Tense[];
    if (availableTenses.length === 0) {
        console.error(`Le verbe "${randomVerb.name}" n'a aucune conjugaison définie.`);
        generateQuestion(); // Try again with another verb
        return;
    }
    const randomTense = availableTenses[Math.floor(Math.random() * availableTenses.length)];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    setCurrentQuestion({ verb: randomVerb, tense: randomTense, pronoun: randomPronoun });
  }, [verbs]);

  useEffect(() => {
    if (isGameOver) return;

    if (time === 0 && level !== 4) return;

    if (timeLeft <= 0) {
      speak("Partie terminée.");
      setIsGameOver(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, time, navigate, isRevealing, isGameOver, level]);

  useEffect(() => {
    const savedMute = localStorage.getItem('conjugaison-mute') === 'true';
    setIsMuted(savedMute);

    const loadVerbs = async () => {
      setIsLoading(true);
      try {
        let loadedVerbs: Verb[];
        if (practiceVerbName) {
          const allVerbs = await getAllVerbs();
          const practiceVerb = allVerbs.find(v => v.name === practiceVerbName);
          if (practiceVerb) {
            loadedVerbs = [practiceVerb];
          } else {
            console.error(`Verbe de pratique "${practiceVerbName}" non trouvé.`);
            speak("Le verbe de pratique n'a pas été trouvé.");
            navigate('/');
            return;
          }
        } else {
          loadedVerbs = await getVerbsForLevel(level);
        }
        
        if (loadedVerbs.length === 0) {
          console.error(`Aucun verbe trouvé pour le niveau ${level}. Redirection vers l'accueil.`);
          speak(`Aucun verbe n'est disponible pour le niveau ${level}.`);
          navigate('/');
          return;
        }
        setVerbs(loadedVerbs);
      } catch (error) {
        console.error("Erreur lors du chargement des verbes:", error);
        speak("Une erreur est survenue lors du chargement des verbes.");
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    loadVerbs();
  }, [level, practiceVerbName, navigate]);

  useEffect(() => {
    if (!isLoading && verbs.length > 0) {
      generateQuestion();
    }
  }, [isLoading, verbs, generateQuestion]);

  useEffect(() => {
    if (currentQuestion && !isRevealing) {
      const { verb, tense, pronoun } = currentQuestion;
      const displayTense = formatTenseName(tense);
      const questionText = `Conjugue le verbe ${verb.name} ${getTensePreposition(displayTense)}${displayTense}, à la ${getPronounText(pronoun)}.`;
      speak(questionText);
    }
  }, [currentQuestion, isRevealing]);

  const checkAnswer = () => {
    if (!currentQuestion || !textAnswer.trim()) return;

    const { verb, tense, pronoun } = currentQuestion;
    const conjugationPronoun = getConjugationPronoun(pronoun);
    const conjugationForTense = verb.conjugations[tense];
    
    let correctAnswer: string | undefined;
    if (typeof conjugationForTense === 'object' && conjugationForTense !== null) {
        correctAnswer = (conjugationForTense as any)[conjugationPronoun];
    } else if (typeof conjugationForTense === 'string') {
        correctAnswer = conjugationForTense;
    }

    if (correctAnswer) {
        const isCorrect = textAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
        if (isCorrect) {
            setScore(prev => prev + 1);
            speak("Correct !");
            if (level === 4) {
                setTimeLeft(prev => prev + 7);
            }
        } else {
            speak("Incorrect.");
            if (level === 4) {
                setTimeLeft(prev => Math.max(0, prev - 5));
            }
        }
        generateQuestion();
    }
  };

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem('conjugaison-mute', String(newMuteState));

    if (newMuteState) {
        window.speechSynthesis.cancel();
    } else if (currentQuestion) {
      const { verb, tense, pronoun } = currentQuestion;
      const displayTense = formatTenseName(tense);
      const questionText = `Conjugue le verbe ${verb.name} ${getTensePreposition(displayTense)}${displayTense}, à la ${getPronounText(pronoun)}.`;
      setTimeout(() => speak(questionText), 100);
    }
  };

  const handleRevealAnswer = () => {
    if (!currentQuestion || isRevealing) return;

    setIsRevealing(true);

    const { verb, tense, pronoun } = currentQuestion;
    const conjugationPronoun = getConjugationPronoun(pronoun);
    const conjugationForTense = verb.conjugations[tense];
    
    let correctAnswer: string | undefined;

    if (typeof conjugationForTense === 'object' && conjugationForTense !== null) {
        correctAnswer = (conjugationForTense as any)[conjugationPronoun];
    } else if (typeof conjugationForTense === 'string') {
        correctAnswer = conjugationForTense;
    }

    if (correctAnswer) {
        let textToDisplayAndSpeak = `${pronoun} ${correctAnswer}`;
        if (tense.includes('subjonctif')) {
            textToDisplayAndSpeak = correctAnswer;
        } else if (pronoun === 'je' && correctAnswer && ['a', 'e', 'i', 'o', 'u', 'h', 'y'].includes(correctAnswer.charAt(0).toLowerCase())) {
            textToDisplayAndSpeak = `j'${correctAnswer}`;
        }
        
        setRevealedAnswer(textToDisplayAndSpeak);
        speak(`La bonne réponse est : ${textToDisplayAndSpeak}`);

        setTimeout(() => {
            generateQuestion();
        }, 5000);
    } else {
        speak("Désolé, je n'ai pas pu trouver la réponse.");
        setIsRevealing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  if (isGameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800/50">
        <h1 className="text-8xl font-bold text-blue-900 mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Game Over</h1>
        <Button onClick={() => navigate('/')} size="lg" className="text-xl">Menu Principal</Button>
      </div>
    );
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Chargement des verbes...</div>;
  }

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Préparation du jeu...</div>;
  }

  const { verb, tense, pronoun } = currentQuestion;
  const displayTense = formatTenseName(tense);

  return (
    <div className="min-h-screen flex flex-col items-stretch p-4 sm:p-6 text-gray-700">
        <div className="w-full flex-grow flex flex-col mx-auto max-w-sm md:max-w-4xl">
            <Card className="w-full flex-grow flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
                <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-40 text-left">
                            {(time > 0 || level === 4) ? (
                                <span className="text-4xl font-bold text-purple-600" style={{ textShadow: '0 0 8px #fef08a' }}>
                                    {formatTime(timeLeft)}
                                </span>
                            ) : (
                                <Infinity className="h-10 w-10 text-purple-600" style={{ filter: 'drop-shadow(0 0 5px #fef08a)' }} />
                            )}
                        </div>
                        <div className="text-center text-2xl font-bold text-gray-600">Score: {score}</div>
                        <div className="w-40 flex justify-end items-center gap-2">
                           <Button onClick={toggleMute} variant="outline" size="icon" className="bg-white/60 backdrop-blur-sm rounded-full shadow-md border-gray-300 hover:bg-white/80" disabled={isRevealing}>
                               {isMuted ? <VolumeX className="h-5 w-5 text-gray-700" /> : <Volume2 className="h-5 w-5 text-gray-700" />}
                           </Button>
                           <Button variant="destructive" size="sm" onClick={() => navigate('/')} disabled={isRevealing}>
                                <X className="mr-1 h-4 w-4" /> Quitter
                            </Button>
                        </div>
                    </div>

                    <div className="text-center pt-4 md:pt-8">
                        <p className="text-2xl md:text-4xl font-bold leading-tight">
                            Conjugue le verbe <span className="text-orange-600">{verb.name}</span> {getTensePreposition(displayTense)}<span className="text-green-600">{displayTense}</span>, à la <span className="text-blue-600">{getPronounText(pronoun)}</span> <span className="text-gray-500 text-2xl">{getPronounHint(pronoun)}</span>
                        </p>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center py-6">
                        {isRevealing && revealedAnswer ? (
                            <div className="text-center p-4 bg-green-100 rounded-lg">
                                <p className="text-xl text-gray-700">La bonne réponse est :</p>
                                <p className="text-4xl font-bold text-green-700 mt-2">{revealedAnswer}</p>
                            </div>
                        ) : (
                            level === 4 ? (
                                <div className="w-full max-w-lg flex flex-col items-center">
                                    {inputMode === 'voice' ? (
                                        <div className="flex flex-col items-center">
                                            <div 
                                                className={cn(
                                                    "h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-orange-400 hover:bg-orange-500 active:bg-red-600 shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer",
                                                    isRecording && "ring-4 ring-red-500 ring-offset-2"
                                                )}
                                                onMouseDown={() => setIsRecording(true)}
                                                onMouseUp={() => setIsRecording(false)}
                                                onMouseLeave={() => setIsRecording(false)}
                                                onTouchStart={() => setIsRecording(true)}
                                                onTouchEnd={() => setIsRecording(false)}
                                            >
                                                <Mic className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                                            </div>
                                            <p className="mt-4 text-xl font-semibold text-gray-600">{isRecording ? "Parlez" : "Appuyez pour parler"}</p>
                                            <Button type="button" variant="outline" size="sm" onClick={() => setInputMode('text')} className="mt-4">
                                                <Pencil className="mr-2 h-4 w-4" /> Écrire la réponse
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={(e) => { e.preventDefault(); checkAnswer(); }} className="w-full max-w-lg flex flex-col items-center gap-4">
                                            <p className="text-xl font-semibold text-gray-600 mb-2">Écrivez votre réponse</p>
                                            <Input
                                                type="text"
                                                placeholder="Votre réponse..."
                                                className="text-center text-2xl h-16 w-full"
                                                value={textAnswer}
                                                onChange={(e) => setTextAnswer(e.target.value)}
                                                autoFocus
                                            />
                                            <Button type="submit" size="lg" className="w-full text-xl px-10 py-6 bg-green-500 hover:bg-green-600">Valider</Button>
                                            <Button type="button" variant="outline" size="sm" onClick={() => setInputMode('voice')} className="mt-2">
                                                <Mic className="mr-2 h-4 w-4" /> Utiliser la voix
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            ) : (
                                <form onSubmit={(e) => { e.preventDefault(); checkAnswer(); }} className="flex items-center justify-center w-full max-w-lg">
                                    <div className="flex-1 flex justify-end"></div>
                                    <div className="px-4 w-full">
                                        {inputMode === 'voice' ? (
                                            <div className="flex flex-col items-center">
                                                <div 
                                                    className={cn(
                                                        "h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-orange-400 hover:bg-orange-500 active:bg-red-600 shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer",
                                                        isRecording && "ring-4 ring-red-500 ring-offset-2"
                                                    )}
                                                    onMouseDown={() => setIsRecording(true)}
                                                    onMouseUp={() => setIsRecording(false)}
                                                    onMouseLeave={() => setIsRecording(false)}
                                                    onTouchStart={() => setIsRecording(true)}
                                                    onTouchEnd={() => setIsRecording(false)}
                                                >
                                                    <Mic className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                                                </div>
                                                <p className="mt-4 text-xl font-semibold text-gray-600">{isRecording ? "Parlez" : "Appuyez pour parler"}</p>
                                            </div>
                                        ) : (
                                            <div className="w-full max-w-lg flex flex-col items-center gap-4">
                                                <p className="text-xl font-semibold text-gray-600 mb-2">Écrivez votre réponse</p>
                                                <Input
                                                    type="text"
                                                    placeholder="Votre réponse..."
                                                    className="text-center text-2xl h-16 w-full"
                                                    value={textAnswer}
                                                    onChange={(e) => setTextAnswer(e.target.value)}
                                                    autoFocus
                                                />
                                                <Button type="submit" size="lg" className="w-full text-xl px-10 py-6 bg-green-500 hover:bg-green-600">Valider</Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex justify-start">
                                        <Button type="button" variant="outline" size="icon" onClick={() => setInputMode(prev => prev === 'voice' ? 'text' : 'voice')} className="rounded-full shadow-md">
                                            {inputMode === 'voice' ? <Pencil className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                                        </Button>
                                    </div>
                                </form>
                            )
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <Button className="bg-green-400 hover:bg-green-500 text-white rounded-full text-lg py-3 px-8" onClick={handleRevealAnswer} disabled={isRevealing}>Révéler la réponse</Button>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg py-3 px-8" onClick={generateQuestion} disabled={isRevealing}>Question suivante</Button>
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg py-3 px-8" onClick={() => setShowConjugation(!showConjugation)} disabled={isRevealing}>
                            {showConjugation ? "Cacher" : "Voir"} la conjugaison
                        </Button>
                    </div>

                    {showConjugation && (
                        <div className="overflow-y-auto flex-shrink-0">
                            <ConjugationTable verb={verb} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Game;