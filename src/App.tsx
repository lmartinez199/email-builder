import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shell } from '@/components/layout/Shell';
import { HomePage } from '@/pages/HomePage';
import { NewTemplatePage } from '@/pages/NewTemplatePage';
import { EditTemplatePage } from '@/pages/EditTemplatePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell><HomePage /></Shell>} />
        <Route path="/new" element={<Shell><NewTemplatePage /></Shell>} />
        <Route path="/edit/:id" element={<Shell><EditTemplatePage /></Shell>} />
      </Routes>
    </BrowserRouter>
  );
}
