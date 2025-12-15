import React from 'react';
import { ChecklistItem } from '../types';
import { CheckSquare, AlertCircle } from 'lucide-react';

interface ChecklistProps {
  items: ChecklistItem[];
}

const Checklist: React.FC<ChecklistProps> = ({ items }) => {
  const essentialItems = items.filter(i => i.type.includes('필수'));
  const additionalItems = items.filter(i => !i.type.includes('필수'));

  const highlightText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="font-bold text-red-600">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  const renderSection = (title: string, items: ChecklistItem[], isEssential: boolean) => (
    <div className={`rounded-xl border ${isEssential ? 'border-rose-200 bg-rose-50/30' : 'border-slate-200 bg-white'} overflow-hidden`}>
      <div className={`p-4 border-b ${isEssential ? 'bg-rose-100/50 border-rose-200' : 'bg-slate-50 border-slate-200'} flex items-center gap-2`}>
        {isEssential ? <AlertCircle className="w-5 h-5 text-rose-600" /> : <CheckSquare className="w-5 h-5 text-slate-500" />}
        <h3 className={`font-bold ${isEssential ? 'text-rose-800' : 'text-slate-700'}`}>{title}</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((item, idx) => (
          <label key={idx} className="flex items-start gap-3 p-4 hover:bg-white transition-colors cursor-pointer group">
            <div className="relative flex items-center mt-0.5">
              <input type="checkbox" className="peer w-5 h-5 appearance-none rounded border border-slate-300 checked:bg-teal-600 checked:border-teal-600 transition-all cursor-pointer" />
              <svg className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
              </svg>
            </div>
            <span className={`text-slate-700 leading-relaxed group-hover:text-slate-900 ${isEssential ? 'font-medium' : ''}`}>
              {highlightText(item.item)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">신환 응대 체크리스트</h2>
          <p className="text-slate-500 mt-1">신규 환자 접수 시 반드시 확인해야 할 항목들입니다.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderSection('필수 확인 항목', essentialItems, true)}
        {renderSection('추가 확인 항목', additionalItems, false)}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800 flex items-start gap-2">
        <AlertCircle className="w-5 h-5 shrink-0" />
        <p>체크리스트는 내원 예약 시 환자 정보란에 기입해야 하는 핵심 정보입니다. 특히 고령 환자의 경우 <strong>전신 질환 및 거동 여부</strong>를 꼼꼼히 체크해주세요.</p>
      </div>
    </div>
  );
};

export default Checklist;