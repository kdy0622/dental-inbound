import React, { useState } from 'react';
import { ReservationMessage } from '../types';
import { Smartphone, Copy, Check, Send } from 'lucide-react';

interface TemplatesProps {
  templates: ReservationMessage[];
}

const Templates: React.FC<TemplatesProps> = ({ templates }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">문자/예약 템플릿</h2>
          <p className="text-slate-500 mt-1">고객 안내 문자 발송 시 활용하세요.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <Smartphone className="w-5 h-5 text-slate-500" />
                {template.step}
              </div>
            </div>
            
            <div className="p-6 flex-1 bg-slate-50/50">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative">
                <div className="absolute -left-2 top-4 w-2 h-3 bg-white border-l border-b border-slate-200 transform rotate-45"></div>
                <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed text-sm">
                  {template.content}
                </pre>
              </div>
              <div className="mt-2 text-right text-xs text-slate-400">
                {template.content.length}자
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-white">
              <button
                onClick={() => handleCopy(template.content, idx)}
                className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  copiedIndex === idx 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4" />
                    내용이 복사되었습니다
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    템플릿 복사하기
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;