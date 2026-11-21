import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@components/Header';
import { SettingsModal } from '@components/SettingsModal';
import { SubjectsPage } from '@pages/SubjectsPage';
import { SubjectDashboardPage } from '@pages/SubjectDashboardPage';
import { QuizPage } from '@pages/QuizPage';
import { ResultPage } from '@pages/ResultPage';
import { runDataMigration } from '@services/migrationService';

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Migrate any legacy data on initial launch
    runDataMigration();
  }, []);

  return (
    <Box minH="100vh" bg="#183581" color="white">
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<SubjectsPage />} />
          <Route path="/subject/:code" element={<SubjectDashboardPage />} />
          <Route path="/quiz/:code/exam/:examNum" element={<QuizPage />} />
          <Route path="/quiz/:code/mock/:mockId" element={<QuizPage />} />
          <Route path="/result/:code/exam/:examNum" element={<ResultPage />} />
          <Route path="/result/:code/mock/:mockId" element={<ResultPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </Box>
  );
}
