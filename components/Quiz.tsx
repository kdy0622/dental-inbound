import React, { useState, useEffect } from 'react';
import { ManualData, GlossaryTerm } from '../types';
import { Trophy, ArrowRight, CheckCircle, XCircle, Brain, RefreshCw, Star, Play, Award, MessageSquare, Phone } from 'lucide-react';

interface QuizProps {
  data: ManualData;
}

interface Question {
  id: number;
  level: 1 | 2 | 3;
  type: 'term' | 'script' | 'checklist' | 'clinical';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  visualType?: 'implant' | 'tooth' | 'endo' | 'general' | 'script';
}

type GameState = 'intro' | 'playing' | 'feedback' | 'levelup' | 'complete';

// Visual Component for Dental Concepts using Inline SVG
const DentalVisual: React.FC<{ type: string }> = ({ type }) => {
  const getVisual = () => {
    switch(type) {
      case 'implant':
        return (
          <svg viewBox="0 0 100 120" className="w-32 h-32 mx-auto drop-shadow-md">
            {/* Gums */}
            <path d="M0 80 Q50 100 100 80 V120 H0 Z" fill="#FDA4AF" />
            {/* Fixture (Screw) */}
            <path d="M35 80 L35 110 Q50 115 65 110 L65 80" fill="#94A3B8" stroke="#475569" strokeWidth="2"/>
            <line x1="35" y1="85" x2="65" y2="85" stroke="#475569" strokeWidth="2"/>
            <line x1="35" y1="95" x2="65" y2="95" stroke="#475569" strokeWidth="2"/>
            <line x1="35" y1="105" x2="65" y2="105" stroke="#475569" strokeWidth="2"/>
            {/* Abutment */}
            <rect x="40" y="60" width="20" height="20" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
            {/* Crown */}
            <path d="M25 60 Q20 30 50 25 Q80 30 75 60 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2"/>
            <text x="50" y="15" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">Implant</text>
          </svg>
        );
      case 'endo':
        return (
          <svg viewBox="0 0 100 120" className="w-32 h-32 mx-auto drop-shadow-md">
            {/* Tooth */}
            <path d="M25 40 Q20 10 50 10 Q80 10 75 40 L70 90 Q50 100 30 90 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2"/>
            {/* Pulp/Nerves (Red for inflammation/treatment) */}
            <path d="M40 40 Q50 35 60 40 L55 85 L45 85 Z" fill="#FECACA" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2"/>
            <text x="50" y="105" textAnchor="middle" fontSize="10" fill="#EF4444" fontWeight="bold">신경치료 (Endo)</text>
          </svg>
        );
      case 'tooth':
        return (
          <svg viewBox="0 0 100 120" className="w-32 h-32 mx-auto drop-shadow-md">
            <path d="M25 40 Q20 10 50 10 Q80 10 75 40 L70 90 Q50 100 30 90 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2"/>
             {/* Cavity */}
            <circle cx="60" cy="35" r="5" fill="#334155" />
            <text x="50" y="105" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">충치 (Caries)</text>
          </svg>
        );
      case 'script':
        return (
          <div className="w-32 h-32 mx-auto flex items-center justify-center">
             <div className="relative">
                <MessageSquare className="w-20 h-20 text-teal-200" fill="currentColor" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Phone className="w-8 h-8 text-teal-700" />
                </div>
             </div>
          </div>
        );
      default:
        return (
          <div className="w-32 h-32 mx-auto flex items-center justify-center">
             <Brain className="w-20 h-20 text-indigo-200" />
          </div>
        );
    }
  };

  return (
    <div className="py-4 animate-fade-in">
       {getVisual()}
    </div>
  );
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [level, setLevel] = useState<1 | 2 | 3>(1);
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0); // Consecutive correct answers for current level
  const [levelProgress, setLevelProgress] = useState(0); // Out of 10

  // Generate a random question based on level
  const generateQuestion = (lvl: number): Question => {
    const r = Math.random();
    
    // Level 1: Basic Term Matching (Kor <-> Eng) & Basic Checklist
    if (lvl === 1) {
      if (r > 0.3) { // 70% Glossary
        const term = data.glossary[Math.floor(Math.random() * data.glossary.length)];
        const isEngToKor = Math.random() > 0.5;
        
        // Pick 3 wrong answers
        const wrongOptions = data.glossary
          .filter(t => t.term_eng !== term.term_eng)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(t => isEngToKor ? t.term_kor : t.term_eng);

        const options = [...wrongOptions, isEngToKor ? term.term_kor : term.term_eng].sort(() => 0.5 - Math.random());

        let vType: 'general' | 'implant' | 'endo' | 'tooth' = 'general';
        if (term.category.includes('임플란트')) vType = 'implant';
        if (term.category.includes('보존') || term.term_eng.includes('Endo')) vType = 'endo';
        if (term.term_eng.includes('Caries') || term.term_eng.includes('Resin')) vType = 'tooth';

        return {
          id: Math.random(),
          level: 1,
          type: 'term',
          question: isEngToKor 
            ? `다음 용어의 한글 의미는? \n[ ${term.term_eng} ]` 
            : `다음 한글 용어의 영어 약어/명칭은? \n[ ${term.term_kor} ]`,
          options,
          correctAnswer: isEngToKor ? term.term_kor : term.term_eng,
          explanation: `**${term.term_eng} (${term.term_kor})**\n\n${term.description}`,
          visualType: vType
        };
      } else { // 30% Basic Checklist
        const item = data.new_patient_checklist[Math.floor(Math.random() * data.new_patient_checklist.length)];
        const correct = item.type.includes('필수') ? '필수 확인' : '추가 확인';
        return {
          id: Math.random(),
          level: 1,
          type: 'checklist',
          question: `다음 신환 체크리스트 항목은 '필수'일까요, '추가'일까요?\n\n"${item.item}"`,
          options: ['필수 확인', '추가 확인'].sort(() => 0.5 - Math.random()),
          correctAnswer: correct,
          explanation: item.type.includes('필수') 
            ? "신환 접수 시 누락되면 안 되는 **필수** 항목입니다." 
            : "환자의 상태에 따라 확인이 필요한 **추가** 항목입니다.",
          visualType: 'general'
        };
      }
    }
    
    // Level 2: Meaning -> Term & Script Situations
    if (lvl === 2) {
      if (r > 0.5) { // Glossary Definitions
        const term = data.glossary[Math.floor(Math.random() * data.glossary.length)];
        const wrongOptions = data.glossary
          .filter(t => t.term_eng !== term.term_eng)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(t => t.term_kor);
        
        const options = [...wrongOptions, term.term_kor].sort(() => 0.5 - Math.random());
        
        return {
          id: Math.random(),
          level: 2,
          type: 'term',
          question: `다음 설명에 해당하는 용어는?\n\n"${term.description}"`,
          options,
          correctAnswer: term.term_kor,
          explanation: `정답은 **${term.term_kor} (${term.term_eng})**입니다.`,
          visualType: term.category.includes('임플란트') ? 'implant' : 'general'
        };
      } else { // Scripts
        const script = data.consultation_scripts[Math.floor(Math.random() * data.consultation_scripts.length)];
        const wrongScripts = data.consultation_scripts
          .filter(s => s.situation !== script.situation)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(s => s.situation);

        const options = [...wrongScripts, script.situation].sort(() => 0.5 - Math.random());

        return {
          id: Math.random(),
          level: 2,
          type: 'script',
          question: `다음 멘트는 어떤 상황에서 사용하는 것일까요?\n\n"${script.content.substring(0, 40)}..."`,
          options,
          correctAnswer: script.situation,
          explanation: `**${script.situation}** 상황\n\n전체 내용: ${script.content}`,
          visualType: 'script'
        };
      }
    }

    // Level 3: Advanced Clinical & Specifics
    // Mocking specific hard questions based on data
    const advancedQs: Question[] = [
      {
        id: 301, level: 3, type: 'clinical',
        question: "상악 구치부 뼈가 부족할 때 상악동 점막을 들어 올려 뼈를 이식하는 고난이도 술식은?",
        options: ["GBR", "Sinus Lifting", "Ridge Split", "Bone Graft"],
        correctAnswer: "Sinus Lifting",
        explanation: "**Sinus Lifting (상악동 거상술)**은 위 어금니 부위 상악동 공간을 활용해 뼈를 이식하는 술식입니다.",
        visualType: 'implant'
      },
      {
        id: 302, level: 3, type: 'checklist',
        question: "49년생 이전 출생자(고령 환자) 신환 접수 시, 필수적으로 확인해야 할 특이 사항은?",
        options: ["거동 유무", "자녀 동반 여부", "틀니 사용 여부", "임플란트 경험"],
        correctAnswer: "거동 유무",
        explanation: "고령 환자의 경우 내원 및 이동 가능 여부를 파악하기 위해 **거동 유무** 확인이 필수입니다.",
        visualType: 'general'
      },
      {
        id: 303, level: 3, type: 'clinical',
        question: "당뇨 환자 임플란트 수술 시 고려사항으로 가장 적절한 것은?",
        options: ["수술이 불가능하다", "최소 절개로 출혈과 감염 위험을 줄여야 한다", "반드시 전신마취를 해야 한다", "항생제를 복용하면 안 된다"],
        correctAnswer: "최소 절개로 출혈과 감염 위험을 줄여야 한다",
        explanation: "당뇨 환자는 감염 취약 및 지혈 지연 위험이 있어 **최소 절개 시술(네비게이션 등)**이 권장됩니다.",
        visualType: 'implant'
      },
      {
         id: 304, level: 3, type: 'term',
         question: "치아가 완전히 빠져 치아가 하나도 없는 경우 사용하는 틀니의 명칭은?",
         options: ["R.P.D", "Overdenture", "Full Denture (FD)", "Crown"],
         correctAnswer: "Full Denture (FD)",
         explanation: "**Full Denture (완전 틀니)**는 무치악 환자에게 사용하는 보철물입니다.",
         visualType: 'tooth'
      }
    ];
    
    return advancedQs[Math.floor(Math.random() * advancedQs.length)];
  };

  const startLevel = (lvl: 1 | 2 | 3) => {
    setLevel(lvl);
    setLevelProgress(0);
    setStreak(0);
    setGameState('playing');
    setCurrentQuestion(generateQuestion(lvl));
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setGameState('feedback');
    
    if (currentQuestion && answer === currentQuestion.correctAnswer) {
      setScore(score + 10);
      setStreak(streak + 1);
      setLevelProgress(Math.min(levelProgress + 1, 10));
    } else {
      setStreak(0); // Reset streak on wrong answer
    }
  };

  const nextQuestion = () => {
    // Check for level up condition
    if (levelProgress >= 10) {
       if (level < 3) {
         setGameState('levelup');
         return;
       } else {
         setGameState('complete');
         return;
       }
    }

    setSelectedAnswer(null);
    setGameState('playing');
    setCurrentQuestion(generateQuestion(level));
  };

  const advanceLevel = () => {
    startLevel((level + 1) as 1 | 2 | 3);
  };

  // Rendering Functions
  if (gameState === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in">
        <div className="bg-indigo-100 p-6 rounded-full">
          <Brain className="w-16 h-16 text-indigo-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-800">치과 업무 능력 평가 퀴즈</h1>
          <p className="text-slate-500 text-lg">레벨별로 10문제를 맞추면 승진합니다! 도전해보세요.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {[1, 2, 3].map((lvl) => (
            <button 
              key={lvl}
              onClick={() => startLevel(lvl as 1|2|3)}
              disabled={lvl !== 1} // For demo simplicity, force linear progression or remove to unlock all
              className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3
                ${lvl === 1 
                  ? 'border-teal-500 bg-teal-50 hover:bg-teal-100 cursor-pointer' 
                  : 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed'}`}
            >
              {lvl === 1 && <Star className="w-8 h-8 text-teal-500" fill="currentColor" />}
              {lvl === 2 && <Award className="w-8 h-8 text-slate-400" />}
              {lvl === 3 && <Trophy className="w-8 h-8 text-slate-400" />}
              <div className="font-bold text-lg">LEVEL {lvl}</div>
              <div className="text-xs text-slate-500">
                {lvl === 1 ? '기본 용어 & 체크리스트' : lvl === 2 ? '용어 정의 & 스크립트' : '심화 임상 & 응용'}
              </div>
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => startLevel(1)}
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 shadow-lg flex items-center gap-2"
        >
          <Play fill="currentColor" className="w-5 h-5" />
          퀴즈 시작하기
        </button>
      </div>
    );
  }

  if (gameState === 'levelup') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-bounce-in">
        <div className="relative">
           <Trophy className="w-32 h-32 text-yellow-400 animate-pulse" />
           <div className="absolute top-0 right-0 animate-ping">
             <Star className="w-10 h-10 text-yellow-200" fill="currentColor"/>
           </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">LEVEL UP!</h2>
          <p className="text-xl text-slate-600">축하합니다! 레벨 {level} 과정을 수료하셨습니다.</p>
          <p className="text-slate-500 mt-2">다음 단계로 넘어갈 준비가 되셨나요?</p>
        </div>

        <button 
          onClick={advanceLevel}
          className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-indigo-700 shadow-xl transition-transform hover:scale-105"
        >
          레벨 {level + 1} 도전하기
        </button>
      </div>
    );
  }

  if (gameState === 'complete') {
    return (
       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fade-in">
        <div className="bg-yellow-100 p-8 rounded-full border-4 border-yellow-300">
          <Trophy className="w-24 h-24 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800">모든 과정 수료!</h1>
        <p className="text-xl text-slate-600">이제 완벽한 상담 전문가가 되셨습니다.</p>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-full max-w-md">
           <div className="flex justify-between items-center mb-2">
             <span className="text-slate-500">최종 점수</span>
             <span className="text-2xl font-bold text-indigo-600">{score}점</span>
           </div>
        </div>
        <button 
          onClick={() => { setGameState('intro'); setScore(0); }}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800"
        >
          <RefreshCw className="w-4 h-4" /> 처음으로 돌아가기
        </button>
       </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-slate-900 text-white px-3 py-1 rounded font-bold text-sm">LV.{level}</div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium uppercase">Progress</span>
            <div className="flex items-center gap-1">
               <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-teal-500 transition-all duration-500"
                   style={{ width: `${(levelProgress / 10) * 100}%` }}
                 />
               </div>
               <span className="text-xs font-bold text-teal-600 ml-1">{levelProgress}/10</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="font-bold text-slate-700">{score}점</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden min-h-[400px] flex flex-col">
        {currentQuestion && (
          <>
            <div className="p-8 flex-1">
              <div className="flex justify-center mb-6">
                 <DentalVisual type={currentQuestion.visualType || 'general'} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 text-center leading-relaxed whitespace-pre-wrap mb-8">
                {currentQuestion.question}
              </h3>

              {gameState === 'playing' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className="p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 text-slate-700 font-medium transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-4 rounded-xl flex items-start gap-3 border ${
                    selectedAnswer === currentQuestion.correctAnswer 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}>
                    {selectedAnswer === currentQuestion.correctAnswer 
                      ? <CheckCircle className="w-6 h-6 shrink-0" /> 
                      : <XCircle className="w-6 h-6 shrink-0" />
                    }
                    <div>
                      <p className="font-bold text-lg mb-1">
                        {selectedAnswer === currentQuestion.correctAnswer ? '정답입니다!' : '오답입니다.'}
                      </p>
                      <p className="opacity-90">
                        정답: <span className="font-bold">{currentQuestion.correctAnswer}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2 text-indigo-600 font-bold text-sm uppercase">
                      <Brain className="w-4 h-4" />
                      해설
                    </div>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {gameState === 'feedback' && (
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={nextQuestion}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  다음 문제 <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;