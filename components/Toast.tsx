
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-5 z-[10000] animate-bounce-in">
      <div className="bg-[#513C2E] text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-lg">
        <div className="w-8 h-8 rounded-full bg-[#BEA48E] flex items-center justify-center text-white text-sm">
          <i className="fa-solid fa-check"></i>
        </div>
        <span className="text-sm font-bold tracking-tight">{message}</span>
        <button onClick={onClose} className="ml-4 text-white/50 hover:text-white">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <style>{`
        @keyframes bounceIn {
          0% { transform: translateY(-100%) scale(0.9); opacity: 0; }
          70% { transform: translateY(10%) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default Toast;
