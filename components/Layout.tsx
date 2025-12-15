import React, { useState } from 'react';
import { 
  BookOpen, 
  Phone, 
  CheckSquare, 
  MessageSquare, 
  LayoutDashboard,
  Menu,
  X,
  Stethoscope,
  Gamepad2
} from 'lucide-react';
import { ViewState } from '../types';

interface LayoutProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard' as ViewState, label: '대시보드', icon: LayoutDashboard },
    { id: 'quiz' as ViewState, label: '실전 퀴즈 & 학습', icon: Gamepad2 },
    { id: 'glossary' as ViewState, label: '치과 용어 사전', icon: BookOpen },
    { id: 'scripts' as ViewState, label: '상담 스크립트', icon: Phone },
    { id: 'checklist' as ViewState, label: '신환 체크리스트', icon: CheckSquare },
    { id: 'templates' as ViewState, label: '문자/예약 템플릿', icon: MessageSquare },
  ];

  const handleNavClick = (view: ViewState) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2 font-bold text-teal-600 text-lg">
          <Stethoscope className="w-6 h-6" />
          <span>젊어지는치과</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:flex items-center gap-2">
          <div className="bg-teal-600 p-1.5 rounded-lg">
             <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">젊어지는치과</h1>
            <p className="text-xs text-slate-500 font-medium">업무 매뉴얼 v1.0</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${currentView === item.id 
                  ? 'bg-teal-50 text-teal-700 font-semibold shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              CS
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">신입 상담원</p>
              <p className="text-xs text-slate-500">교육생 모드</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)] md:h-screen scroll-smooth">
        <div className="max-w-5xl mx-auto pb-20 md:pb-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;