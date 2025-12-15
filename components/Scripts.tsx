import React, { useState } from 'react';
import { Copy, Check, MessageCircle } from 'lucide-react';
import { ConsultationScript } from '../types';

interface ScriptsProps {
  scripts: ConsultationScript[];
}

const Scripts: React.FC<ScriptsProps> = ({ scripts }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const highlightText = (text: string) => {
    // Basic bold markdown parsing
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-teal-700 bg-teal-50 px-1 rounded">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">상담 스크립트</h2>
          <p className="text-slate-500 mt-1">상황별 표준 응대 스크립트입니다.</p>
        </div>
      </div>

      <div className="space-y-4">
        {scripts.map((script, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full border border-slate-200 text-teal-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{script.situation}</h3>
              </div>
              <button
                onClick={() => handleCopy(script.content, idx)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-teal-600 transition-colors"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>전체 복사</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-6">
              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 leading-relaxed text-lg font-medium relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 rounded-l-lg"></div>
                {highlightText(script.content)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scripts;