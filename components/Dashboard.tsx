import React from 'react';
import { ViewState, ManualData } from '../types';
import { BookOpen, Phone, CheckSquare, MessageSquare, ArrowRight, Gamepad2 } from 'lucide-react';

interface DashboardProps {
  data: ManualData;
  onNavigate: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onNavigate }) => {
  const cards = [
    {
      id: 'quiz' as ViewState,
      title: '실전 퀴즈',
      desc: '업무 지식을 퀴즈로 풀며 레벨업하세요!',
      icon: Gamepad2,
      color: 'bg-rose-500',
      count: 'Level 1~3'
    },
    {
      id: 'glossary' as ViewState,
      title: '용어 사전',
      desc: '치과 전문 용어와 약어를 빠르게 검색하세요.',
      icon: BookOpen,
      color: 'bg-blue-500',
      count: `${data.glossary.length}개 용어`
    },
    {
      id: 'scripts' as ViewState,
      title: '상담 스크립트',
      desc: '상황별 응대 멘트와 필수 안내 사항입니다.',
      icon: Phone,
      color: 'bg-emerald-500',
      count: `${data.consultation_scripts.length}개 상황`
    },
    {
      id: 'checklist' as ViewState,
      title: '신환 체크리스트',
      desc: '신규 환자 접수 시 필수 확인 항목입니다.',
      icon: CheckSquare,
      color: 'bg-orange-500',
      count: `${data.new_patient_checklist.length}개 항목`
    },
    {
      id: 'templates' as ViewState,
      title: '문자 템플릿',
      desc: '예약 안내 및 부재중 메시지 양식입니다.',
      icon: MessageSquare,
      color: 'bg-indigo-500',
      count: `${data.reservation_management.length}개 양식`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">안녕하세요, 상담원님! 👋</h1>
        <p className="text-teal-100 mb-6">오늘도 {data.hospital_name}의 얼굴이 되어주셔서 감사합니다. <br/>친절하고 정확한 상담을 위해 준비된 매뉴얼을 활용해보세요.</p>
        <div className="flex gap-4 text-sm font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
          <span>📅 업데이트: {data.document_date}</span>
          <span>🎯 {data.purpose}</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">바로가기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all text-left group flex flex-col h-full"
            >
              <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{card.title}</h3>
              <p className="text-slate-500 text-sm mb-4 flex-1">{card.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 w-full">
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">{card.count}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-2 rounded-full">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-bold text-indigo-900 text-lg mb-1">오늘의 중요 체크포인트</h3>
            <ul className="list-disc list-inside text-indigo-800 space-y-1 text-sm">
              <li>신환 상담 시 <strong>성별 및 생년월일</strong> 확인을 잊지 마세요.</li>
              <li>49년생 이전 출생자 분들은 <strong>거동 유무</strong> 확인이 필수입니다.</li>
              <li>CT 촬영 이벤트를 적극적으로 활용하여 내원을 유도해주세요.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;