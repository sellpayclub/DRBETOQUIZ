import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import AnalysisLoader from './components/AnalysisLoader';
import DiagnosisPage from './components/DiagnosisPage';
import SalesPage from './components/SalesPage';
import { Step, UserData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [userData, setUserData] = useState<UserData | null>(null);

  const startQuiz = () => {
    window.scrollTo(0, 0);
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (data: UserData) => {
    setUserData(data);
    window.scrollTo(0, 0);
    setCurrentStep('analyzing');
  };

  const handleAnalysisFinish = () => {
    window.scrollTo(0, 0);
    setCurrentStep('diagnosis');
  };

  const handleDiagnosisContinue = () => {
    window.scrollTo(0, 0);
    setCurrentStep('sales');
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {currentStep === 'landing' && <LandingPage onStart={startQuiz} />}
      {currentStep === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {currentStep === 'analyzing' && <AnalysisLoader onFinish={handleAnalysisFinish} />}
      {currentStep === 'diagnosis' && <DiagnosisPage userData={userData} onContinue={handleDiagnosisContinue} />}
      {currentStep === 'sales' && <SalesPage userData={userData} />}
    </div>
  );
}

export default App;