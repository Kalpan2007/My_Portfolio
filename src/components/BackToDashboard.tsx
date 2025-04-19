import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToDashboard = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back to Dashboard</span>
    </button>
  );
};

export default BackToDashboard;