import React, { useState } from 'react';
import { ViewState, ManualData } from '../types';
import { 
  BookOpen, Phone, CheckSquare, MessageSquare, ArrowRight, Gamepad2,
  MapPin, Globe, Users, Clock, Activity, Building, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';

interface DashboardProps {
  data: ManualData;
  onNavigate: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isFaqSectionOpen, setIsFaqSectionOpen] = useState(false);

  const cards = [
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
    },
    {
      id: 'quiz' as ViewState,
      title: '실전 퀴즈',
      desc: '업무 지식을 퀴즈로 풀며 레벨업하세요!',
      icon: Gamepad2,
      color: 'bg-rose-500',
      count: 'Level 1~3'
    }
  ];

  const hospitalLinks = [
    { title: '홈페이지', url: 'https://dentalsalon.co.kr', icon: Globe },
    { title: '의료진 소개', url: 'https://dentalsalon.co.kr/introduce/medicalteam.html', icon: Users },
    { title: '진료 안내', url: 'https://dentalsalon.co.kr/introduce/location.html', icon: Clock },
    { title: '컴퓨터분석임플란트', url: 'https://dentalsalon.co.kr/implant/analyze.html', icon: Activity },
  ];

  const faqs = [
    {
      q: "임플란트 수술은 많이 아픈가요?",
      a: "마취 후 진행되므로 수술 중 통증은 거의 없습니다. 특히 저희 병원은 컴퓨터 분석을 통한 최소 절개 시술로 붓기와 통증을 최소화하고 있습니다."
    },
    {
      q: "치료 기간은 얼마나 걸리나요?",
      a: "보통 하악은 3~4개월, 상악은 5~6개월 정도 소요됩니다. 단, 뼈 상태가 좋고 컴퓨터 분석 임플란트를 진행할 경우 기간이 단축될 수 있습니다."
    },
    {
      q: "뼈이식은 반드시 해야 하나요?",
      a: "잇몸뼈가 부족한 경우에만 진행합니다. 정밀 CT 분석을 통해 꼭 필요한 경우에만 권해드리며, 본원은 뼈가 튼튼한 곳을 찾아 식립하여 뼈이식을 최소화하고 있습니다."
    },
    {
      q: "고혈압이나 당뇨가 있어도 수술이 가능한가요?",
      a: "네, 가능합니다. 컴퓨터 분석 임플란트는 최소 절개로 출혈이 적어 기저질환이 있으신 분들도 안전하게 수술받으실 수 있습니다."
    },
    {
      q: "수면 임플란트(의식하 진정요법)는 전신마취인가요?",
      a: "아닙니다. 자발적 호흡이 가능한 가수면 상태로, 잠을 자는 듯한 편안한 상태에서 치료받으시며 의사소통도 가능합니다. 전신마취보다 회복이 빠르고 안전합니다."
    },
    {
      q: "임플란트 수명은 얼마나 되나요?",
      a: "관리에 따라 다르지만, 정기적인 검진과 잇몸 관리를 잘 해주시면 반영구적으로 사용하실 수 있습니다. 본원은 철저한 사후관리 시스템을 운영하고 있습니다."
    },
    {
      q: "발치 후 바로 임플란트를 심을 수 있나요?",
      a: "잇몸뼈 상태가 양호하고 염증이 심하지 않다면 발치 당일 식립이 가능합니다. 이를 통해 치료 기간을 2~3개월 단축할 수 있습니다."
    },
    {
      q: "전체 임플란트 대신 틀니를 해도 될까요?",
      a: "틀니는 씹는 힘이 약하고 잇몸 통증이 있을 수 있습니다. 경제적인 부담이 되신다면, 적은 수의 임플란트를 심고 틀니를 연결하는 '임플란트 틀니'도 좋은 대안이 될 수 있습니다."
    },
    {
      q: "수술 후 식사는 언제부터 가능한가요?",
      a: "마취가 풀린 후(보통 2~3시간 뒤) 부드러운 유동식부터 드시는 것이 좋습니다. 뜨겁거나 자극적인 음식은 피해주시고, 수술 반대편으로 씹으셔야 합니다."
    },
    {
      q: "국산과 수입 임플란트 중 어떤 것이 좋나요?",
      a: "국산과 외산 모두 상향 평준화되어 제품 자체의 차이보다는 수술하는 의료진의 실력과 사후관리가 더 중요합니다. 환자분의 잇몸뼈 상태에 가장 적합한 제품을 추천해 드립니다."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">안녕하세요, 상담원님! 👋</h1>
        <p className="text-teal-100 mb-6">오늘도 {data.hospital_name}의 얼굴이 되어주셔서 감사합니다. <br/>친절하고 정확한 상담을 위해 준비된 매뉴얼을 활용해보세요.</p>
        <div className="flex gap-4 text-sm font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
          <span>📅 업데이트: {data.document_date}</span>
          <span>🎯 {data.purpose}</span>
        </div>
      </div>

      {/* Manual Navigation Cards */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">매뉴얼 바로가기</h2>
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

      {/* Hospital Info & Links Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Building className="w-6 h-6 text-teal-600" />
          병원 주요 정보 (강남역 젊어지는 치과)
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-white p-2.5 rounded-full border border-slate-200 shadow-sm">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">상담/예약 문의</p>
                <a href="tel:02-3482-2828" className="text-2xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
                  02-3482-2828
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
               <div className="bg-white p-2.5 rounded-full border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">오시는 길 (강남역 10번 출구)</p>
                <p className="font-medium text-slate-900 leading-relaxed">
                  서울특별시 서초구 강남대로 405<br/>
                  <span className="text-slate-600">통영빌딩 5층, 9층, 12층</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {hospitalLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 transition-all group bg-white shadow-sm"
              >
                <link.icon className="w-8 h-8 text-slate-400 mb-3 group-hover:text-teal-600 transition-colors" />
                <span className="font-semibold text-sm text-center">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
        <button 
          onClick={() => setIsFaqSectionOpen(!isFaqSectionOpen)}
          className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left"
        >
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-teal-600" />
            자주 묻는 질문 (FAQ) - 임플란트
          </h2>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {isFaqSectionOpen ? '접기' : '펼쳐보기'}
            {isFaqSectionOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>
        
        {isFaqSectionOpen && (
          <div className="p-6 pt-0 border-t border-slate-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden h-fit">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-4 transition-colors text-left ${openFaqIndex === idx ? 'bg-teal-50' : 'bg-slate-50 hover:bg-slate-100'}`}
                  >
                    <span className={`font-bold text-sm flex-1 ${openFaqIndex === idx ? 'text-teal-800' : 'text-slate-700'}`}>Q. {faq.q}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-teal-500 shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-4 bg-white border-t border-slate-200 text-slate-600 leading-relaxed text-sm animate-fade-in">
                      <span className="font-bold text-teal-600 mr-2">A.</span>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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