import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Glossary from './components/Glossary';
import Scripts from './components/Scripts';
import Checklist from './components/Checklist';
import Templates from './components/Templates';
import Quiz from './components/Quiz';
import { MANUAL_DATA } from './data';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard data={MANUAL_DATA} onNavigate={setCurrentView} />;
      case 'quiz':
        return <Quiz data={MANUAL_DATA} />;
      case 'glossary':
        return <Glossary terms={MANUAL_DATA.glossary} />;
      case 'scripts':
        return <Scripts scripts={MANUAL_DATA.consultation_scripts} />;
      case 'checklist':
        return <Checklist items={MANUAL_DATA.new_patient_checklist} />;
      case 'templates':
        return <Templates templates={MANUAL_DATA.reservation_management} />;
      default:
        return <Dashboard data={MANUAL_DATA} onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default App;